

type Contractor = {
  name: string
  owner?: string
  location?: string
  phone?: string
  website?: string
}

type Category = {
  title: string
  subtitle?: string
  contractors: Contractor[]
}

const categories: Category[] = [
  {
    title: 'Landscapers',
    subtitle: 'Pruning, Landscape, Irrigation, & Maintenance',
    contractors: [
      { name: "Mangold Landscaping", owner: "Mike", location: "Marlton, NJ", phone: "(609) 923-1378" },
      { name: "Little Bob’s Landscaping", owner: "Bob Hoover", phone: "(856) 547-6115" },
      { name: "Chipnnapi’s Landscaping", owner: "Anthony", location: "Williamstown, NJ", phone: "(856) 875-0098" },
      { name: "Holiday Services", owner: "Chris", location: "Barrington, NJ", phone: "(609) 743-5709" },
      { name: "Laurel OAK Garden Center", phone: "(609) 953-7943" },
      { name: "Royal Landscape", owner: "Steve", location: "Blackwood, NJ", phone: "(856) 905-1669", website: "RoyalLandscapes.net" },
      { name: "Creative Landworks", owner: "Gary", location: "Pitman, NJ", phone: "(856) 256-8055" },
      { name: "RNL Property Maintenance", owner: "Russell", phone: "(609) 878-0382" },
    ]
  },
  {
    title: 'Fertilization',
    contractors: [
      { name: "Greenside Up", owner: "Russ", location: "Barrington, NJ", phone: "(856) 547-4850" },
    ]
  },
  {
    title: 'Irrigation',
    contractors: [
      { name: "Turf Irrigation of NJ", owner: "Scott McMillian", location: "Barrington", phone: "856-428-0775" },
      { name: "Delaware Valley Irrigation", owner: "Matthew DeNinno", phone: "856-456-8900" },
    ]
  },
  {
    title: 'Plant Material',
    contractors: [
      { name: "Laurel Oak Garden Center", owner: "Dave Scott", location: "Medford, NJ", phone: "(609) 953-7943" },
      { name: "Axtens Nursery", owner: "Dan", location: "Medford, NJ", phone: "(856) 985-1835" },
      { name: "Magnolia Garden Village", owner: "Kevin", location: "Magnolia, NJ" },
    ]
  },
  {
    title: 'Firewood',
    contractors: [
      { name: "Gary Brown", phone: "(856) 256-8055" },
      { name: "Steve Hoxworth", phone: "(609) 226-6010" },
    ]
  },
]

export default function Contractors() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Recommended Contractors</h1>
      <p className="mt-4 text-neutral.gray text-lg">
        We’re proud to recommend these trusted contractors for a wide variety of services.
      </p>

      <div className="mt-10 space-y-10">
        {categories.map((category, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-semibold text-neutral.dark">{category.title}</h2>
            {category.subtitle && (
              <p className="text-sm text-neutral.gray mb-4">{category.subtitle}</p>
            )}
            <ul className="space-y-2">
              {category.contractors.map((c, i) => (
                <li key={i} className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm text-sm">
                  <span className="font-medium">{c.name}</span>
                  {c.owner && <> – Owner: {c.owner}</>}
                  {c.location && <>, {c.location}</>}
                  {c.phone && <>, <a href={`tel:${c.phone}`} className="text-brand hover:underline">{c.phone}</a></>}
                  {c.website && <> – <a href={`http://${c.website}`} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">{c.website}</a></>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
