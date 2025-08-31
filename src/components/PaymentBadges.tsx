import React from 'react'
import { SiVisa, SiDiscover } from 'react-icons/si'
import iconMasterCard from '../assets/mastercard-svgrepo-com.svg?react'

export default function PaymentBadges() {
  const badgeBase =
    'flex items-center gap-2 px-3 py-1.5 rounded-md shadow-sm border text-sm font-medium'

  return (
    <div className="mt-8">
      <div className="text-sm text-neutral.gray mb-3">We accept</div>
      <div className="flex flex-wrap gap-3">
        {/* VISA */}
        <div
          className={`${badgeBase} bg-white border-gray-300`}
          aria-label="Visa"
        >
          <SiVisa className="h-6 w-6 text-[#1A1F71]" />
          <span className="text-neutral.dark">Visa</span>
        </div>

        {/* MASTERCARD */}
        <div
          className={`${badgeBase} bg-white border-gray-300`}
          aria-label="Mastercard"
        >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504 300" className="h-7 w-auto">
            <circle cx="184" cy="150" r="120" fill="#EB001B" />
            <circle cx="320" cy="150" r="120" fill="#F79E1B" />
            <path fill="#FF5F00" d="M244 150c0-44.7 21.6-84.3 55-108.5-20.9-15.6-46.7-25-75-25-66.3 0-120 53.7-120 120s53.7 120 120 120c28.3 0 54.1-9.4 75-25-33.4-24.2-55-63.8-55-108.5z"/>
          </svg>

          <span className="text-neutral.dark">Mastercard</span>
        </div>

        {/* DISCOVER */}
        <div
          className={`${badgeBase} bg-white border-gray-300`}
          aria-label="Discover"
        >
          <SiDiscover className="h-6 w-6 text-[#FF6000]" />
          <span className="text-neutral.dark">Discover</span>
        </div>
      </div>
    </div>
  )
}
