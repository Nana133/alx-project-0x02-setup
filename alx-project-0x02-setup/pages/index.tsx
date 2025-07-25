import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4 text-center">
        <h2 className="text-3xl font-semibold">Welcome to ALX Project 2</h2>
        <p className="mt-2 text-gray-700">This is a basic setup with Next.js, TypeScript, and Tailwind CSS.</p>
      </main>
    </div>
  );
}
