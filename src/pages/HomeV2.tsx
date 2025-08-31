
import { Link } from 'react-router-dom'
import GoogleReviewButton from '../components/GoogleReviewButton'
import FacebookButton from '../components/FacebookButton'
import PaymentBadges from '../components/PaymentBadges'

export default function HomeV2() {
  const base = [
    'inline-flex items-center justify-center rounded-2xl font-medium select-none',
    'px-4 py-2 shadow-soft transition-all duration-200',
    'hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1',
    'disabled:opacity-50 disabled:cursor-not-allowed motion-reduce:transition-none motion-reduce:hover:transform-none',
  ].join(' ')

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral.light to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral.dark">
              Expert Tree Service—Done Safely & On Time.
            </h1>
            <p className="mt-4 text-neutral.gray text-lg">
              Serving Camden &amp; Burlington Counties with certified climbing and 55′ bucket service.
            </p>

            {/* Trust chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="text-sm rounded-full bg-white border border-gray-200 px-3 py-1">Fully insured</span>
              <span className="text-sm rounded-full bg-white border border-gray-200 px-3 py-1">Certified Arborist</span>
              <span className="text-sm rounded-full bg-white border border-gray-200 px-3 py-1">55′ Bucket Truck</span>
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/RyanBanksyArborist/services" className={`${base} bg-brand text-white hover:bg-brand-dark`}>View Services</Link>
              <Link to="/RyanBanksyArborist/contact" className={`${base} bg-white text-neutral.gray border border-gray-200 hover:bg-neutral.light hover:border-gray-300`}>Contact Us</Link>
              <GoogleReviewButton />
              <FacebookButton />
            </div>

            {/* Payments */}
            <PaymentBadges />

            {/* Consumer Checkbook logo link */}
              <a
                href="https://www.checkbook.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <img
                  src="/RyanBanksyArborist/images/ConsumerCheckbook.svg"
                  alt="Consumer Checkbook"
                  className="h-10 w-auto"
                />
              </a>

          </div>

          {/* Hero image */}
          <div className="relative">
            <img
              src="/RyanBanksyArborist/images/why_pic.jpg"
              alt="Our crew performing safe, professional tree work"
              className="w-full h-auto rounded-2xl object-cover shadow-soft"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <div className="text-sm text-orange-500 mb-3 font-bold">
              Relentless Pursuit of Exceptional Arbor Care &amp; Customer Service
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Tree and Stump Removals</li>
              <li>• Pruning and Thinning</li>
              <li>• Cabling</li>
              <li>• Shrubber</li>
              <li>• Trimming and Removals</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <div className="text-sm text-brand mb-3 font-bold">Why Choose Us</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Fully insured</li>
              <li>• Return phone calls</li>
              <li>• Free on-time estimates</li>
              <li>• Year-round service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-neutral.dark">Professional Tree Care</h2>
              <p className="text-neutral.gray mt-1">Removal • Pruning • Stump Grinding • Plant Health Care • Cabling</p>
            </div>
            <Link to="/RyanBanksyArborist/services" className={`${base} bg-brand text-white hover:bg-brand-dark`}>
              See Services
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <blockquote className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <p className="text-gray-800">“Your men left my property cleaner and better than when they first started.”</p>
            <footer className="mt-3 text-sm font-medium text-[#679966]">— Marie, Audubon, NJ</footer>
          </blockquote>
          <blockquote className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <p className="text-gray-800">“Totally honest and professional… you will remain our ‘tree guy.’”</p>
            <footer className="mt-3 text-sm font-medium text-[#679966]">— Len &amp; Toby, Voorhees, NJ</footer>
          </blockquote>
          <blockquote className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <p className="text-gray-800">“On time, did the work agreed upon, highly impressed.”</p>
            <footer className="mt-3 text-sm font-medium text-[#679966]">— William, Haddon Heights, NJ</footer>
          </blockquote>
        </div>
        <div className="mt-6">
          <Link to="/RyanBanksyArborist/testimonials" className={`${base} bg-white text-neutral.dark border border-gray-200 hover:bg-neutral.light`}>
            Read More Testimonials
          </Link>
        </div>
      </section>
    </main>
  )
}
