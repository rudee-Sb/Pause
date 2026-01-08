import { useRef } from "react"
import { motion } from "framer-motion";

export default function PauseSentinel({ hovered, onComplete }) {
    const completed = useRef(false);

    return (
        <>
            <motion.svg
                viewBox="0 0 100 100"
                style={{
                    width: "140px",
                    height: "140px",
                    pointerEvents: "none"
                }}
            >
                {/* background spiral */}
                <path
                    d="M10 10 H90 V90 H25 V25 H75 V75 H40 V40 H60 V60 H50"
                    fill="none"
                    stroke="var(--muted-dk)"
                    strokeWidth="3"
                />

                {/* active spiral */}
                <motion.path
                    d="M10 10 H90 V90 H25 V25 H75 V75 H40 V40 H60 V60 H50"
                    fill="none"
                    stroke="var(--green)"
                    strokeWidth="3"
                    strokeDasharray="600"
                    initial={{ strokeDashoffset: 600 }}
                    animate={{ strokeDashoffset: hovered ? 0 : 600 }}
                    transition={{
                        duration: 4,
                        ease: "linear"
                    }}
                    onAnimationComplete={() => {
                        if (!hovered || completed.current) return;
                        completed.current = true;
                        onComplete?.();
                    }}
                />
            </motion.svg>
        </>
    )
}