
export default function Certifications() {
  const certs = [
    {
      title: 'N.J. Licensed Tree Care Operator',
      subtitle: 'License #NJTC768775',
      description: 'State of New Jersey licensed Tree Care Operator, meeting all legal and safety requirements.',
      img: '/images/nj-licensed-tree-care-operator.svg',
      url: 'https://www.njbte.org/licensing/licencing.html', // Official NJ Board licensing details :contentReference[oaicite:10]{index=10}
    },
    {
      title: 'ArborMaster Trained & Certified',
      subtitle: 'Tree Service',
      description:
        'Since 1995, ArborMaster has been the leader in innovative safety, skill, and productivity solutions for tree care and related industries.',
      img: '/images/ArborMaster.svg',
      url: 'https://www.arbormaster.com/', // Official ArborMaster site :contentReference[oaicite:11]{index=11}
    },
    {
      title: 'First-Aid & CPR Certified',
      subtitle: 'Tree Safety',
      description:
        'Safety First. Ryan Bansky Expert Tree Services is certified in First-Aid and CPR to protect both our employees and our clients.',
      img: '/images/cprLogo.svg',
      url: 'https://www.redcross.org/take-a-class/first-aid/first-aid-training/first-aid-certification', // Red Cross example placeholder
    },
    {
      title: 'Certified Arborist',
      subtitle: 'ISA Member',
      description:
        'Ryan Bansky is a certified Arborist, a member of the NJ ISA chapter, and a member of the Penn-Del ISA chapter.',
      img: '/images/ISA-Certified-Arborist.svg',
      url: 'https://www.isa-arbor.com/Credentials/Types-of-Credentials/ISA-Certified-Arborist', // ISA certified arborist info :contentReference[oaicite:12]{index=12}
    },
  ]

  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h1>
        <p className="mt-4 text-neutral.gray">
          Industry certifications and credentials we maintain.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certs.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft hover:shadow-md transition flex gap-4 items-start"
              aria-label={c.title}
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-16 w-16 object-contain flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h2 className="text-xl font-semibold text-[#2f5132]">{c.title}</h2>
                <p className="text-sm text-neutral.gray mt-1">{c.subtitle}</p>
                <p className="mt-3 text-gray-700 leading-relaxed">{c.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
