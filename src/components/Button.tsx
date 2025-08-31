// src/components/Button.tsx
import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a'
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle'
  className?: string
}

export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    [
      'inline-flex items-center justify-center rounded-2xl font-medium select-none',
      // spacing
      'px-4 py-2',
      // motion & feedback
      'transition-all duration-200',
      'hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow',
      // focus visible ring
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1',
      // disabled
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
      // respect reduced motion
      'motion-reduce:transition-none motion-reduce:hover:transform-none',
      // base shadow
      'shadow-soft'
    ].join(' ')

  const styles: Record<string, string> = {
    primary: [
      'bg-brand text-white',
      'hover:bg-brand-dark'
    ].join(' '),

    secondary: [
      'bg-neutral.light text-neutral.dark',
      'hover:bg-brand.light/20'
    ].join(' '),

    outline: [
      'bg-white text-brand border border-brand',
      'hover:bg-brand/10'
    ].join(' '),

    subtle: [
      'bg-white text-neutral.gray border border-gray-200',
      'hover:bg-neutral.light hover:border-gray-300'
    ].join(' '),
  }

  const cls = `${base} ${styles[variant]} ${className}`

  if (as === 'a' && href) {
    return <a href={href} className={cls} {...(props as any)} />
  }
  return <button className={cls} {...props} />
}
