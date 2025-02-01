export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-8">
      <h1 className="text-4xl font-bold">Welcome to LMS</h1>
      <p className="mt-4 text-lg">Your platform for online learning.</p>
      <div className="mt-6 flex gap-4">
        <a href="/courses" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          View Courses
        </a>
        <a href="/login" className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-200 transition">
          Login
        </a>
      </div>
    </div>
  );
}
