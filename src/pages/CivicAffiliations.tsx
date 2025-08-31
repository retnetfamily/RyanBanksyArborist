

export default function CivicAffiliations() {
  // Example: replace with real filenames + real URLs
  const affiliations = [
    { src: '/images/Marlton-Business-Association.svg', url: 'https://www.marltonbusiness.com/', name: 'Marlton Business Association' },
    { src: '/images/covenant-house-logo.svg', url: 'https://covenanthousenj.org/', name: 'Covenant House' },
    { src: '/images/FirstChristianAssembly.svg', url: 'https://www.fcaphila.org/', name: 'First Christian Assembly' },
    { src: '/images/Moorestown-Business-Association.svg', url: 'https://moorestownbusiness.com/', name: 'Moorestown Business Association' },
  ]

  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Civic Affiliations
        </h1>
        <p className="mt-4 text-gray-600">
          Associations and community organizations we support.
        </p>

        {/* Logo grid with links */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {affiliations.map((aff, i) => (
            <a
              key={i}
              href={aff.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              aria-label={aff.name}
            >
              <img
                src={aff.src}
                alt={aff.name}
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
