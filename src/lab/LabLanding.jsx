import Squares from "../components/backgrounds/squares/Squares";
import Gate from "../shell/Gate";
import "./lab.css";

export default function LabLanding({ onComplete }) {

    return (
        <>
            <div className="landing-root">
                <div style={{ width: '100%', height: '100%', position: 'fixed', inset: '0', pointerEvents: 'none', overflow: 'hidden', zIndex: '0' }}>
                    <Squares
                        speed={0.1}
                        squareSize={43}
                        direction="down"
                        borderColor="#b1afaf57"
                        hoverFillColor="#ccd0c2"
                    />
                </div>
                <div className="navbar">
                    <div className="logo">
                        <h3>PAUSE</h3>
                    </div>
                    <div className="contact">
                        <p><a href="">[ CONTACT ]</a></p>
                    </div>
                </div>

                <div className="gate-wrapper">
                    <Gate onComplete={onComplete} />
                </div>

                <div className="footer">
                    <span className="text-wrapper">
                        <span className="text">HOVER TO ENTER</span>
                    </span>
                </div>
            </div>
        </>
    )
}