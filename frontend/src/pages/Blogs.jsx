import React from 'react'
import { Helmet } from 'react-helmet-async'
import Blogs from '../components/home/Blogs'

export default function BlogsPage() {
  return (
    <>
      <Helmet>
        <title>Software Engineering & AI Insights | Veolve Blog</title>
        <meta
          name="description"
          content="Practical insights on software architecture, AI automation, data systems, and engineering practices for modern businesses."
        />
        <link rel="canonical" href="https://veolve.com/" />
      </Helmet>
      <main>
        <div className='pt-16'>
          <Blogs />
        </div>
      </main>
    </>
  )
}
