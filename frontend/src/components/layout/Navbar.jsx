import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logoDark from '../../assets/images/logo-dark.svg'
import logoLight from '../../assets/images/logo-light.svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ===== Background logic (DESKTOP ONLY) =====
  let navbarBg = 'bg-white'
  let textColor = 'text-black'
  let logoSrc = logoDark

  if (hovered) {
    navbarBg = 'bg-black'
    textColor = 'text-white'
    logoSrc = logoLight
  } else if (scrolled) {
    navbarBg = 'bg-white/0 backdrop-blur-md'
    textColor = 'text-black'
    logoSrc = logoDark
  }

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`container flex items-center justify-between h-20 ${textColor}`}>

          {/* Logo */}
          <Link
            to="/"
            className="focus:outline-none focus-visible:outline-none flex items-center z-50"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logoSrc} alt="VE Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-[#6e76f0]">Home</Link>
            <Link to="/projects" className="hover:text-[#6e76f0]">Projects</Link>
            <Link to="/blogs" className="hover:text-[#6e76f0]">Blogs</Link>
            <Link to="/about" className="hover:text-[#6e76f0]">About Us</Link>
            <Link to="/contact" className="hover:text-[#6e76f0]">Contact Us</Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className={`hidden md:inline-flex btn-secondary-white ${hovered ? 'btn-primary-black' : ''
              }`}
          >
            Let’s Build
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {!menuOpen ? (
              <div className="flex flex-col items-end gap-[5px]">
                <span className="h-[2px] w-6 bg-current" />
                <span className="h-[2px] w-4 bg-current" />
                <span className="h-[2px] w-6 bg-current" />
              </div>
            ) : (
              <span className="ml-auto text-xl font-mono font-bold">{'><'}</span>
            )}
          </button>
        </div>
      </header>

      {/* BACKDROP BLUR */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU — FULL HEIGHT */}
      <div
        className={`fixed top-0 left-0 h-screen w-full z-50 bg-black text-white
                    transition-opacity duration-300 md:hidden
                    ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  `}
      >
        <div className="flex flex-col h-full">

          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 h-20">
            <img
              src={logoLight}
              alt="VE Logo"
              className="h-8"
            />

            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl font-mono font-bold"
              aria-label="Close Menu"
            >
              {'><'}
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col flex-1 mt-12 items-center gap-8 text-base font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/privacy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-white text-black px-6 py-3 rounded-md"
            >
              Let’s Build
            </Link>
          </div>

          {/* Footer */}
          <div className="pb-8 flex flex-col items-center gap-3 text-xs text-gray-400">
            <a href="mailto:info@veolve.com">info@veolve.com</a>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/veolve-tech">LinkedIn</a>
              <a href="https://www.instagram.com/veolvetech">Instagram</a>
              {/* <a href="#">Twitter</a> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
