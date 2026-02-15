import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Building Scalable Backend Architectures for High-Growth Products',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',
      date: 'Jan 28, 2025',
      categories: ['Backend Engineering', 'System Design'],
      excerpt:
        'Modern applications demand backend systems that scale reliably under load. From stateless services to distributed architectures, this guide explores proven backend patterns used in production-grade systems.',
    },
    {
      id: 2,
      title: 'Choosing the Right Tech Stack for Modern Web Applications',
      image:
        'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1600',
      date: 'Jan 12, 2025',
      categories: ['Web Development', 'Architecture'],
      excerpt:
        'Selecting the right technology stack impacts performance, scalability, and long-term maintainability. We break down how to evaluate frameworks, languages, and tools for real-world product development.',
    },
    {
      id: 3,
      title: 'Productionizing Machine Learning Models: From Prototype to Scale',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600',
      date: 'Dec 30, 2024',
      categories: ['Machine Learning', 'MLOps'],
      excerpt:
        'Training a model is only the first step. This article covers deployment pipelines, monitoring, versioning, and scaling strategies required to run machine learning systems reliably in production.',
    },
  ]

  /* ================= MOBILE SLIDER STATE ================= */
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % blogs.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [blogs.length])

  return (
    <section className="bg-[#EEF0FF] py-16 md:py-20 overflow-hidden">
      <div className="container px-4">

        {/* Heading */}
        <div className="max-w-xl text-center md:text-left">
          <div className="inline-block mb-4">
            <p className="text-xs tracking-widest uppercase text-[#6e76f0] font-semibold">
              Insights & Blogs
            </p>
            <span className="block mt-1 h-[2px] bg-[#0E1130]" />
          </div>

          <h2 className="text-2xl md:text-3xl mb-4 font-semibold text-[#0E1130] leading-snug">
            Latest Thinking & Engineering Notes
          </h2>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid gap-10 md:grid-cols-3">
          {blogs.map(blog => (
            <article
              key={blog.id}
              className="group cursor-pointer rounded-xl bg-white border border-gray-100
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[220px] overflow-hidden rounded-t-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                {/* Meta */}
                <div className="mb-4 flex flex-wrap gap-2 text-xs text-gray-500">
                  <span>{blog.date}</span>
                  {blog.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-100 px-3 py-1 text-[#6e76f0] font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-[#0E1130] line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-6 text-sm font-medium text-[#6e76f0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read article →
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-index * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {blogs.map(blog => (
                <div key={blog.id} className="w-full flex-shrink-0 px-4 py-2">
                  <article className="bg-white rounded-xl shadow-md overflow-hidden">

                    {/* IMAGE */}
                    <div className="w-full h-56 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">

                      {/* Meta */}
                      <div className="mb-3 flex flex-wrap gap-2 text-xs">
                        <span className="text-gray-500 font-medium">{blog.date}</span>
                        {blog.categories.map((cat, i) => (
                          <span
                            key={i}
                            className="text-[#6e76f0] font-semibold bg-blue-50 px-2 py-1 rounded text-xs"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-[15px] font-bold text-[#0E1130] mb-2 leading-snug">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {blog.excerpt}
                      </p>

                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex justify-center gap-2">
            {blogs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'bg-[#6e76f0] w-8' : 'bg-gray-300 w-2.5'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
