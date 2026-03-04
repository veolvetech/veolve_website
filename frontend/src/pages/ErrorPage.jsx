import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import errorGif from "../assets/gifs/error.gif"

export default function ErrorPage({
    code = "404",
    title = "Oops!",
    message = "The page you’re looking for doesn’t exist.",
}) {
    return (
        <>
            <Helmet>
                <title>{code} | VEOLVE</title>
            </Helmet>

            <main className="min-h-screen bg-white flex items-center px-6 md:px-20">

                <div className="container mx-auto grid md:grid-cols-2 gap-6 items-center">

                    {/* LEFT CONTENT */}
                    <div className="max-w-lg">

                        <p className="text-2xl md:text-3xl text-[#6e76f0] font-bold text-sm tracking-widest ml-3 uppercase">
                            {code}
                        </p>

                        <h1 className="text-6xl md:text-7xl font-semibold text-[#0E1130] leading-tight mb-5">
                            Oops!
                        </h1>

                        <p className="text-gray-500 ml-3 text-lg mb-8">
                            The page you’re looking for doesn’t exist.
                        </p>

                        <Link
                            to="/"
                            className="inline-block ml-3 bg-[#0E1130] text-white px-7 py-3 rounded-lg hover:opacity-90 transition"
                        >
                            Return Home
                        </Link>

                    </div>

                    {/* RIGHT GIF */}
                    <div className="flex justify-center md:justify">
                        <img
                            src={errorGif}
                            alt="Error animation"
                            className="w-[350px] md:w-[450px]"
                        />
                    </div>

                </div>
            </main>
        </>
    )
}