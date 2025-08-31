
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  
   { to: '/home-old', label: 'Home Alt' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/why-ryan-banksy', label: 'Why Ryan Banksy?' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/safety', label: 'Safety' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/civic-affiliations', label: 'Civic Affiliations' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-black text-white flex items-center justify-center font-bold">RB</div>
          <div className="font-semibold tracking-tight">Ryan Banksy</div>
        </Link>
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-gray-200"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M3.75 6.75h16.5v1.5H3.75v-1.5ZM3.75 11.25h16.5v1.5H3.75v-1.5ZM3.75 15.75h16.5v1.5H3.75v-1.5Z" />
          </svg>
        </button>
        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm px-2 py-1 rounded-xl ${isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-base px-2 py-2 rounded-xl ${isActive ? 'text-black font-medium' : 'text-gray-700'}`
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
