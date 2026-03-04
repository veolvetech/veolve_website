import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

export default function LaunchOfferModal() {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const STORAGE_KEY = "veolve_launch_offer_timestamp"
    const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        const storedTimestamp = localStorage.getItem(STORAGE_KEY)

        if (storedTimestamp) {
            const timePassed = Date.now() - Number(storedTimestamp)

            if (timePassed < THIRTY_DAYS) {
                return
            }
        }

        const timer = setTimeout(() => {
            setOpen(true)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        const form = e.target

        const data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            project: form.project.value.trim(),
        }

        if (!data.name || !data.email || !data.project) {
            toast.error("Please fill all fields")
            setLoading(false)
            return
        }

        try {
            const response = await axios.post(`${API_URL}/contact`, {
                name: data.name,
                email: data.email,
                message: `Launch Offer Inquiry:\nProject: ${data.project}`,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.status === 200) {
                toast.success("Offer claimed successfully!")
                form.reset()
                localStorage.setItem(STORAGE_KEY, Date.now().toString())
                setOpen(false)
            }
        } catch (error) {
            if (error.response?.status === 422) {
                const errors = error.response.data.errors
                const firstError = Object.values(errors)[0][0]
                toast.error(firstError)
            } else {
                toast.error("Something went wrong. Please try again.")
            }
        }

        setLoading(false)
    }

    if (!open) return null

    return (
        <>
            <Toaster position="top-right" />

            <AnimatePresence>
                {open && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                            onClick={() => setOpen(false)}
                        />

                        {/* MODAL */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 flex items-center justify-center z-50 p-4"
                        >
                            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden grid md:grid-cols-2">

                                {/* LEFT PANEL */}
                                <div className="bg-[#0E1130] text-white p-10 flex flex-col justify-center">
                                    <p className="text-xs uppercase tracking-widest text-white/60 mb-4">
                                        Limited Launch Offer
                                    </p>

                                    <h2 className="text-4xl font-semibold mb-4">
                                        20% Development Credit
                                    </h2>

                                    <p className="text-white/80 text-sm leading-relaxed">
                                        We’re offering an exclusive 20% project credit for early
                                        partners building modern web platforms with Veolve.
                                    </p>

                                    <div className="mt-6 text-xs text-white/60">
                                        Valid for custom web development projects only.
                                    </div>
                                </div>

                                {/* RIGHT PANEL */}
                                <div className="p-10 relative">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="absolute top-5 right-5 text-gray-400 hover:text-black"
                                    >
                                        ✕
                                    </button>

                                    <h3 className="text-xl font-semibold mb-6 text-[#0E1130]">
                                        Claim Your Offer
                                    </h3>

                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0E1130]"
                                        />

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0E1130]"
                                        />

                                        <input
                                            type="text"
                                            name="project"
                                            placeholder="Project Type / Website URL"
                                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0E1130]"
                                        />

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-[#0E1130] text-white py-3 rounded-lg hover:bg-[#151A45] transition flex justify-center"
                                        >
                                            {loading ? (
                                                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                "Unlock 20% Credit"
                                            )}
                                        </button>
                                    </form>

                                    <p className="text-xs text-gray-500 mt-4">
                                        We’ll review your project and get back within 24 hours.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}