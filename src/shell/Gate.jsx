import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./gate.css";

export default function Gate({ onComplete }) {
    const [hovered, setHovered] = useState(false);
    const completedRef = useRef(false);

    const handleComplete = () => {
        if (!hovered) return;
        if (completedRef.current) return;
        completedRef.current = true;
        onComplete();
    };

    return (
        <div className="gate-wrapper">
            <motion.svg
                width="96"
                height="96"
                viewBox="0 0 100 100"
                className="gate-svg"
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            >
                <rect
                    x="22"
                    y="22"
                    width="56"
                    height="56"
                    fill="transparent"
                    stroke="var(--muted)"
                    strokeWidth="5"
                />

                <motion.rect
                    x="22"
                    y="22"
                    width="56"
                    height="56"
                    fill="transparent"
                    stroke="var(--fg)"
                    strokeWidth="5"
                    strokeDasharray="224"
                    initial={{ strokeDashoffset: 224 }}
                    animate={{ strokeDashoffset : hovered ? 0 : 224 }}
                    transform="rotate(-90, 50, 50)"
                    transition={{ duration: 2.4, ease: "easeInOut" }}
                    onAnimationComplete={handleComplete}
                />
            </motion.svg>
        </div>
    );
}
