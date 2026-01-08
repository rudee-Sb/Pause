import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./gate.css";

export default function Gate({ onComplete }) {
    const [hovered, setHovered] = useState(false);
    const completedRef = useRef(false);
    const prefersReducedMotion = useReducedMotion();

    const handleComplete = () => {
        if (!hovered) return;
        if (completedRef.current) return;

        completedRef.current = true;
        showCursor();
        onComplete?.();
    };

    const hideCursor = () => {
        document.body.classList.add("cursor-hidden");
    };

    const showCursor = () => {
        document.body.classList.remove("cursor-hidden");
    };


    return (
        <div className="gate-wrapper">
            <motion.svg
                viewBox="0 0 100 100"
                className="gate-svg"
                onHoverStart={() => {
                    setHovered(true);
                    hideCursor();
                    }}
                onHoverEnd={() => {
                    setHovered(false);
                    showCursor();
                }}
            >
                {/* Base outline */}
                <rect
                    x="22"
                    y="22"
                    width="56"
                    height="56"
                    fill="none"
                    stroke="var(--muted-lt)"
                    strokeWidth="5"
                />

                {/* Progress stroke */}
                <motion.rect
                    x="22"
                    y="22"
                    width="56"
                    height="56"
                    fill="none"
                    stroke="var(--red)"
                    strokeWidth="5"
                    strokeDasharray="224"
                    strokeDashoffset="224"
                    transform="rotate(-90 50 50)"
                    animate={{
                        strokeDashoffset: hovered ? 0 : 224,
                    }}
                    transition={{
                        duration: prefersReducedMotion ? 0 : 2.4,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={handleComplete}
                />
            </motion.svg>
        </div>
    );
}
