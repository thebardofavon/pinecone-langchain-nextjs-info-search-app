# Pinecone, LangChain, Next.js Information Search Application on Custom Database using OpenAI model
This is an app that takes text (text files), embeds them into vectors, stores them into Pinecone, and allows semantic searching of the data.
In this project, the custom database is information about my college, Indian Institute of Information Technology, Guwuahati (IIITG) (https://iiitg.ac.in/).

### Prerequisites

To run this app, you need the following:

1. [Pinecone](https://app.pinecone.io/) API Key
2. An [OpenAI](https://platform.openai.com/) API key

### To run

To run the app locally, follow these steps:

1. Clone this repo

```sh
git clone git@github.com:thebardofavon/pinecone-langchain-nextjs-info-search-app.git

```

2. Change into the directory and install the dependencies using either NPM or Yarn

3. Update `.env.local` with your own API keys and environment.

4. You can also add custom text or markdown files into the `/documents` folder.

5. Run the app:

```sh
npm run dev
```

### Running a query

Click on the 'Initialise database for query' button before typing the query and wait until prompted to enter the query. Then click on 'ASK'.

