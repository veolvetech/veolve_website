import { motion } from 'framer-motion'
import FakeCount from '../common/FakeCount'

import experienceIcon from '../../assets/icons/experience.png'
import teamIcon from '../../assets/icons/team.png'
import projectsIcon from '../../assets/icons/projects.png'
import clientsIcon from '../../assets/icons/clients.png'

const stats = [
  { value: 1, suffix: '+', label: 'Experience', icon: experienceIcon },
  { value: 5, suffix: '+', label: 'Professionals', icon: teamIcon },
  { value: 10, suffix: '+', label: 'Projects', icon: projectsIcon },
  { value: 5, suffix: '+', label: 'Clients', icon: clientsIcon },
]

export default function Stats() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container grid grid-cols-4 gap-4 md:gap-10 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.label}
              className="h-7 w-7 md:h-12 md:w-12 mb-2 md:mb-4"
            />

            {/* Number */}
            <p className="text-lg md:text-3xl font-semibold tabular-nums">
              <FakeCount
                value={item.value}
                suffix={item.suffix}
                duration={2000}
                speed={50}
              />
            </p>

            {/* Label */}
            <p className="text-[10px] md:text-sm text-gray-600 leading-tight">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
