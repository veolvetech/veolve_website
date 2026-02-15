import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import toast, { Toaster } from 'react-hot-toast'
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  MessageCircle,
} from 'lucide-react'

export default function Contact() {
  const [loading, setLoading] = useState(false)

  // 🔴 CHANGE THESE
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxj8DhvydOLVYbbX8jvCgZhoOmRRMIjAHXCafzvwm4y0JOYo7ufWKnyoAK9tdwgzRGF/exec'
  const email = 'info@veolve.com'
  const phone = '+919428823321'
  const whatsapp = '919428823321'
  const linkedin = 'https://www.linkedin.com/company/veolve-tech'
  const instagram = 'https://www.instagram.com/veolvetech'

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const form = e.target
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    }

    if (!data.name || !data.email || !data.message) {
      toast.error('Please fill all fields')
      setLoading(false)
      return
    }

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (result.success) {
        toast.success('Message sent successfully!')
        form.reset()
      } else {
        toast.error('Submission failed')
      }
    } catch (err) {
      toast.error('Network error')
    }

    setLoading(false)
  }

  return (
    <>

      <Helmet>
        <title>Contact Veolve | Custom Software & AI Solutions</title>
        <meta
          name="description"
          content="Get in touch with Veolve to discuss custom software development, AI automation, or full-stack digital solutions for your business."
        />
        <link rel="canonical" href="https://veolve.com/" />
      </Helmet>

      <main className="min-h-screen bg-white flex items-center justify-center">
        <Toaster position="top-right" />

        <div className="container max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-16">
          {/* LEFT — CONTACT INFO */}
          <div>
            <h1 className="text-3xl font-semibold mb-4 text-[#0E1130]">
              Contact Us
            </h1>

            <p className="text-gray-600 mb-10">
              Have a project in mind or need technical consultation?
              Reach out — we respond fast.
            </p>

            {/* CONTACT LINKS */}
            <div className="space-y-5 text-gray-700">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-[#6e76f0]"
              >
                <Mail size={18} />
                {email}
              </a>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 hover:text-[#6e76f0]"
              >
                <Phone size={18} />
                {phone}
              </a>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-10 flex gap-6 text-gray-600">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#6e76f0]"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6e76f0]"
              >
                <Linkedin size={22} />
              </a>

              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6e76f0]"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-xl shadow-sm grid gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="border rounded-md px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="border rounded-md px-4 py-3"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              className="border rounded-md px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-black text-white px-6 py-3 rounded-md flex justify-center"
            >
              {loading ? (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
