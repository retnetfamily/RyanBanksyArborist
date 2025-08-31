import { Link } from 'react-router-dom'

const items = [
  { to: '/RyanBanksyArborist/', label: 'Home' },
  { to: '/RyanBanksyArborist/services', label: 'Services' },
  { to: '/RyanBanksyArborist/about', label: 'About Us' },
  { to: '/RyanBanksyArborist/why-ryan-banksy', label: 'Why Ryan Banksy' },
  { to: '/RyanBanksyArborist/insurance', label: 'Insurance' },
  { to: '/RyanBanksyArborist/safety', label: 'Safety' },
  { to: '/RyanBanksyArborist/certifications', label: 'Certifications' },
  { to: '/RyanBanksyArborist/civic-affiliations', label: 'Civic Affiliations' },
  { to: '/RyanBanksyArborist/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80" role="contentinfo">
      {/* Top: Brand + Nav + Contact */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 py-10 md:grid-cols-12">
          {/* Brand / blurb */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/RyanBanksyArborist/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white font-bold">RB</div>
              <span className="text-lg font-semibold tracking-tight text-neutral-800">Ryan Banksy</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Expert tree care with a focus on safety, certification, and community.
            </p>

            {/* Call to action */}
            <div className="mt-4">
              <Link
                to="/RyanBanksyArborist/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-brand px-4 py-2 text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-7 lg:col-span-5">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              {items.map((i) => (
                <Link key={i.to} to={i.to} className="text-sm text-gray-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded">
                  {i.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact / Address */}
          <address className="not-italic text-sm text-gray-700 md:col-span-12 lg:col-span-3">
            <div className="font-semibold text-neutral-800">Contact</div>
            <div className="mt-2 leading-relaxed">
              44 W. Maple Ave.<br />
              Lindenwold, NJ 08021
            </div>
            <div className="mt-2">
              <a href="tel:+18564295792" className="hover:text-black">(856) 429-5792</a>
              <div className="text-gray-500">Fax: (856) 435-4762</div>
            </div>
            {/* Optional: email */}
            {/* <div className="mt-2"><a href="mailto:info@example.com" className="hover:text-black">info@example.com</a></div> */}
          </address>
        </div>
      </div>

      {/* Middle: Divider + Utility row (badges / socials optional) */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* (Optional) Payment badges component can be dropped here */}
          {/* <PaymentBadges /> */}

          {/* Socials (placeholder icons using emoji; replace with real icons) */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/RyanBanskyExpertTreeService" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded p-1 text-gray-600 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40">👍</a>
            <a href="https://maps.app.goo.gl/LdGBRs1nFWxwPzzu5" target="_blank" rel="noreferrer" aria-label="Google Maps" className="rounded p-1 text-gray-600 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40">📍</a>
          </div>

          {/* (Optional) Service area blurb */}
          <div className="text-xs text-gray-600">
            Serving Camden & Burlington Counties
          </div>
        </div>
      </div>

      {/* Bottom: Legal strip */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 text-center sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">© 1998-{year} Ryan Banksy. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex justify-center gap-4 text-xs">
            {/* <Link to="/RyanBanksyArborist/privacy" className="text-gray-600 hover:text-black">Privacy</Link>
            <Link to="/RyanBanksyArborist/terms" className="text-gray-600 hover:text-black">Terms</Link> */}
            <a href="#top" className="text-gray-600 hover:text-black">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
