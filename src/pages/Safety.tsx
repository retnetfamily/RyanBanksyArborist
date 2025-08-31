//import React from 'react'

export default function Safety() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Safety</h1>
          <p className="mt-4 text-neutral.gray">
            We are a company that is always striving to keep our personnel and our customer’s
            properties safe.
          </p>

          <div className="mt-6 space-y-4 text-gray-800 leading-relaxed">
            <p>
              We do this by having <span className="font-semibold">daily meetings</span> to go over the day&apos;s work
              schedule and to correct small issues that affect our efficiency.
            </p>
            <p>
              We also have <span className="font-semibold">formal monthly meetings</span> to address and educate
              ourselves on the most current safety procedures within the industry.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <img
            src="/images/stump_removal.jpg"
            alt="Tree stump removal work"
            className="w-full h-auto rounded-2xl object-cover shadow-soft"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}
