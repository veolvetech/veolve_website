import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <motion.section
      className="bg-[#EEF0FF] text-black py-20 md:py-28 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="container px-4">

        {/* Heading — matches Hero */}
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
          Ready to discuss a system built for scale?
        </h2>

        {/* Subtext — matches Hero rhythm */}
        <p className="mt-6 text-gray-800 max-w-3xl mx-auto leading-relaxed">
          From enterprise platforms to cloud engineering and custom digital
          applications, we bring engineering excellence to every project.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link to="/contact">
            <button className="btn-primary-white">
              Let’s Build
            </button>
          </Link>
        </div>

      </div>
    </motion.section>
  )
}
