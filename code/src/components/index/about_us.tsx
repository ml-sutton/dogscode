
export const AboutUs: React.FC = ()=> 
{
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <p className="text-base/7 font-semibold text-indigo-600">Who are we?</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">An open-source initiative dedicated to the protection of trans rights and wellbeing of transgender individuals </h1>
          <p className="mt-6 text-xl/8 text-gray-700">Our mission to break down barriers to safe, affirming, and accessible care. We’re building tools that center trans autonomy, health, and survival; because we know that no one is coming to save us but us.</p>
        </div>
      </div>
    </div>
    <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228" src="/about-us-flag.jpg" alt="" />
    </div>
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
          <p>Our platform is grounded in the belief that transgender people deserve tools, spaces, and systems that are built for us, not forced upon us by institutions that have historically excluded or harmed us. We are not waiting for mainstream tech or healthcare to catch up; we are creating what we need right now. Every line of code, every design choice, every piece of documentation is a reflection of our refusal to be sidelined. This work is about survival, but also about joy, autonomy, and reclaiming control over our bodies and futures. </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <svg className="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Haj. </strong> A hormone dosage tracking app designed to put control back into the hands of trans people—offering a private, accessible way to track HRT dose, blood test results and understand changes over time. In a system built on gatekeeping and erasure, this tool is about autonomy, self-determination, and making informed choices on our own terms.</span>
            </li>
            <li className="flex gap-x-3">
              <svg className="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
              </svg>
              <span><strong className="font-semibold text-gray-900">SafePharma. </strong> A directory of trans-friendly pharmacies built to make accessing HRT safer, easier, and more transparent. It’s about cutting through fear and uncertainty, and replacing them with trust, shared knowledge, and a network of support rooted in lived experience.</span>
            </li>
          </ul>
          <p className="mt-8">We hope to use our two flagship applications, Haj and SafePharma, to challenge the systems that make trans healthcare difficult to access, and instead build alternatives rooted in trust, autonomy, and collective care. These tools are designed not just to serve individuals, but to strengthen the broader ecosystem of trans resilience—offering resources that are practical, protective, and powered by the community itself.</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our Commitment</h2>
          <p className="mt-6">We operate with a commitment to transparency, community ownership, and mutual aid. Every line of code is open-source, and every project is shaped by the lived experiences of trans people. Dogscode isn’t just a platform; it’s a movement toward self-determination in a world that often denies us control over our own bodies. Whether you’re a developer, organizer, healthcare worker, or someone just looking for support, you’re welcome here. Together, we’re building tools that don’t just serve us; they protect us.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
