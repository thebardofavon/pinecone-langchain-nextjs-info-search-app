import { NextResponse } from 'next/server';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
// import { UnstructuredLoader } from "@langchain/community/document_loaders/fs/unstructured";
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { pineconeIndex } from '@/lib/pinecone';
import createEmbeddings from '@/lib/embeddings';
import path from 'path';

// This creates vectors from documents and stores them in Pinecone
export async function POST() {
  try {
    // Set up document loaders
    const loader = new DirectoryLoader(
      path.join(process.cwd(), 'documents_small'),
      {
        '.txt': (path) => new TextLoader(path),
        '.md': (path) => new TextLoader(path),
        '.pdf': (path) => new PDFLoader(path),
      }
    );

    console.log('Loading documents...');
    const docs = await loader.load();
    console.log(`Loaded ${docs.length} documents`);

    // Create a text splitter
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    console.log('Splitting documents into chunks...');
    const chunks = await textSplitter.splitDocuments(docs);
    console.log(`Split into ${chunks.length} chunks`);

    // Initialize Cohere embeddings
    const embeddings = createEmbeddings();

    // Create vectors from chunks and store in Pinecone
    console.log('Creating and storing embeddings...');

    console.log('[DEBUG] Checking Pinecone config inside API route:');
    console.log(`[DEBUG] PINECONE_INDEX_NAME used: ${process.env.PINECONE_INDEX_NAME}`);
    // IMPORTANT: DO NOT log the full API key in production logs! Just check its presence or first few chars for debugging.
    console.log(`[DEBUG] PINECONE_API_KEY is set: ${!!process.env.PINECONE_API_KEY}`);
    if (process.env.PINECONE_API_KEY) {
        console.log(`[DEBUG] PINECONE_API_KEY starts with: ${process.env.PINECONE_API_KEY.substring(0, 5)}...`);
    }

    
    // Prepare vectors for upsert
    const vectors = await Promise.all(
      chunks.map(async (chunk, i) => {
        const embedding = await embeddings.embedQuery(chunk.pageContent);
        return {
          id: `chunk-${i}`,
          values: embedding,
          metadata: {
            text: chunk.pageContent,
            source: chunk.metadata.source,
          },
        };
      })
    );

    // Clear existing vectors
    // await pineconeIndex.deleteAll();

    try {
      // Try describing stats first using the same instance
      console.log('[DEBUG] Attempting describeIndexStats...');
      const stats = await pineconeIndex.describeIndexStats();
      console.log('[DEBUG] describeIndexStats successful:', stats);
  
      // Now attempt the deleteAll
      console.log('[DEBUG] Attempting deleteAll...');
      await pineconeIndex.deleteAll(); // Line 60 (approx)
      console.log('[DEBUG] deleteAll successful.');
  
  } catch (error) {
      console.error('Error during Pinecone operation inside route:', error);
  }

    // Upsert vectors in batches
    const batchSize = 100;
    for (let i = 0; i < vectors.length; i += batchSize) {
      const batch = vectors.slice(i, i + batchSize);
      await pineconeIndex.upsert(batch);
      console.log(`Upserted batch ${i / batchSize + 1}`);
    }

    console.log('Setup completed successfully');
    return NextResponse.json({ 
      message: 'Document database initialized successfully',
      documentCount: docs.length,
      chunkCount: chunks.length 
    });
  } catch (error) {
    console.error('Error in setup:', error);
    return NextResponse.json(
      { error: 'Failed to initialize document database' },
      { status: 500 }
    );
  }
}