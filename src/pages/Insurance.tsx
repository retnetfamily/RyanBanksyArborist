import React from 'react'

export default function Insurance() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Insurance</h1>
          <p className="mt-4 text-neutral.gray">
            Working in trees has the potential to be a dangerous vocation. This is why it is not only
            important to have a trained and certified arborist working for you, but one with the proper
            insurance.
          </p>

          <div className="mt-6 space-y-4 text-gray-800 leading-relaxed">
            <p>
              A properly insured company will provide you with a certificate that indicates 3 items{' '}
              <span className="font-bold uppercase">before the work gets started!</span>
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="font-semibold">General Liability</span>: To insure against damage that may occur to
                your property.
              </li>
              <li>
                <span className="font-semibold">Auto Insurance</span>: To insure against vehicles on and off your
                property.
              </li>
              <li>
                <span className="font-semibold">Workers Compensation</span> (Most Important): It is not only the law
                to carry this for employees, but it&apos;s the biggest safeguard we can provide for you. In the
                unfortunate event that an accident occurs to our personnel you know your liability is covered. Some
                other companies fail to provide this in order to keep the exorbitant cost of insurance down and their
                job price low.
              </li>
            </ol>
            <p>
              If you want to know you are dealing with a reputable company then{' '}
              <span className="font-bold">insist on these items!</span>
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <img
            src="/images/tree_prunning.jpg"
            alt="Tree pruning work"
            className="w-full h-auto rounded-2xl object-cover shadow-soft"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}
