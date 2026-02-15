import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import powerBIIcon from '../../assets/icons/power-bi-icon.svg'
import openAIIcon from '../../assets/icons/open-ai-icon.svg'
import langChainIcon from '../../assets/icons/lang-chain-icons.svg'
import tableauIcon from '../../assets/icons/tableau-icon.svg'

const CAPABILITIES = [
  {
    title: 'Scalable Web Platforms',
    description:
      'Robust frontends engineered for speed, scalability, and exceptional user experience.',
    tech: [
      { name: 'ReactJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'AngularJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'VueJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ],
  },
  {
    title: 'Resilient Backend Systems',
    description:
      'Backend systems designed for scalability, security, and real-world reliability.',
    tech: [
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ],
  },
  {
    title: 'Native & Cross-Platform Mobile Apps',
    description:
      'Mobile solutions built for performance, stability, and seamless user engagement.',
    tech: [
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    ],
  },
  {
    title: 'Reliable & Scalable Data Layers',
    description:
      'Data architectures optimized for reliability, performance, and long-term growth.',
    tech: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Graphql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    ],
  },
  {
    title: 'Insight-Driven Analytics Platforms',
    description:
      'Actionable insights through interactive dashboards, reports, and business intelligence solutions.',
    tech: [
      { name: 'Power BI', icon: powerBIIcon },
      { name: 'Tableau', icon: tableauIcon },
      { name: 'Looker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Superset', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    ],
  },
  {
    title: 'Intelligent Machine Learning Systems',
    description:
      'Intelligent models and systems built using modern machine learning frameworks and practices.',
    tech: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    ],
  },
  {
    title: 'AI-Powered Automation Systems',
    description:
      'Automated workflows and AI-driven systems that streamline operations and decision-making.',
    tech: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'LangChain', icon: langChainIcon },
      { name: 'OpenAI', icon: openAIIcon },
      { name: 'Airflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg' },
    ],
  },
  {
    title: 'Advanced Data Science Models',
    description:
      'Data-driven research, modeling, and experimentation to extract meaningful insights.',
    tech: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    ],
  },
  {
    title: 'Human-Centered Interface Design',
    description:
      'Designing intuitive, accessible, and visually refined interfaces focused on real user needs.',
    tech: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
      { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
    ],
  }
]

export default function Technologies() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAPABILITIES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [paused])

  const active = CAPABILITIES[index]

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container min-h-[300px] md:min-h-[350px] flex items-center">

        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-12"
          >
            {/* LEFT CONTENT */}
            <div className="text-center md:text-left">
              <div className="inline-block mb-4">
                <p className="text-xs sm:text-sm tracking-widest uppercase text-[#6e76f0] font-extrabold">
                  Our Capabilities
                </p>
                <span className="block mt-1 h-[2px] bg-[#0E1130]" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#0E1130]">
                {active.title}
              </h2>

              <p className="text-gray-600 max-w-md mx-auto md:mx-0">
                {active.description}
              </p>
            </div>

            {/* RIGHT ICONS — ONE LINE ON MOBILE */}
            <div
              className="
                flex gap-6 justify-center
                overflow-x-auto
                md:overflow-visible
                md:gap-14
              "
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {active.tech.map((item) => (
                <div
                  key={item.name}
                  className="group text-center shrink-0 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-10 w-10 md:h-16 md:w-16 mx-auto"
                  />

                  <p className="mt-3 text-xs md:text-sm font-medium text-gray-700">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
