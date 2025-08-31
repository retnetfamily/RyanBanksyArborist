
import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/why-ryan-banksy', label: 'Why Ryan Banksy' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/safety', label: 'Safety' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/civic-affiliations', label: 'Civic Affiliations' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-black text-white flex items-center justify-center font-bold">RB</div>
            <div className="font-semibold tracking-tight">Ryan Banksy</div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Professional services with a focus on safety, certification, and community.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {items.map((i) => (
              <Link key={i.to} to={i.to} className="text-sm text-gray-600 hover:text-black">
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-center py-4">© {new Date().getFullYear()} Ryan Banksy. All rights reserved.</div>
    </footer>
  )
}
