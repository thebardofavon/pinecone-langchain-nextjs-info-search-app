export interface QueryRequest {
    query: string;
  }
  
  export interface QueryResponse {
    answer: string;
    sourceDocuments?: string[];
  }
  
  export interface DocumentChunk {
    pageContent: string;
    metadata: {
      source: string;
    };
  }