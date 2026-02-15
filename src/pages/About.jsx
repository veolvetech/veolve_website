import React from 'react'
import About from '../components/home/About'
import { Helmet } from 'react-helmet-async'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Veolve | Full-Stack Digital Solutions Company</title>
        <meta
          name="description"
          content="Learn how Veolve helps businesses build scalable software, AI systems, and automation through disciplined engineering and modern technology."
        />
        <link rel="canonical" href="https://veolve.com/" />
      </Helmet>
      <main>
        <div className='pt-24'>
          <About />
        </div>
      </main>
    </>
  )
}
