import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ChatBot() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-8 right-8 z-50">

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="
              w-80
              bg-white
              border border-gray-200
              rounded-2xl
              shadow-2xl
              mb-4
              overflow-hidden
            "
                    >
                        {/* Header */}
                        <div className="bg-[#0E1130] text-white px-5 py-4">
                            <p className="text-sm font-medium">Veolve Assistant</p>
                        </div>

                        {/* Body */}
                        <div className="p-5 text-sm text-gray-700 space-y-4">
                            <div className="bg-gray-100 rounded-xl p-3">
                                👋 Welcome to Veolve.
                            </div>

                            <div className="bg-gray-100 rounded-xl p-3">
                                For support, contact:
                                <div className="mt-2 font-medium text-[#0E1130]">
                                    support@veolve.com
                                    <br />
                                    +91 98428823321
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="
          h-12 w-12
          rounded-full
          bg-[#0E1130]
          text-white
          shadow-lg
          hover:scale-105
          transition-all duration-200
        "
            >
                💬
            </button>
        </div>
    )
}
