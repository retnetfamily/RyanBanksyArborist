// src/components/Button.tsx
type Variant = 'primary' | 'secondary' | 'outline' | 'subtle'
type Common = { variant?: Variant; className?: string }

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Common & { as: 'a'; href: string }

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Common & { as?: 'button' }

type ButtonProps = AnchorProps | NativeButtonProps

export default function Button(props: ButtonProps) {
  const { variant = 'primary', className = '' } = props
  const base = [
    'inline-flex items-center justify-center rounded-2xl font-medium select-none',
    'px-4 py-2 shadow-soft transition-all duration-200',
    'hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1',
    'disabled:opacity-50 disabled:cursor-not-allowed motion-reduce:transition-none motion-reduce:hover:transform-none',
  ].join(' ')

  const styles: Record<Variant, string> = {
    primary: 'bg-brand text-white hover:bg-brand-dark',
    secondary: 'bg-neutral.light text-neutral.dark hover:bg-brand.light/20',
    outline: 'bg-white text-brand border border-brand hover:bg-brand/10',
    subtle: 'bg-white text-neutral.gray border border-gray-200 hover:bg-neutral.light hover:border-gray-300',
  }

  const cls = `${base} ${styles[variant]} ${className}`

  if (props.as === 'a') {
    const { as, href, ...rest } = props as AnchorProps
    return <a href={href} className={cls} {...rest} />
  }
  const { as, ...rest } = props as NativeButtonProps
  return <button className={cls} {...rest} />
}
