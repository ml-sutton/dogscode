import Link from "next/link"

function NotFound()
{
  return (
    <div className="flex justify-center items-center h-[50.8vh] lg:h-[65.4vh] text-black">
      <div className="bg-gray-400 rounded-3xl p-16 lg:p-48 border-2 border-black text-center">
        <h1 className="text-3xl font-bold mb-4 lg:transition-all lg:hover:tracking-widest lg:hover:text-4xl">404 - Page Not Found</h1>
        <p className="mb-6 lg:transition-all lg:hover:tracking-widest lg:hover:text-lg">The page you are looking for does not exist or was silenced by the CIA.</p>
        <Link
          href="/"
          className="inline-block rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition w-fit lg:transition-all lg:hover:tracking-widest lg:hover:text-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
export default NotFound;
