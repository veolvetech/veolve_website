import { Helmet } from "react-helmet-async";
import logoDark from '../assets/images/logo-dark.svg'
import { Link } from 'react-router-dom'

export default function TermsOfService() {

    let logoSrc = logoDark

    return (
        <>
            <Helmet>
                <title>Terms of Service | VEOLVE</title>
                <meta
                    name="description"
                    content="Terms of Service of VEOLVE outlining the rules, conditions, and legal agreements governing the use of our website and services."
                />
                <link rel="canonical" href="https://veolve.com/terms-of-service" />
            </Helmet>

            <main className="bg-white pt-48 pb-16">
                <div className="container max-w-2xl mx-auto">

                    {/* Header */}
                    <div className="mb-12">
                        <div className="mb-6">
                            <p className="text-xs tracking-widest uppercase text-[#6e76f0] font-semibold mb-2">
                                Legal
                            </p>
                            <span className="block h-[2px] w-10 bg-[#0E1130]" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-semibold text-[#0E1130] leading-tight mb-4">
                            Terms of Service
                        </h1>

                        <p className="text-sm text-gray-500">
                            Last updated: 14 February 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="text-[15px] leading-7 text-gray-700 space-y-6">

                        <p>
                            Welcome to VEOLVE. By accessing or using our website
                            https://veolve.com and our services, you agree to be bound
                            by these Terms of Service. If you do not agree, please do not
                            use our website or services.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            1. Services
                        </h2>

                        <p>
                            VEOLVE provides digital services including but not limited to
                            web development, marketing, branding, design, and consulting.
                            We reserve the right to modify or discontinue services at any
                            time without prior notice.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            2. User Responsibilities
                        </h2>

                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>Provide accurate and complete information</li>
                            <li>Use our services only for lawful purposes</li>
                            <li>Not misuse, disrupt, or interfere with our website or systems</li>
                            <li>Respect intellectual property rights</li>
                        </ul>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            3. Intellectual Property
                        </h2>

                        <p>
                            All content, designs, graphics, branding, code, and materials
                            on this website are the property of VEOLVE unless otherwise stated.
                            Unauthorized reproduction, distribution, or use is prohibited.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            4. Payments & Refunds
                        </h2>

                        <p>
                            Payment terms will be outlined in individual project agreements.
                            Fees once paid are generally non-refundable unless otherwise
                            specified in writing.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            5. Limitation of Liability
                        </h2>

                        <p>
                            VEOLVE shall not be liable for any indirect, incidental,
                            or consequential damages arising from the use of our
                            website or services.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            6. Third-Party Services
                        </h2>

                        <p>
                            Our services may involve third-party tools or platforms.
                            We are not responsible for the policies or practices of
                            those third parties.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            7. Termination
                        </h2>

                        <p>
                            We reserve the right to suspend or terminate access to
                            our services if these Terms are violated.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            8. Governing Law
                        </h2>

                        <p>
                            These Terms shall be governed by and interpreted in accordance
                            with the laws of India. Any disputes shall be subject to the
                            jurisdiction of courts located in Gujarat, India.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            9. Changes to These Terms
                        </h2>

                        <p>
                            We may update these Terms from time to time. Continued use
                            of our website and services constitutes acceptance of
                            the revised Terms.
                        </p>

                        <h2 className="text-lg font-semibold text-[#0E1130] mb-2">
                            Contact Information
                        </h2>

                        <p>
                            <Link to="/" className="focus:outline-none focus-visible:outline-none flex items-center z-50">
                                <img src={logoSrc} alt="VE Logo" className="h-4 w-auto mr-2 mb-2" />
                            </Link>

                            <a href={`tel:${+919428823321}`} className="font-medium text-[#0E1130] hover:text-[#6e76f0]">
                                +91 94288 23321 <br />
                            </a>

                            <a className="mt-2 font-medium text-[#0E1130]" href="mailto:info@veolve.com">
                                info@veolve.com <br />
                            </a>
                            Ahmedabad, Gujarat, India <br />
                        </p>

                    </div>
                </div>
            </main>
        </>
    );
}