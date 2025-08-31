
import { Link } from 'react-router-dom'
import GoogleReviewButton from '../components/GoogleReviewButton'
import FacebookButton from '../components/FacebookButton'
import PaymentBadges from '../components/PaymentBadges'

export default function Home() {
  // shared motion/feedback classes (match Button.tsx)
  const baseHover =
    'inline-flex items-center justify-center rounded-2xl font-medium select-none ' +
    'px-4 py-2 shadow-soft transition-all duration-200 ' +
    'hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed motion-reduce:transition-none motion-reduce:hover:transform-none'

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral.light to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral.dark">
              Quality you can trust.
            </h1>
            <p className="mt-4 text-neutral.gray text-lg">
              We deliver reliable services with certified expertise and a safety-first mindset.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Primary (matches Button primary) */}
              <Link
                to="/services"
                className={`${baseHover} bg-brand text-white hover:bg-brand-dark`}
              >
                View Services
              </Link>

              {/* Subtle (matches Button subtle) — now with visible hover */}
              <Link
                to="/contact"
                className={`${baseHover} bg-white text-neutral.gray border border-gray-200 hover:bg-neutral.light hover:border-gray-300`}
              >
                Contact Us
              </Link>

              {/* Google-styled button (keeps its own visuals) */}
              <GoogleReviewButton />

              <FacebookButton />

              <PaymentBadges/>

              <Link
                to="/contractors"
                className={`${baseHover} bg-brand text-white hover:bg-brand-dark`}
              >
                Recommended Contractors
              </Link>

              <Link
                to="/coupon"
                className={`${baseHover} bg-brand text-white hover:bg-brand-dark`}
              >
                Get SPECIAL COUPON OFFERS!
              </Link>

              
              <Link
                to="/testimonials"
                className={`${baseHover} bg-brand text-white hover:bg-brand-dark`}
              >
                Testimonials
              </Link>
            </div>
          </div>

          <div>
<div className="grid md:grid-cols-2 gap-6">
  {/* Left side card */}
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
    <div className="text-sm text-orange-500 mb-3 font-bold">
      Relentless Pursuit of Exceptional Arbor Care & Customer Service
    </div>
    <ul className="space-y-2 text-sm text-gray-700">
      <li>• Tree and Stump Removals</li>
      <li>• Pruning and Thinning</li>
      <li>• Cabling</li>
      <li>• Shrubber</li>
      <li>• Trimming and Removals</li>
    </ul>
  </div>

  {/* Right side card */}
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
    <div className="text-sm text-brand mb-3 font-bold">
      Why Choose Us
    </div>
    <ul className="space-y-2 text-sm text-gray-700">
      <li>• Fully insured</li>
      <li>• Return phone calls</li>
      <li>• Free on-time estimates</li>
      <li>• Year-round service</li>
    </ul>
  </div>
</div>

          </div>

<div className="mt-8">
  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-soft">
    <iframe
      title="Facebook Page Plugin"
      src="https://www.facebook.com/plugins/page.php?
        href=https%3A%2F%2Fwww.facebook.com%2FRyanBanskyExpertTreeService
        &tabs=timeline
        &width=340
        &height=500
        &small_header=false
        &adapt_container_width=true
        &hide_cover=false
        &show_facepile=true"
      width="100%"
      height="500"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  </div>
</div>





        </div>
      </section>
    </main>
  )
}
