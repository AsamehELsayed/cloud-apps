/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center text-white  justify-center">
      <h1 className="text-4xl font-bold  mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you're looking for does not exist.</p>
      <Link href="/"className="text-blue-500 hover:underline">
        Go back to the homepage
      </Link>
    </section>
  );
};

export default NotFoundPage;