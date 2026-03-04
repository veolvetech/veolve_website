// src/components/FadeIn.jsx
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay }}
        >
            {children}
        </motion.div>
    );
}
