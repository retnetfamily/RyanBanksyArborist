import React from 'react'

const testimonials = [
  {
    text: `Your men left my property cleaner and better than when they first started. It was truly appreciated.
Everyone should be congratulated for the excellent job they did.`,
    author: 'Marie, Audubon, NJ',
  },
  {
    text: `We appreciate the care and commitment that you and your excellent staff have afforded us over the years we've been
using your service. You are and will remain our "tree guy" because we find you to be totally honest and professional.`,
    author: 'Len & Toby, Voorhees, NJ',
  },
  {
    text: `We are very happy with the very professional manner in which the job was handled. We appreciate the quick and courteous
service.`,
    author: 'Michel and Michael, Stratford, NJ',
  },
  {
    text: `We greatly appreciate your promptness and good, hard work.`,
    author: 'Maryann & Ira, Cherry Hill, NJ',
  },
  {
    text: `The work done was excellent and extremely professional. The crew showed up on time as promised, did the work agreed
upon and I was highly impressed. In all my dealings over the years, I have seen all types. Mr. Bansky and his crew were
the best I've experienced. I feel I can recommend Mr. Bansky without reservation.`,
    author: 'William, Haddon Heights, NJ',
  },
  {
    text: `We were so pleased with the work your crew did on our trees and the neat way the yard was left. We will call you for
any future work.`,
    author: 'Bess, Collingswood, NJ',
  },
  {
    text: `Thank you for your prompt help with our tree in spite of the rough weather. We will use you again.`,
    author: 'Leslie, Haddon Township, NJ',
  },
  {
    text: `Just a note to say thanks for doing such a wonderful job with our overgrown yard.`,
    author: 'Scott & Amy, Haddonfield, NJ',
  },
  {
    text: `I wanted to reiterate the fine service your company has provided. Your team work was a symphony in motion.`,
    author: 'Janet, Runnemede, NJ',
  },
  {
    text: `You guys did a great job. We really appreciate you getting back to us when you said you would.`,
    author: 'Donna, Pennsauken, NJ',
  },
  {
    text: `Thanks for providing excellent service. We will recommend you to our neighbors.`,
    author: 'Dave & Stephanie, Oaklyn, NJ',
  },
  {
    text: `Great job! God Bless you very much.`,
    author: 'Karen, Bellmawr, NJ',
  },
  {
    text: `Your job is always done with expertise.`,
    author: 'Annabell, Voorhees, NJ',
  },
  {
    text: `I can't thank you enough for the work you did and how much it helped prepare for my wife's party.`,
    author: 'Dick, Lindenwold, NJ',
  },
  {
    text: `Thank you for pruning our tree and assessing the tree's health. We look forward to working with you in the future.`,
    author: "The Duffy's, Barrington, NJ",
  },
    {
    text: `Beautiful and stress free tree removal for a reasonable price. Everything was taken care of`,
    author: "The Rettig's, Audubon NJ",
  },
]

export default function Testimonials() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Testimonials</h1>
      <p className="mt-4 text-gray-600">
        Hear what our valued customers have to say about our service.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft"
          >
            <p className="text-gray-800 leading-relaxed">“{t.text}”</p>
            <footer className="mt-4 text-sm font-medium text-[#679966]">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </main>
  )
}
