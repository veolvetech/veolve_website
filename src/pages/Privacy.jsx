import { Helmet } from "react-helmet-async";
import logoDark from '../assets/images/logo-dark.svg'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {

  let logoSrc = logoDark

  return (
    <>
      <Helmet>
        <title>Privacy Policy | VEOLVE</title>
        <meta
          name="description"
          content="Privacy Policy of VEOLVE outlining how we collect, use, store, and protect personal information."
        />
        <link rel="canonical" href="https://veolve.com/privacy-policy" />
      </Helmet>

      <main className="bg-white pt-48 pb-16">
        <div className="container max-w-2xl mx-auto">

          {/* Header */}
          <header className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-[#0E1130] mb-2">
              Legal
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold text-[#0E1130] mb-3">
              Privacy Policy
            </h1>

            <p className="text-sm text-gray-500">
              Last updated: 14 February 2026
            </p>
          </header>

          {/* Content */}
          <div className="text-[15px] leading-7 text-gray-700 space-y-6">

            <p>
              VEOLVE operates <a className="text-[#6e76f0]" href="https://veolve.com">https://veolve.com</a>.
              This Privacy Policy describes how we collect, use, and protect
              information when you interact with our website and services.
            </p>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              1. Information We Collect
            </h2>

            <p className="mb-3">
              We may collect personal and non-personal information including:
            </p>

            <ul className="list-disc pl-5 space-y-1.5">
              <li>Full name and contact details</li>
              <li>Company name and business information</li>
              <li>Email address and phone number</li>
              <li>Messages submitted through forms</li>
              <li>Payment details (processed via secure providers)</li>
              <li>IP address, browser type, and device information</li>
              <li>Website interaction and analytics data</li>
            </ul>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              2. How We Use Information
            </h2>

            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries and communication requests</li>
              <li>Process transactions</li>
              <li>Enhance website functionality and performance</li>
              <li>Conduct marketing and analytics activities</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              3. Cookies & Tracking
            </h2>

            <p>
              We use cookies and similar technologies such as Google Analytics,
              Meta Pixel, and other tools to analyze traffic and improve user experience.
              You may control cookies through your browser settings.
            </p>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              4. Data Sharing
            </h2>

            <p>
              We may share information with trusted third-party service providers
              for hosting, analytics, payment processing, and communication purposes.
              These providers are required to protect your information.
            </p>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              5. Data Security
            </h2>

            <p>
              We implement commercially reasonable safeguards to protect personal
              information. However, no method of transmission over the internet
              is completely secure.
            </p>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              6. Data Retention
            </h2>

            <p>
              We retain information only as long as necessary for business,
              contractual, and legal requirements.
            </p>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              7. Your Rights
            </h2>

            <p>
              Depending on your jurisdiction, you may have rights to access,
              correct, or request deletion of your personal data.
            </p>

            <p>
              Contact: <a className="mt-2 font-medium text-[#0E1130]" href="mailto:info@veolve.com">info@veolve.com</a>
            </p>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              8. Changes to This Policy
            </h2>

            <p>
              We may update this Privacy Policy periodically.
              Changes will be reflected with an updated revision date.
            </p>

            <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
              Contact Information
            </h2>

            <p>
              <Link to="/" className="focus:outline-none focus-visible:outline-none flex items-center z-50" onClick={() => setMenuOpen(false)}> <img src={logoSrc} alt="VE Logo" className="h-4 w-auto mr-2 mb-2" /> 
              {/* <p className="font-bold text-xl">VEOLVE <br /></p> */}
              </Link>
              
              <a href={`tel:${+919428823321}`} className="font-medium text-[#0E1130] hover:text-[#6e76f0]"> +91 94288 23321 <br /></a>
             
              {/* VEOLVE <br /> */}
              <a className="mt-2 font-medium text-[#0E1130]" href="mailto:info@veolve.com">info@veolve.com <br /></a>
              Ahmedabad, Gujarat, India <br />
            </p>

          </div>
        </div>
      </main>
    </>
  );
}
