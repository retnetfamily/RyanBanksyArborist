import React from 'react'

export default function WhyRyanBanksy() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Left side image */}
      <div className="relative">
        <img
          src="https://banskytrees.com/images/why_pic.jpg"
          alt="Why choose Ryan Bansky Tree Service"
          className="w-full h-auto rounded-2xl object-cover shadow-soft"
        />
      </div>

      {/* Right side content */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Why Ryan Banksy</h1>
        <p className="mt-4 text-gray-700">
          <span className="font-semibold text-[#679966]">What Sets Us Above The Rest? Team Work!</span> 
          We pride ourselves on being a company that realizes each person is important. It takes
          everyone on our staff to provide you with the service you deserve.
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">1. Consultation & Landscape Review</h2>
            <p className="mt-2 text-gray-700 text-sm">
              This begins with the initial consultation. We not only address the original concerns,
              but also evaluate your entire landscape. Our job is to inform you of every need
              within your landscape and come up with the best course of action.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Expert Team Execution</h2>
            <p className="mt-2 text-gray-700 text-sm">
              Our experienced staff—backed by diverse skills and education—handles every aspect of
              service. You will be amazed as you watch this teamwork in action to safely and
              efficiently address your tree care concerns.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Final Review & Satisfaction</h2>
            <p className="mt-2 text-gray-700 text-sm">
              Finally, we review your property with you to ensure that your work order and needs
              have been fulfilled.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
