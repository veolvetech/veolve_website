import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import About from '../components/home/About'
import Technologies from '../components/home/Technologies'
import Blogs from '../components/home/Blogs'
import HowWeWork from '../components/home/HowWeWork'
import CTA from '../components/home/CTA'
import WhatWeBuild from '../components/home/WhatWeBuild'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Custom Software & AI Automation Company | Veolve</title>
        <meta
          name="description"
          content="Veolve is a full-stack digital solutions company building custom software, AI automation, and scalable systems for startups, SMBs, and enterprises."
        />
        <link rel="canonical" href="https://veolve.com/" />
      </Helmet>
      <main>
        <Hero />
        <Stats />
        <WhatWeBuild />
        <About />
        <Technologies />
        <Blogs />
        <HowWeWork />
        <CTA />
      </main>
    </>
  )
}
