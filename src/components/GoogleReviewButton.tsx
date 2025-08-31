import Button from './Button'

type Props = {
  href?: string
  label?: string
  openInNewTab?: boolean
}

export default function GoogleReviewButton({
  href = 'https://g.page/r/CQtC99--GVLtEBM/review',
  label = 'Leave a Google Review',
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
      variant="outline"   // reuse your outline style, but customize content
      className="flex items-center gap-2"
    >
      {/* Multicolor Google "G" */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" className="h-5 w-5">
        <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.2H272v95h147.2c-6.4 34.7-25.3 64-54 83.6v69h87.2c51.1-47.1 81.1-116.5 81.1-197.4z"/>
        <path fill="#34A853" d="M272 544.3c73.2 0 134.6-24.3 179.5-65.8l-87.2-69c-24.2 16.2-55 25.8-92.3 25.8-70.9 0-130.9-47.9-152.4-112.1h-90v70.7C75.3 482.1 166.6 544.3 272 544.3z"/>
        <path fill="#FBBC05" d="M119.6 323.2c-4.7-13.9-7.4-28.7-7.4-44 0-15.3 2.7-30.1 7.4-44V164.5h-90C10.7 195 0 233.3 0 279.2s10.7 84.2 29.6 114.7l90-70.7z"/>
        <path fill="#EA4335" d="M272 107.6c39.9 0 75.6 13.7 103.7 40.6l77.7-77.7C406.6 24.5 345.2 0 272 0 166.6 0 75.3 62.1 29.6 164.5l90 70.7c21.5-64.2 81.5-112.1 152.4-112.1z"/>
      </svg>
      <span>{label}</span>
    </Button>
  )
}
