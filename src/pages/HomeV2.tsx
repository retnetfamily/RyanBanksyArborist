import { Link } from 'react-router-dom'
import GoogleReviewButton from '../components/GoogleReviewButton'
import FacebookButton from '../components/FacebookButton'
import PaymentBadges from '../components/PaymentBadges'

// Notes:
// - Keeps your existing color tokens (brand, brand-dark, neutral.*) and utility classes
// - Tightens vertical rhythm, improves responsive behavior, and adds clearer visual hierarchy
// - Normalizes spacing, border, and shadow usage across cards
// - Fixes a couple copy items (e.g., “Shrub trimming”), and uses proper semantic elements
// - Improves focus styles and tap targets for accessibility

export default function HomeV2() {
  const base = [
    'inline-flex items-center justify-center rounded-2xl font-medium select-none',
    'px-4 py-2 shadow-soft transition-all duration-200',
    'hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1',
    'disabled:opacity-50 disabled:cursor-not-allowed motion-reduce:transition-none motion-reduce:hover:transform-none',
  ].join(' ')

  return (
    <main className="relative">
      {/* TOP GRADIENT BACKDROP (subtle depth across the page) */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-neutral.light to-transparent" aria-hidden="true" />

      {/* HERO */}
      <section aria-labelledby="hero-heading" className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 md:pt-16 lg:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Copy */}
            <div>
              <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-neutral.dark">
                Expert Tree Service—Done Safely & On Time.
              </h1>
              <p className="mt-4 text-neutral.gray text-lg leading-relaxed">
                Serving Camden & Burlington Counties with certified climbing and 55′ bucket service.
              </p>

              {/* Trust chips */}
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Trust points">
                {['Fully insured', 'Certified Arborist', "55′ Bucket Truck"].map((chip) => (
                  <li key={chip} className="text-sm rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-700">
                    {chip}
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/RyanBanksyArborist/services" className={`${base} bg-brand text-white hover:bg-brand-dark`}>
                  View Services
                </Link>
                <Link
                  to="/RyanBanksyArborist/contact"
                  className={`${base} bg-white text-neutral.gray border border-gray-200 hover:bg-neutral.light hover:border-gray-300`}
                >
                  Contact Us
                </Link>
                <GoogleReviewButton />
                <FacebookButton />
              </div>

              {/* Payments & third-party trust */}
              <div className="mt-5">
                <PaymentBadges />
                <div className="mt-4">
                  <a
                    href="https://www.checkbook.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-soft hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                  >
                    <img
                      src="/RyanBanksyArborist/images/ConsumerCheckbook.svg"
                      alt="Consumer Checkbook"
                      className="h-6 w-auto"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-sm text-gray-700">Consumer Checkbook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative order-first md:order-none">
              <div className="absolute -inset-4 -z-10 rounded-3xl opacity-60 blur-2xl bg-gradient-to-tr from-white to-transparent" aria-hidden="true" />
              <img
                src="/RyanBanksyArborist/images/why_pic.webp"
                alt="Our crew performing safe, professional tree work"
                className="w-full h-auto rounded-2xl object-cover shadow-soft"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE / SERVICES QUICK-LIST */}
      <section aria-labelledby="value-heading" className="mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
              <h2 id="value-heading" className="text-sm font-bold text-orange-500">
                Relentless Pursuit of Exceptional Arbor Care & Customer Service
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {['Tree & stump removals', 'Pruning & thinning', 'Cabling', 'Shrub trimming', 'Trimming & removals'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden className="select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
              <h2 className="text-sm font-bold text-brand">Why Choose Us</h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {['Fully insured', 'We return phone calls', 'Free, on-time estimates', 'Year-round service'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden className="select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES PROMO STRIP */}
      <section aria-labelledby="services-heading" className="mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 id="services-heading" className="text-2xl font-semibold text-neutral.dark">Professional Tree Care</h2>
                <p className="mt-1 text-neutral.gray">Removal • Pruning • Stump Grinding • Plant Health Care • Cabling</p>
              </div>
              <Link to="/RyanBanksyArborist/services" className={`${base} bg-brand text-white hover:bg-brand-dark`}>
                See Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonials-heading" className="mt-12 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="testimonials-heading" className="sr-only">Customer testimonials</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: '“Your men left my property cleaner and better than when they first started.”', author: 'Marie, Audubon, NJ' },
              { quote: '“Totally honest and professional… you will remain our ‘tree guy.’”', author: 'Len & Toby, Voorhees, NJ' },
              { quote: '“On time, did the work agreed upon, highly impressed.”', author: 'William, Haddon Heights, NJ' },
            ].map((t) => (
              <blockquote key={t.author} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
                <p className="text-gray-800">{t.quote}</p>
                <footer className="mt-3 text-sm font-medium text-[#679966]">— {t.author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/RyanBanksyArborist/testimonials"
              className={`${base} bg-white text-neutral.dark border border-gray-200 hover:bg-neutral.light`}
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
