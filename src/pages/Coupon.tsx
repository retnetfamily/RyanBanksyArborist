import React from 'react'
import { FaPrint } from 'react-icons/fa'

export default function Coupon() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="max-w-xl mx-auto px-4 sm:px-6 py-16">
      <div
        className="coupon-box rounded-2xl border border-dashed border-gray-400 bg-white p-8 shadow-soft text-center relative"
      >
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-brand">
          Special Offer
        </h1>
        <p className="mt-6 text-xl font-semibold text-neutral.dark">
          $50.00 off for <span className="text-brand">NEW clients</span>
        </p>
        <p className="mt-2 text-neutral.gray">
          Mention you saw this coupon on our website!
        </p>

        {/* This will not appear when printing */}
        <button
          onClick={handlePrint}
          className="print:hidden mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand text-white px-4 py-2 font-medium shadow-soft transition hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          <FaPrint className="h-5 w-5" />
          Print Coupon
        </button>
      </div>
    </main>
  )
}
