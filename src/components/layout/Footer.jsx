import { Link } from 'react-router-dom'
import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
  MessageCircle
} from 'lucide-react'

export default function Footer() {
  const email = 'info@veolve.com'
  const phone = '+919428823321'

  return (
    <footer className="bg-black text-gray-400">
      <div className="container px-4 py-16">

        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Veolve
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              We design and engineer scalable software systems,
              AI solutions, and digital platforms built for growth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Web Development</li>
              <li>App Development</li>
              <li>AI / Machine Learning</li>
              <li>AI Automation</li>
              <li>Data Analysis</li>
              <li>Data Science</li>
              <li>UI / UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white"
                >
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phone}`}
                  className="hover:text-white"
                >
                  {phone}
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/veolve-tech"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/veolvetech"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://twitter.com/veolvetech"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://github.com/veolve"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://wa.me/919428823321"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} Veolve. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built with engineering discipline.
          </p>
        </div>

      </div>
    </footer>
  )
}
