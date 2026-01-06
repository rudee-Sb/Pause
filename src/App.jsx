import { useState, useEffect } from "react";
import LabLanding from "./lab/LabLanding";
import LabLayout from "./shell/LabLayout";
import LabHome from "./lab/LabHome";

function App() {
    const [active, setActive] = useState("landing");
    const [transitioning, setTransitioning] = useState(false);

    const enter = (next) => {
        if (transitioning) return;

        setTransitioning(true);

        setTimeout(() => {
            setActive(next);
            setTransitioning(false);
        }, 800);
    };

    useEffect(() => {
        const cursor = document.getElementById("cursor-dot");
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        const speed = 0.12;

        const move = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            currentX += (mouseX - currentX) * speed;
            currentY += (mouseY - currentY) * speed;

            cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", move);
        animate();

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <>
            <div id="cursor-dot" />

            <LabLayout transitioning={transitioning}>
                {active === "landing" && (
                    <LabLanding onComplete={() => enter("lab-home")} />
                )}

                {active === "lab-home" && (
                    <LabHome onExit={() => enter("landing")} />
                )}
            </LabLayout>
        </>
    );
}

export default App;
