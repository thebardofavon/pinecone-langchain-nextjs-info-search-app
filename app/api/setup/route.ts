// // import { NextResponse } from 'next/server'
// // import { PineconeClient } from '@pinecone-database/pinecone'
// // import { TextLoader } from 'langchain/document_loaders/fs/text'
// // import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
// // import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
// // import {
// //   createPineconeIndex,
// //   updatePinecone
// // } from '../../../utils'
// // import { indexName } from '../../../config'

// // export async function POST() {
// //   const loader = new DirectoryLoader('./documents_small', {
// //     ".txt": (path) => new TextLoader(path),
// //     ".md": (path) => new TextLoader(path),
// //     ".pdf": (path) => new PDFLoader(path)
// //   })

// //   const docs = await loader.load()
// //   const vectorDimensions = 1536

// //   const client = new PineconeClient()
// //   await client.init({
// //     apiKey: process.env.PINECONE_API_KEY || '',
// //     environment: process.env.PINECONE_ENVIRONMENT || ''
// //   })

// //   try {
// //     await createPineconeIndex(client, indexName, vectorDimensions)
// //     await updatePinecone(client, indexName, docs)
// //   } catch (err) {
// //     console.log('error: ', err)
// //   }

// //   return NextResponse.json({
// //     data: 'successfully created index and loaded data into pinecone...'
// //   })
// // }
// import { NextResponse } from 'next/server'
// import { PineconeClient } from '@pinecone-database/pinecone'
// import { TextLoader } from 'langchain/document_loaders/fs/text'
// import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
// import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
// import {
//   createPineconeIndex, 
//   updatePinecone
// } from '../../../utils'
// import { indexName } from '../../../config'

// export async function POST() {
//   const loader = new DirectoryLoader('./documents_small', {
//     ".txt": (path) => new TextLoader(path),
//     ".md": (path) => new TextLoader(path),
//     ".pdf": (path) => new PDFLoader(path)
//   })

//   const docs = await loader.load()
//   const vectorDimensions = 1536

//   const client = new PineconeClient()
//   await client.init({
//     apiKey: process.env.PINECONE_API_KEY || '',
//     environment: process.env.PINECONE_ENVIRONMENT || ''
//   })

//   try {
//     // **Check if the index already exists**
//     const existingIndexes = await client.listIndexes();
//     const indexExists = existingIndexes.indexes.some(index => index.name === indexName);

//     if (!indexExists) {
//       console.log(`Creating index "${indexName}"...`);
//       await createPineconeIndex(client, indexName, vectorDimensions); // Assuming createPineconeIndex still handles index creation
//       console.log(`Index "${indexName}" created.`);
//     } else {
//       console.log(`Index "${indexName}" already exists. Skipping index creation.`);
//     }

//     console.log(`Updating index "${indexName}" with data...`);
//     await updatePinecone(client, indexName, docs);
//     console.log(`Index "${indexName}" updated.`);

//   } catch (err) {
//     console.error('Error during Pinecone setup:', err);
//     return NextResponse.json({ error: 'Failed to setup Pinecone index and load data.' }, { status: 500 }); // Return error response
//   }

//   return NextResponse.json({
//     data: 'Successfully processed documents and updated Pinecone index.'
//   });
// }

import { NextResponse } from 'next/server';
import { PineconeClient } from '@pinecone-database/pinecone';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import {
    createPineconeIndex, // You might need to adjust this function as well
    updatePinecone
} from '../../../utils';
import { indexName } from '../../../config';

export async function POST() {
    const loader = new DirectoryLoader('./documents_small', {
        ".txt": (path) => new TextLoader(path),
        ".md": (path) => new TextLoader(path),
        ".pdf": (path) => new PDFLoader(path)
    });

    const docs = await loader.load();
    const vectorDimensions = 1536;

    const client = new PineconeClient();
    await client.init({
        apiKey: process.env.PINECONE_API_KEY || '',
        environment: process.env.PINECONE_ENVIRONMENT || ''
    });

    try {
        // **Check if the index already exists**
        const existingIndexes = await client.listIndexes(); // Now directly get string[] (array of index names)

        // **Type check and safety:** Ensure existingIndexes is an array of strings
        if (!Array.isArray(existingIndexes)) {
            console.error("Error: Unexpected response format from Pinecone listIndexes(). Expected string array.");
            return NextResponse.json({ error: 'Failed to list Pinecone indexes due to unexpected response.' }, { status: 500 });
        }

        // **Directly use existingIndexes (which is now string[]) to check if indexName exists**
        const indexExists = existingIndexes.some(name => name === indexName); // 'name' is now an index name (string)

        if (!indexExists) {
            console.log(`Creating index "${indexName}"...`);
            await createPineconeIndex(client, indexName, vectorDimensions); // Assuming createPineconeIndex still handles index creation
            console.log(`Index "${indexName}" created.`);
        } else {
            console.log(`Index "${indexName}" already exists. Skipping index creation.`);
        }

        console.log(`Updating index "${indexName}" with data...`);
        await updatePinecone(client, indexName, docs);
        console.log(`Index "${indexName}" updated.`);

    } catch (err) {
        console.error('Error during Pinecone setup:', err);
        return NextResponse.json({ error: 'Failed to setup Pinecone index and load data.' }, { status: 500 }); // Return error response
    }

    return NextResponse.json({
        data: 'Successfully processed documents and updated Pinecone index.'
    });
}