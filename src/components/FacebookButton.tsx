import React from 'react'
import Button from './Button'

type Props = {
  href?: string
  label?: string
  openInNewTab?: boolean
}

export default function FacebookButton({
  href = 'http://www.facebook.com/pages/Ryan-Bansky-Expert-Tree-Service/216913855757',
  label = 'Visit us on Facebook',
  openInNewTab = true,
}: Props) {
  const target = openInNewTab ? '_blank' : undefined
  const rel = openInNewTab ? 'noopener noreferrer' : undefined

  return (
    <Button
      as="a"
      href={href}
      target={target}
      rel={rel}
      variant="outline"
      className="flex items-center gap-2"
    >
      {/* Official Facebook “f” logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 216 216"
        className="h-5 w-5"
      >
        <path
          fill="#1877F2"
          d="M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.3c0 6.6 5.3 11.9 
          11.9 11.9h103.6V132h-28v-32h28V75.7C115.5 47.7 133.7 32 158.6 32c11.9 
          0 22.1.9 25.1 1.3v29h-17.2c-13.5 0-16.1 6.4-16.1 15.8V100h32.2l-4.2 
          32h-28v84.2h55c6.6 0 11.9-5.3 
          11.9-11.9V11.9c0-6.6-5.3-11.9-11.9-11.9z"
        />
      </svg>
      <span>{label}</span>
    </Button>
  )
}
