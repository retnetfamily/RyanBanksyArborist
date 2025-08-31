import { useMemo, useRef, useState, useEffect, useCallback } from 'react'
import Bullet from '../components/Bullet'

export default function Services() {
  const servicesLeft = [
    'Certified Arborist',
    'Tree Removal',
    'Shrub Removal',
    'Ornamental Pruning',
    'Cabling and Bracing',
    'Plant Health Care',
  ]
  const servicesRight = [
    'Tree Pruning',
    'Shrub Pruning',
    'Stump Removal',
    'Stump Grinding',
    'Consultations',
  ]

  const images = useMemo(
    () => Array.from({ length: 7 }, (_, i) => `/RyanBanksyArborist/images/${i + 1}.jpg`),
    []
  )

  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [lightbox, setLightbox] = useState<null | { src: string }>(null)
  const timerRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const goTo = useCallback(
    (i: number) => {
      setPrevIndex(index)
      setIndex((i + images.length) % images.length)
    },
    [images.length, index]
  )
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Auto-advance (pause on hover)
  useEffect(() => {
    const start = () => (timerRef.current = window.setInterval(next, 6000))
    const stop = () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = null
    }
    start()
    const el = containerRef.current
    el?.addEventListener('mouseenter', stop)
    el?.addEventListener('mouseleave', start)
    return () => {
      stop()
      el?.removeEventListener('mouseenter', stop)
      el?.removeEventListener('mouseleave', start)
    }
  }, [next])

  // // Scroll wheel navigation
  // useEffect(() => {
  //   const el = containerRef.current
  //   if (!el) return
  //   const onWheel = (e: WheelEvent) => {
  //     if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
  //       if (e.deltaY > 0) next()
  //       else prev()
  //       e.preventDefault()
  //     }
  //   }
  //   el.addEventListener('wheel', onWheel, { passive: false })
  //   return () => el.removeEventListener('wheel', onWheel)
  // }, [next, prev])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Direction for slide animation
  const direction = index > prevIndex || (prevIndex === images.length - 1 && index === 0) ? 1 : -1

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h1>

      <p className="mt-4 text-gray-700">
        We are a full service tree care company providing both climbing and bucket service in our
        55&apos; bucket truck.
      </p>

      {/* Services list */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <ul className="space-y-3">
          {servicesLeft.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <ul className="space-y-3">
          {servicesRight.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="mt-12 group relative rounded-2xl overflow-hidden border border-gray-200 shadow-soft"
      >
        {/* Constrain size: responsive 16:9, max height on large screens */}
        <div className="relative aspect-[16/9] max-h-[70vh] bg-gray-100">
          {/* outgoing slide */}
          <img
            key={`prev-${prevIndex}`}
            src={images[prevIndex]}
            alt=""
            className={[
              'absolute inset-0 h-full w-full object-cover',
              'opacity-0 translate-x-0',
              direction === 1 ? '-translate-x-4' : 'translate-x-4',
              'transition-all duration-500 ease-out',
            ].join(' ')}
            draggable={false}
            loading="eager"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          {/* current slide */}
          <button
            onClick={() => setLightbox({ src: images[index] })}
            className={[
              'absolute inset-0 focus:outline-none',
              'transition-all duration-500 ease-out',
              direction === 1 ? 'translate-x-0' : 'translate-x-0',
            ].join(' ')}
            aria-label="Open image full size"
          >
            <img
              key={`curr-${index}`}
              src={images[index]}
              alt={`Tree service gallery image ${index + 1}`}
              className="h-full w-full object-cover opacity-100 transition-opacity duration-500"
              draggable={false}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </button>
        </div>

        {/* Prev/Next buttons */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white px-3 py-2 shadow-md border border-gray-200 text-gray-700 group-hover:opacity-100 opacity-0 transition"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white px-3 py-2 shadow-md border border-gray-200 text-gray-700 group-hover:opacity-100 opacity-0 transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                'h-2.5 w-2.5 rounded-full transition border border-white/70',
                i === index ? 'bg-[#679966]' : 'bg-white/70 hover:bg-white',
              ].join(' ')}
            />
          ))}
        </div>
      </div>


      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <figure
            className="relative max-w-[95vw] max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container with nav + dots */}
            <div className="relative flex items-center justify-center max-h-[80vh] max-w-[95vw]">

              <img
                src={images[index]}
                alt="Full size"
                className="max-h-[80vh] max-w-[95vw] w-auto h-auto object-contain transition-opacity duration-500"
                loading="lazy"
              />

              {/* Prev/Next buttons */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-3 py-2 shadow-md border border-gray-200 text-gray-700"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-3 py-2 shadow-md border border-gray-200 text-gray-700"
                aria-label="Next"
              >
                ›
              </button>

              {/* Dots moved just under the image */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={[
                      'h-2.5 w-2.5 rounded-full transition border border-white/70',
                      i === index ? 'bg-[#679966]' : 'bg-white/70 hover:bg-white',
                    ].join(' ')}
                  />
                ))}
              </div>
            </div>

            {/* Caption below image */}
            <figcaption className="mt-4 text-center text-white/80 text-sm">
              Use ← → keys or buttons to navigate. Click outside or press Esc to close.
            </figcaption>

            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white px-3 py-2 shadow-md border border-gray-200 text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
          </figure>
        </div>
      )}


    </section>
  )
}
