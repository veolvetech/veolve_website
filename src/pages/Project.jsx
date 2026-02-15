import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Project() {
	return (
		<>
		 <Helmet>
        <title>AI Automation & Software Development Services | Veolve</title>
        <meta
          name="description"
          content="From AI automation to enterprise web and app development, Veolve delivers full-stack digital solutions built for performance and scale."
        />
		<link rel="canonical" href="https://veolve.com/" />
      </Helmet>
		<main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
			<div className="text-center px-6 py-24">
				<h1 className="text-4xl md:text-6xl font-extrabold mb-4">Projects — Coming Soon</h1>
				<p className="text-gray-600 mb-8 max-w-xl mx-auto">
					We're building our projects page. Check back soon — or get in touch to collaborate!
				</p>

				<div className="flex items-center justify-center gap-4">
					<a href="/" className="px-6 py-3 bg-black text-white rounded-md shadow-sm hover:opacity-90">
						Go Home
					</a>
					<a href="/contact" className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white">
						Contact Us
					</a>
				</div>
			</div>
		</main>
		</>
	)
}
