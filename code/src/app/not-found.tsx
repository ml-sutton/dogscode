import Link from "next/link"

function NotFound()
{
  return (
    <main className="grid h-[51vh] lg:h-[67.2vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:transition-all lg:hover:tracking-widest lg:hover:text-6xl">Page not found</h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, The page you are looking for doesn&apos;t exist or it was silence by the CIA</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home &rarr;</Link>
        </div>
      </div>
    </main>
  )
}
export default NotFound;
