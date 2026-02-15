import { motion } from 'framer-motion'
import aboutImg from '../../assets/images/about.jpg'
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  MessageCircle,
} from 'lucide-react'

export default function About() {
  const email = 'info@veolve.com'
  const phone = '+919428823321' // include country code
  const whatsapp = '919428823321'

  return (
    <section className="bg-[#EEF0FF] p-8 sm:p-12 md:p-16">
      <div className="container grid gap-12 md:grid-cols-2 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={aboutImg}
            alt="About"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            About Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">
            We architect high-performance automation and bespoke enterprise
            software with a focus on engineering discipline, scalability,
            and long-term reliability.
          </p>

          {/* CONTACT BUTTONS */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            {/* EMAIL */}
            <a
              href={`mailto:${email}?subject=Project Inquiry`}
              className="btn-primary-white inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Send Message
            </a>

            {/* PHONE */}
            <a
              href={`tel:${phone}`}
              className="btn-secondary-white inline-flex items-center gap-2"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8 flex justify-center md:justify-start items-center gap-6 text-gray-600">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#6e76f0] transition-colors"
            >
              <MessageCircle size={22} />
            </a>

            <a
              href="https://www.linkedin.com/company/veolve-tech"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#6e76f0] transition-colors"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://www.instagram.com/veolvetech"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#6e76f0] transition-colors"
            >
              <Instagram size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
