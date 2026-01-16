import { useState, useEffect } from "react"
import Squares from "../components/backgrounds/squares/Squares";
import "./lab.css";

export default function LabHome({ onExit }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const onScroll = () => {
            const current = window.scrollY;

            if (current <= 8) {
                setVisible(true);
            } else if (current > lastScrollY) {
                setVisible(false);
            }

            lastScrollY = current;
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => { window.removeEventListener("scroll", onScroll) };
    }, [])

    return (
        <>
            <div className="home-root">
                <div style={{ width: '100%', height: '100%', position: 'fixed', inset: '0', pointerEvents: 'none', overflow: 'hidden', zIndex: '0' }}>
                    <Squares
                        speed={0.1}
                        squareSize={43}
                        direction="down"
                        borderColor="#b1afaf57"
                        hoverFillColor="#ccd0c2"
                    />
                </div>
                <div className={`navbar ${visible ? "" : "navbar-hidden"}`}>
                    <div className="logo">
                        <h3>LAB HOME</h3>
                    </div>

                    <div className="contact">
                        <p><a href="">[ CONTACT ]</a></p>
                    </div>
                </div>

                    <div className="home-root-grid">
                        <div className="exp-container" id="pause-exp">
                            <h3>pause</h3>
                        </div>
                        <div className="exp-container" id="silence-exp">
                            <h3>silence</h3>
                        </div>
                        <div className="exp-container" id="single-exp">
                            <h3>single</h3>
                        </div>
                        <div className="exp-container" id="neg-exp">
                            <h3>negative space</h3>
                        </div>
                    </div>

            </div>
        </>
    )
}