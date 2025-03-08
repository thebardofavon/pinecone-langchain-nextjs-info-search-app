import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { timeout } from './config'
import { makeChain } from './makeChain';
import { GroqEmbeddings } from "@langchain/groq";

export const queryPineconeVectorStoreAndQueryLLM = async (
  client,
  indexName,
  question
) => {
  console.log('Querying Pinecone vector store...');
  const index = client.Index(indexName);
  const embeddings = new GroqEmbeddings({
    apiKey: process.env.GROQ_API_KEY,
  }) 
  const queryEmbedding = await embeddings.embedQuery(question);
  let queryResponse = await index.query({
    queryRequest: {
      topK: 10,
      vector: queryEmbedding,
      includeMetadata: true,
      includeValues: true,
    },
  });
  console.log(`Found ${queryResponse.matches.length} matches...`);
  console.log(`Asking question: ${question}...`);
  if (queryResponse.matches.length) {
    const chain = makeChain(vectorStore);
    const result = await chain.call({
      question,
      chat_history: []
    });
    return result.text;
  } else {
    console.log('Since there are no matches, Llama 3 will not be queried.');
  }
};
export const createPineconeIndex = async (
  client,
  indexName,
  vectorDimension
) => {
  console.log(`Checking "${indexName}"...`);
  const existingIndexes = await client.listIndexes();
  if (!existingIndexes.includes(indexName)) {
    console.log(`Creating "${indexName}"...`);
    await client.createIndex({
      createRequest: {
        name: indexName,
        dimension: vectorDimension,
        metric: 'cosine',
      },
    });
    
      console.log(`Creating index.... please wait for it to finish initializing.`);
    
    await new Promise((resolve) => setTimeout(resolve, timeout));
  } else {
    console.log(`"${indexName}" already exists.`);
  }
};


export const updatePinecone = async (client, indexName, docs) => {
  console.log('Retrieving Pinecone index...');
  const index = client.Index(indexName);
  console.log(`Pinecone index retrieved: ${indexName}`);
  for (const doc of docs) {
    console.log(`Processing document: ${doc.metadata.source}`);
    const txtPath = doc.metadata.source;
    const text = doc.pageContent;
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
    });
    console.log('Splitting text into chunks...');
    const chunks = await textSplitter.createDocuments([text]);
    console.log(`Text split into ${chunks.length} chunks`);
    console.log(
      `Calling Llama 3's Embedding endpoint documents with ${chunks.length} text chunks ...`
    );

    const embeddings = new GroqEmbeddings({
      apiKey: process.env.GROQ_API_KEY,
    })
    const embeddingsArrays = await embeddings.embedDocuments(
      chunks.map((chunk) => chunk.pageContent.replace(/\n/g, " "))
    );
    console.log('Finished embedding documents');
    console.log(
      `Creating ${chunks.length} vectors array with id, values, and metadata...`
    );
    const batchSize = 100;
    let batch:any = [];
    for (let idx = 0; idx < chunks.length; idx++) {
      const chunk = chunks[idx];
      const vector = {
        id: `${txtPath}_${idx}`,
        values: embeddingsArrays[idx],
        metadata: {
          ...chunk.metadata,
          loc: JSON.stringify(chunk.metadata.loc),
          pageContent: chunk.pageContent,
          txtPath: txtPath,
        },
      };
      batch = [...batch, vector]
      if (batch.length === batchSize || idx === chunks.length - 1) {
        await index.upsert({
          upsertRequest: {
            vectors: batch,
          },
        });
        batch = [];
      }
    }
    console.log(`Pinecone index updated with ${chunks.length} vectors`);
  }
};