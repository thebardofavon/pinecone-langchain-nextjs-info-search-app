// import { CohereEmbeddings } from "@langchain/cohere"; // Use the dedicated package

// if (!process.env.COHERE_API_KEY) {
//   throw new Error('COHERE_API_KEY is not defined');
// }

// export const createEmbeddings = () => {
//   return new CohereEmbeddings({
//     apiKey: process.env.COHERE_API_KEY,
//     modelName: 'embed-english-v3.0' // 1024 dimensions
//   });
// };

// export default createEmbeddings;

// Change this line:
// import { CohereEmbeddings } from "@langchain/community/embeddings/cohere";

// To this:
import { CohereEmbeddings } from "@langchain/cohere"; // Use the dedicated package

if (!process.env.COHERE_API_KEY) {
  throw new Error('COHERE_API_KEY environment variable is not set.'); // Improved error message
}

export const createEmbeddings = () => {
  // Add a check here too, just in case the module-level check context differs (though unlikely in Next.js)
  const apiKey = process.env.COHERE_API_KEY;
  if (!apiKey) {
      throw new Error("COHERE_API_KEY became undefined before creating embeddings instance.");
  }
  return new CohereEmbeddings({
    apiKey: apiKey,
    model: 'embed-english-v3.0' // Use 'model' instead of 'modelName' for newer versions
  });
};

export default createEmbeddings;