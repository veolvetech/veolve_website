import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import About from '../components/home/About'
import HowWeWork from '../components/home/HowWeWork'
import founderImg from '../assets/images/founder.jpg'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Veolve | Engineering Custom AI & Software Systems</title>
        <meta
          name="description"
          content="Veolve is a vision-driven technology company building custom AI systems, scalable software platforms, and strategic digital solutions with engineering discipline."
        />
        <link rel="canonical" href="https://veolve.com/about" />
      </Helmet>

      <main className="bg-white text-[#0E1130]">

        {/* HERO */}
        <section className="pt-40 pb-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="mb-4">
                <p className="text-xs tracking-widest uppercase text-[#6e76f0] font-semibold mb-2">
                  About Veolve
                </p>
                <span className="block h-[2px] w-24 bg-[#0E1130]" />
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                Engineering custom digital systems
                that eliminate complexity and unlock scale.
              </h1>

              <p className="text-lg text-gray-600 max-w-3xl">
                We build bespoke software platforms, AI-driven systems, and
                strategic automation frameworks designed for modern enterprises
                that demand precision, performance, and long-term scalability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-12 bg-gray-50">
          <div className="container grid md:grid-cols-2 gap-20 items-center">

            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Veolve is a hybrid technology company operating at the
                intersection of custom software engineering, artificial
                intelligence, and strategic consulting.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We don’t ship templates. We architect systems from first
                principles — engineered to scale, adapt, and perform under
                real-world demands.
              </p>
            </div>

            <div className="border-l-4 border-[#6e76f0] pl-10">
              <h3 className="text-xl font-semibold mb-6">
                What We Build
              </h3>

              <ul className="space-y-4 text-gray-600">
                <li>• Custom enterprise software systems</li>
                <li>• AI-powered automation frameworks</li>
                <li>• High-performance web and application platforms</li>
                <li>• Strategic technical consulting</li>
              </ul>
            </div>

          </div>
        </section>

        {/* HOW WE WORK */}
        <div className="my-12 bg-[#EEF0FF]">
          <HowWeWork />
        </div>

        {/* FOUNDER SECTION */}
        <section className="py-32 bg-gray-50">
          <div className="container">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Founder Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={founderImg}
                    alt="Founder of Veolve"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Subtle Accent Frame */}
                <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl border-2 border-[#6e76f0]/20" />
              </div>

              {/* Founder Content */}
              <div className="max-w-xl">

                <div className="mb-4">
                  <p className="text-xs tracking-widest uppercase text-[#6e76f0] font-semibold mb-1">
                    Leadership
                  </p>
                  <span className="block h-[2px] w-20 bg-[#0E1130]" />
                </div>

                <h2 className="text-4xl font-semibold text-[#0E1130] mb-6">
                  Founder & Engineering Lead
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Veolve is led by an engineering-first mindset — focused on building
                  systems that are not only functional, but structurally sound and
                  future-ready. With deep experience across software architecture,
                  AI systems, and scalable platform design, the vision is simple:
                  engineer solutions that stand the test of time.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Every project is approached with clarity, discipline, and a
                  commitment to long-term technical excellence.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6">

                  <a
                    href="https://www.linkedin.com/in/aman-rajani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#6e76f0] hover:text-[#0E1130] transition-colors"
                  >
                    LinkedIn →
                  </a>

                  <a
                    href="https://aman-rajani.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#6e76f0] hover:text-[#0E1130] transition-colors"
                  >
                    Website →
                  </a>
                  {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
                  Twitter
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
                  GitHub
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* ENGINEERING PRINCIPLES */}
        < section className="py-12 bg-[#0E1130] text-white" >
          <div className="container">
            <h2 className="text-3xl font-semibold mb-16 text-center">
              Our Engineering Principles
            </h2>

            <div className="grid md:grid-cols-3 gap-16 text-center">

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#6e76f0]">
                  Precision
                </h3>
                <p className="text-white/70">
                  Every system is architected with clarity and deliberate
                  design decisions — no shortcuts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#6e76f0]">
                  Scalability
                </h3>
                <p className="text-white/70">
                  We build with growth in mind — systems that evolve as
                  businesses expand.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#6e76f0]">
                  Performance
                </h3>
                <p className="text-white/70">
                  Optimized for speed, efficiency, and resilience under
                  real-world demands.
                </p>
              </div>

            </div>
          </div>
        </section >

        {/* EXISTING ABOUT SECTION */}
        < div className="py-12" >
          <About />
        </div >

        {/* FINAL CTA */}
        < section className="pt-12 pb-32 text-center" >
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Let’s engineer something exceptional.
            </h2>

            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              If you're looking for custom-built systems designed for scale,
              precision, and long-term performance — we should talk.
            </p>

            <Link to="/contact" className="btn-primary-white">
              Let’s Build
            </Link>
          </div>
        </section >

      </main >
    </>
  )
}