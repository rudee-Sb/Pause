import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STILLNESS_REQUIRED = 1600;

export default function SilenceSentinel({ hovered, onComplete }) {
    const [clarity, setClarity] = useState(0);
    const lastMove = useRef(null);
    const raf = useRef(null);
    const completed = useRef(false);

    useEffect(() => {
        if (!hovered) {
            setClarity(0);
            completed.current = false;
            cancelAnimationFrame(raf.current);
            return;
        }

        lastMove.current = performance.now();

        const onMove = () => {
            lastMove.current = performance.now();
            setClarity(0);
        };

        const tick = () => {
            const now = performance.now();
            const delta = now - lastMove.current;
            const c = Math.min(delta / STILLNESS_REQUIRED, 1);

            setClarity(c);

            if (c >= 1 && !completed.current) {
                completed.current = true;
                onComplete();
                return;
            }

            raf.current = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove);
        raf.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf.current);
        };
    }, [hovered, onComplete]);

    return (
        <motion.svg
            width="140"
            height="20"
            viewBox="0 0 140 20"
            style={{ pointerEvents: "none" }}
        >
            <motion.line
                x1="10"
                y1="10"
                x2="130"
                y2="10"
                stroke="var(--muted-dk)"
                strokeWidth="3"
                initial={{ opacity: 0.9, filter: "blur(2px)", stroke: "var(--muted-dk)" }}
                animate={{
                    opacity: 0.5 + clarity * 0.85,
                    filter: `blur(${(1 - clarity) * 4}px)`,
                    stroke: "var(--sky)"
                }}
                transition={{ duration: 0.2, ease: "linear" }}
            />
        </motion.svg>
    );
}
