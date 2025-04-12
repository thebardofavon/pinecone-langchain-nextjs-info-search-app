// import { Pinecone } from '@pinecone-database/pinecone';

// if (!process.env.PINECONE_API_KEY) {
//   throw new Error('PINECONE_API_KEY is not defined');
// }

// if (!process.env.PINECONE_ENVIRONMENT) {
//   throw new Error('PINECONE_ENVIRONMENT is not defined');
// }

// if (!process.env.PINECONE_INDEX_NAME) {
//   throw new Error('PINECONE_INDEX_NAME is not defined');
// }

// const pinecone = new Pinecone({
//   apiKey: process.env.PINECONE_API_KEY,
//   environment: process.env.PINECONE_ENVIRONMENT,
// });

// export const pineconeIndex = pinecone.index(process.env.PINECONE_INDEX_NAME);

// export default pinecone;

// In lib/pinecone.ts

// Use the DEFAULT import
import { Pinecone } from '@pinecone-database/pinecone';

// --- Rest of your code ---

if (!process.env.PINECONE_API_KEY) {
  throw new Error('PINECONE_API_KEY is not defined');
}

if (!process.env.PINECONE_ENVIRONMENT) {
  throw new Error('PINECONE_ENVIRONMENT is not defined');
}

if (!process.env.PINECONE_INDEX_NAME) {
  throw new Error('PINECONE_INDEX_NAME is not defined');
}

// This line (15) is where the error occurs if Pinecone is not a constructor
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  // environment: process.env.PINECONE_ENVIRONMENT, // Often not needed here
});

const indexName = process.env.PINECONE_INDEX_NAME;
export const pineconeIndex = pinecone.index(indexName);

export default pinecone; // Export the instance