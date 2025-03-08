import { ChatGroq } from "@langchain/groq";
import { ConversationalRetrievalQAChain } from "langchain/chains";

export const makeChain = (vectorstore: any) => {
  const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "llama3-large-v1",
    temperature: 0.7,
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(),
    {
      returnSourceDocuments: true,
    }
  );
  return chain;
};