import { motion } from 'framer-motion'

const steps = [
  { id: '01', title: 'Discovery', desc: 'Comprehensive technical audit to identify architectural bottlenecks.' },
  { id: '02', title: 'Architecture', desc: 'Designing the system blueprint using industry-standard tech stacks.' },
  { id: '03', title: 'Execution', desc: 'Development of scalable modules with continuous integration.' },
  { id: '04', title: 'Optimization', desc: 'Monitoring performance metrics and scaling infrastructure as needed.' }
]

export default function HowWeWork() {
  return (
    <section className="hidden md:block py-24">
      <div className="container">
        <h2 className="text-3xl font-semibold text-center mb-16">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-5xl text-gray-200">{s.id}</p>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
