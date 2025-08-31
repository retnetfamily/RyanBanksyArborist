import React from 'react'
import LeafIcon from '../assets/bullet_leaf.svg?react'  // Vite supports ?react import for SVGs

export default function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <LeafIcon className="mt-1 h-5 w-5 text-[#679966] flex-shrink-0" />
      <span className="text-gray-800">{children}</span>
    </li>
  )
}
