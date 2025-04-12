import { NextRequest, NextResponse } from 'next/server';
import { pineconeIndex } from '@/lib/pinecone';
import groq from '@/lib/groq';
import createEmbeddings from '@/lib/embeddings';
import { QueryRequest, QueryResponse, DocumentChunk } from '@/lib/types';
// import { ScoredVector } from "@pinecone-database/pinecone"; 

export async function POST(req: NextRequest) {
  try {
    const { query } = (await req.json()) as QueryRequest;

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    // Create embeddings for the query using Cohere
    const embeddings = createEmbeddings();
    
    const queryEmbedding = await embeddings.embedQuery(query);

    // Search Pinecone for similar documents
    const results = await pineconeIndex.query({
      vector: queryEmbedding,
      topK: 5,
      includeMetadata: true,
    });

    // Extract text from the results
    const relevantDocs = results.matches.map((match) => ({
      pageContent: match.metadata?.text as string,
      metadata: {
        source: match.metadata?.source as string,
      },
    })) as DocumentChunk[];

    if (relevantDocs.length === 0) {
      return NextResponse.json({
        answer: "I couldn't find any relevant information in the documents to answer your question.",
      });
    }

    // Construct context from relevant documents
    const context = relevantDocs
      .map((doc) => `Content: ${doc.pageContent}\nSource: ${doc.metadata.source}`)
      .join('\n\n');

    // Generate an answer using Groq's LLaMA 3 model
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that answers questions based on the provided document context.
          Answer the user's question based ONLY on the information provided in the context.
          If the context doesn't contain relevant information to answer the question, admit that you don't know.
          Provide detailed, accurate answers and cite the source documents when possible.`,
        },
        {
          role: 'user',
          content: `Context:\n${context}\n\nQuestion: ${query}\n\nAnswer:`,
        },
      ],
      model: 'llama3-70b-8192',
      temperature: 0.1,
      max_tokens: 1024,
    });

    const answer = completion.choices[0].message.content;

    const response: QueryResponse = {
      answer,
      sourceDocuments: relevantDocs.map(
        (doc) => `${doc.metadata.source}`
      ),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in read:', error);
    return NextResponse.json(
      { error: 'Failed to process your question' },
      { status: 500 }
    );
  }
}