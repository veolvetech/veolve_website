import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/images/hero-bg.jpg'

export default function Hero() {
  const phone = '+919428823321'

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Enterprise software background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <motion.div
        className="relative container text-center py-32"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Heading */}
        <h1
          className="
            font-semibold leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Custom AI and Software Systems <br />
          for modern enterprises.
        </h1>

        {/* Description */}
        <p
          className="
            mt-6
            mx-auto
            max-w-3xl
            text-sm
            sm:text-base
            text-gray-300
          "
        >
          We architect high-performance automation and bespoke enterprise
          software with a focus on engineering discipline and scalability.
        </p>

        {/* Buttons — CONNECTED */}
        <div className="mt-10 flex justify-center gap-4">
          
          {/* Let’s Build → Contact page */}
          <Link to="/contact">
            <button className="btn-secondary-black">
              Let’s Build
            </button>
          </Link>

          {/* Book a Call → Phone */}
          <a href={`tel:${phone}`}>
            <button className="btn-primary-black">
              Book a call
            </button>
          </a>

        </div>
      </motion.div>
    </section>
  )
}
