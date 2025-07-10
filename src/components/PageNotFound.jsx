export default function PageNotFound() {

    return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center bg-amber-50">
      <h1 className="text-7xl font-extrabold text-amber-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-amber-500 text-white rounded-lg font-semibold shadow hover:bg-amber-600 transition-colors duration-200"
      >
        Go Home
      </a>
    </div>
  );
}