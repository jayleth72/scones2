import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* <Navbar /> */}
      
      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building amazing experiences with modern web technologies
          </p>
        </section>
      </main>
    </div>
  );
}