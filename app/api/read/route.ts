import { NextRequest, NextResponse } from 'next/server'
import { PineconeClient } from '@pinecone-database/pinecone'
import {
  queryPineconeVectorStoreAndQueryLLM,
} from '../../../utils'
import { indexName } from '../../../config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = new PineconeClient();
    await client.init({
      apiKey: process.env.PINECONE_API_KEY || '',
      environment: process.env.PINECONE_ENVIRONMENT || ''
    });

    const text = await queryPineconeVectorStoreAndQueryLLM(client, indexName, body);

    return NextResponse.json({
      data: text
    });
  } catch (error) {
    console.error('Error processing the request:', error);
    return NextResponse.json({
      error: 'Internal Server Error'
    }, { status: 500 });
  }
}
