import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
  const [msg, setMsg] = useState('')
  const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setMsg('')

    const form = new FormData(e.currentTarget)

    // Honeypot (hidden field). If a bot fills it, pretend success.
    if (form.get('company')) {
      setStatus('ok')
      setMsg('Thanks! We received your message.')
      e.currentTarget.reset()
      return
    }

    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      message: String(form.get('message') || ''),
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('ok')
        setMsg('Thanks! We received your message and will get back to you shortly.')
        e.currentTarget.reset()
      } else {
        const body = await res.json().catch(() => ({}))
        setStatus('err')
        setMsg(body?.errors?.[0]?.message || 'Sorry—could not send your message.')
      }
    } catch {
      setStatus('err')
      setMsg('Network error. Please try again, or call us.')
    }
  }

  // Shared button motion/feedback classes (matches your Button.tsx behavior)
  const btnBase =
    'inline-flex items-center justify-center rounded-2xl font-medium select-none ' +
    'px-4 py-2 shadow-soft transition-all duration-200 ' +
    'hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed motion-reduce:transition-none motion-reduce:hover:transform-none'

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-2 text-neutral.gray">
        Tell us about your tree care needs and we’ll get back to you promptly.
      </p>

      {/* Two-column layout: form (left), map + areas (right) */}
      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        {/* LEFT — Contact form */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Honeypot (hidden) */}
            <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label className="block text-sm font-medium text-neutral.dark">Name</label>
              <input
                required
                name="name"
                className="mt-1 w-full rounded-xl border border-gray-300 p-2"
                placeholder="Your name"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral.dark">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-xl border border-gray-300 p-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral.dark">Phone</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-xl border border-gray-300 p-2"
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral.dark">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-1 w-full rounded-xl border border-gray-300 p-2"
                placeholder="How can we help?"
              />
            </div>

            <button
              disabled={status === 'sending'}
              className={`${btnBase} bg-brand text-white hover:bg-brand-dark`}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {msg && (
              <p className={`text-sm ${status === 'ok' ? 'text-green-600' : 'text-red-600'}`}>{msg}</p>
            )}

            {/* Optional fallback if JS fails */}
            <p className="text-xs text-neutral.gray">
              Prefer email?{' '}
              <a href="mailto:info@yourdomain.com" className="text-brand hover:underline">
                info@yourdomain.com
              </a>
            </p>
          </form>
        </section>

        {/* RIGHT — Map + service areas */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-soft">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              {/* Google Maps embed:
                 We use a generic place search. If you have a precise address or a Maps Embed API URL, replace q= with that.
              */}
              <iframe
                title="Our Location"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={
                  'https://www.google.com/maps?q=' +
                  encodeURIComponent('Ryan Bansky Expert Tree Service') +
                  '&z=12&output=embed'
                }
                style={{ border: 0 }}
              />
            </div>
            <div className="mt-3 text-sm text-neutral.gray">
              View our location and surrounding service areas.
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <h2 className="text-base font-semibold text-neutral.dark">Service Areas & Services</h2>
            <p className="mt-1 text-sm text-neutral.gray">
              We proudly serve nearby communities with professional tree care.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <ul className="space-y-1">
                <li>• Camden County</li>
                <li>• Burlington County</li>
                <li>• Cherry Hill</li>
                <li>• Haddonfield</li>
                <li>• Voorhees</li>
              </ul>
              <ul className="space-y-1">
                <li>• Tree Removal &amp; Pruning</li>
                <li>• Stump Grinding</li>
                <li>• Cabling &amp; Bracing</li>
                <li>• Plant Health Care</li>
                <li>• 55′ Bucket Service</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
