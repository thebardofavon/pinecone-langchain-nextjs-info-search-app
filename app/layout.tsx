import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Document Q&A App',
  description: 'Ask questions about your documents using AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary-600 text-white py-4">
            <div className="container">
              <h1 className="text-2xl font-bold">Document Q&A</h1>
            </div>
          </header>
          <main className="container flex-grow py-8">{children}</main>
          <footer className="bg-gray-100 py-4">
            <div className="container text-center text-gray-500 text-sm">
              Built with Next.js, Pinecone, and Groq LLMs
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}