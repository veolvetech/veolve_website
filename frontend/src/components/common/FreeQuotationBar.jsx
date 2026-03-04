import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function FreeQuotationBar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-24 right-6 z-40"
        >
            <Link
                to="/contact"
                className="
          group relative
          bg-[#0E1130]
          text-white
          px-6 py-3
          rounded-full
          text-sm font-medium
          flex items-center gap-3
          shadow-lg shadow-[#0E1130]/40
          transition-all duration-300
          hover:bg-[#151A45]
          hover:shadow-xl hover:shadow-[#0E1130]/60
          hover:scale-105
        "
            >
                <span>Get Free Consultation</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </Link>
        </motion.div>
    )
}
