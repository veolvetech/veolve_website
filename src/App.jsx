import React, { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [toast, setToast] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const val = email.trim()
    if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      showToast('Please enter a valid email.', 'error')
      return
    }
    try {
      const res = await fetch('https://formspree.io/f/mzzkkwnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: val })
      })
      if (res.ok) {
        showToast("Thanks! We’ll notify you at launch 🚀", 'success')
        setEmail('')
      } else {
        showToast('Oops! Something went wrong. Try again later.', 'error')
      }
    } catch (err) {
      showToast('Network error. Please try again.', 'error')
    }
  }

  function showToast(message, type = 'info') {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div className="page-bg" role="main">
      <main className="card" aria-labelledby="hero-title">
        <header className="card-header" aria-hidden="true">
          <img src="/src/assets/logo.svg" alt="Veolve logo" className="logo" />
        </header>

        <section className="hero" id="hero">
          <div className="emoji" aria-hidden="true">👍</div>
          <p className="kicker">WE'RE STILL</p>
          <h1 id="hero-title">Coding Our Website.</h1>
          <p className="sub">We are going to launch our website very soon. Stay tuned.</p>

          <form id="notify-form" className="notify" onSubmit={handleSubmit} noValidate>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" required value={email} onChange={e => setEmail(e.target.value)} />
            <button className="btn" type="submit" aria-label="Notify me">Notify Me ▶</button>
          </form>

          <div className="socials" aria-label="Social links">
            <a href="https://www.instagram.com/veolvetech" target="_blank" rel="noopener" className="social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.25 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4.25 1.75a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/veolve-tech" target="_blank" rel="noopener" className="social" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h4v12H3v-12ZM9.48 8.98h3.82v1.6h.05a4.19 4.19 0 0 1 3.78-2.07c4.05 0 4.8 2.67 4.8 6.15v6.32h-4v-5.61c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.96v5.71h-4v-12Z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener" className="social" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M17.22 3h3.3l-7.2 8.23L21 21h-6.8l-4.24-5.52L5.1 21H1.8l7.66-8.76L3 3h6.9l3.9 5.12L17.22 3Zm-1.2 16h1.83L8.1 4.89H6.15l9.87 14.11Z" />
              </svg>
            </a>
          </div>

        </section>

        <div className="float f1" aria-hidden="true"></div>
        <div className="float f2" aria-hidden="true"></div>
        <div className="float f3" aria-hidden="true"></div>
        <div className="float f4" aria-hidden="true"></div>
        <div className="float f5" aria-hidden="true"></div>
      </main>

      {toast && (
        <div className={`ve-toast ${toast.type}`}>{toast.message}</div>
      )}
    </div>
  )
}
