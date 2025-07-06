// app/not-found.tsx (for App Router)
// or pages/404.tsx (for Pages Router)

import Link from "next/link"; // Import the Link component for navigation

/**
 * Custom 404 Not Found Page component.
 * This component is automatically rendered by Next.js when a route
 * does not exist or when the `notFound()` function is called.
 *
 * It is designed to be a standalone page, meaning it will not inherit
 * the global layout (e.g., Navbar, Footer) defined in your root layout.tsx.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-black">
      <h1 className="text-6xl font-bold text-red-600 mb-4 rounded-lg p-2">
        404
      </h1>
      <p className="text-2xl text-gray-800 mb-8 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="px-6 py-3 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300">
        Go back to Home
      </Link>
    </div>
  );
}
