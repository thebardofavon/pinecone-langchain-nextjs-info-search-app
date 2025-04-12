require('dotenv').config(); // Load .env variables
const { Pinecone } = require('@pinecone-database/pinecone');

async function checkApiKeyScope() {
  const apiKey = process.env.PINECONE_API_KEY;
  const expectedIndex = process.env.PINECONE_INDEX_NAME; // Optional: Read expected index name

  if (!apiKey) {
    console.error('PINECONE_API_KEY is not defined in your .env file.');
    return;
  }
  console.log(`Checking access for API Key starting with: ${apiKey.substring(0, 5)}...`);
  if (expectedIndex) {
      console.log(`Looking for index: ${expectedIndex}`);
  }


  try {
    const pinecone = new Pinecone({ apiKey });

    console.log('Attempting to list indexes...');
    const indexes = await pinecone.listIndexes();

    console.log('\nIndexes accessible by this API Key:');
    if (indexes.indexes && indexes.indexes.length > 0) {
       indexes.indexes.forEach(index => console.log(`- ${index.name} (Host: ${index.host}, Status: ${index.status?.state})`)); // Adjust based on actual structure returned
       // Check if the specific index is in the list
       const found = indexes.indexes.some(index => index.name === expectedIndex);
       if (expectedIndex) {
            if (found) {
                console.log(`\nSUCCESS: The API key CAN access the expected index '${expectedIndex}'.`);
            } else {
                console.error(`\nERROR: The API key CANNOT access the expected index '${expectedIndex}'. Check if the key belongs to the correct project.`);
            }
       }

    } else {
      console.log('No indexes found for this API key.');
       if (expectedIndex) {
            console.error(`\nERROR: The API key CANNOT access the expected index '${expectedIndex}' (and maybe others). Check if the key belongs to the correct project.`);
       }
    }

  } catch (error) {
    console.error('\nFailed to connect or list indexes with this API key:', error.message);
    if (error.response) { // Sometimes more details are here
        console.error('Response Status:', error.response.status);
        console.error('Response Data:', error.response.data);
    } else {
         console.error('Detailed Error:', error);
    }
    console.error('This likely means the API key is invalid or does not have permissions for this operation.');
  }
}

checkApiKeyScope();