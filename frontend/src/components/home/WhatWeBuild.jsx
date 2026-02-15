import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Globe,
    Smartphone,
    BarChart3,
    Sigma,
    Brain,
    Workflow,
    Layout,
    TrendingUp,
    ArrowRight,
    X
} from 'lucide-react'

const domains = [
    {
        title: 'Web Development',
        desc: 'High-performance, scalable web platforms engineered for real-world traffic.',
        icon: Globe
    },
    {
        title: 'Application Development',
        desc: 'Native and cross-platform mobile applications built for stability and growth.',
        icon: Smartphone
    },
    {
        title: 'AI & Machine Learning',
        desc: 'Intelligent systems designed, trained, and deployed for production use.',
        icon: Brain
    },
    {
        title: 'AI Automation',
        desc: 'Workflow automation and AI-driven processes to eliminate operational friction.',
        icon: Workflow
    },
    {
        title: 'Data Analysis',
        desc: 'Dashboards, reporting systems, and analytics pipelines for decision-making.',
        icon: BarChart3
    },
    {
        title: 'Data Science',
        desc: 'Advanced modeling and experimentation to extract value from complex datasets.',
        icon: Sigma
    },
    {
        title: 'UI / UX Design',
        desc: 'Human-centered interface design focused on clarity, usability, and outcomes.',
        icon: Layout
    },
    {
        title: 'Digital Marketing',
        desc: 'Performance-driven digital strategies backed by analytics and optimization.',
        icon: TrendingUp
    }
]

export default function EngineeringDomains() {
    const [active, setActive] = useState(null)

    return (
        <section className="py-16 md:pb-28">
            <div className="container px-4">

                {/* Header */}
                <div className="mb-14 max-w-xl mx-auto text-center">
                    <p className="text-xs tracking-widest uppercase text-[#6e76f0] font-semibold mb-2">
                        Engineering & Growth Domains
                    </p>
                    <span className="block h-[2px] w-64 bg-[#0E1130] mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#0E1130]">
                        Where We Deliver Impact
                    </h2>
                </div>

                {/* ================= DESKTOP (UNCHANGED) ================= */}
                <div className="hidden lg:grid grid-cols-4 gap-6">
                    {domains.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="
                                        bg-[#EEF0FF]
                                        border border-gray-100
                                        rounded-xl
                                        p-6
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:shadow-lg
                                    "
                            >
                                <Icon size={28} className="text-[#6e76f0] mb-4" />
                                <h3 className="text-base font-semibold text-[#0E1130] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* ================= MOBILE (2 × 4 GRID) ================= */}
                <div className="grid grid-cols-2 gap-4 lg:hidden">
                    {domains.map((item) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={item.title}
                                className="
                                    relative
                                    bg-[#EEF0FF]
                                    rounded-xl
                                    border border-gray-100
                                    p-4
                                    text-left
                                    lg:hidden
                                "
                            >
                                {/* Icon */}
                                <Icon size={24} className="text-[#6e76f0] mb-3" />

                                {/* Title */}
                                <h3 className="text-sm font-semibold text-[#0E1130] pr-10 pb-8">
                                    {item.title}
                                </h3>

                                {/* Know more — FIXED POSITION */}
                                <button
                                    onClick={() => setActive(item)}
                                    className="
                                        absolute
                                        bottom-4
                                        right-4
                                        flex
                                        items-center
                                        gap-1
                                        text-xs
                                        font-medium
                                        text-[#6e76f0]
                                    "
                                >
                                    Know more <ArrowRight size={14} />
                                </button>
                            </div>

                        )
                    })}
                </div>
            </div>

            {/* ================= MOBILE MODAL ================= */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25 }}
                            className="bg-white rounded-xl p-6 max-w-sm w-full relative"
                        >
                            <button
                                onClick={() => setActive(null)}
                                className="absolute top-4 right-4 text-gray-500"
                            >
                                <X size={18} />
                            </button>

                            <div className="mb-4">
                                <active.icon size={28} className="text-[#6e76f0]" />
                            </div>

                            <h3 className="text-lg font-semibold text-[#0E1130] mb-2">
                                {active.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {active.desc}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
