import React from 'react'

export default function AboutUs() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Image */}
        <div className="relative">
          <img
            src="/images/prunning.jpg"
            alt="Pruning work in progress by our crew"
            className="w-full h-auto rounded-2xl object-cover shadow-soft"
            loading="lazy"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Us</h1>
          <p className="mt-4 text-neutral.gray">
            Learn about our roots, our values, and how we built a company focused on exceptional tree care and service.
          </p>

          <div className="mt-8 space-y-5 text-gray-800 leading-relaxed">
            <p>
              <span className="font-semibold">1996 —</span> Ray Wunschel founded our company after 20 years in the tree
              industry with a simple goal: to exceed customers’ expectations. After six enjoyable years serving his
              faithful customers, Ray prepared to retire and enjoy the fruits of his labor.
            </p>

            <p>
              Ray and I met through our diverse backgrounds in the green industry. I originally owned{' '}
              <span className="font-semibold">R.B. Landscaping</span>, a company built on integrity, service, and
              quality. Over time, our two companies merged, and we again put our customers first. With Ray’s guidance
              and the support of our experienced staff, we created{' '}
              <span className="font-semibold">Ryan Bansky Expert Tree Service</span>, a company specifically focused on
              tree care.
            </p>

            <p>
              Today, our team continues that vision—expanding our capabilities and raising the bar on safety, quality,
              and responsive service to serve you better.
            </p>
          </div>

          {/* Quick facts / trust chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-sm rounded-full bg-white border border-gray-200 px-3 py-1">Founded 1996</span>
            <span className="text-sm rounded-full bg-white border border-gray-200 px-3 py-1">Certified Arborist</span>
            <span className="text-sm rounded-full bg-white border border-gray-200 px-3 py-1">Fully Insured</span>
            <span className="text-sm rounded-full bg-white border border-gray-200 px-3 py-1">55′ Bucket Service</span>
          </div>

          {/* Callout */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-neutral.gray">
              From careful pruning to complex removals, our mission is the same as day one:
              <span className="font-semibold text-[#679966]"> exceed expectations—safely, professionally, and on time.</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
