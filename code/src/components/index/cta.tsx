import Link from "next/link"

export const CTA:React.FC = () => 
{
  return (

<div className="mt-24 px-20 lg:px-60">
  <div className="relative isolate overflow-hidden bg-indigo-600 rounded-2xl py-12 px-6 shadow-lg sm:py-16 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-x-10">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Be part of building trans futures.
      </h2>
      <p className="mt-4 text-lg leading-8 text-indigo-100">
        Whether you're a developer, advocate, or ally; your support helps us make tools like Haj and SafePharma real. Join us in shaping tech that protects and empowers.
      </p>
    </div>
    <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
      <a
        href="#get-involved"
        className="inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-white/20 hover:bg-indigo-100 transition"
      >
        Get Involved
      </a>
    </div>
  </div>
</div>
  )
}
