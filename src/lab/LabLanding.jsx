import { useState } from "react";
import Gate from "../shell/Gate";
import "./lab.css";

export default function LabLanding({ onComplete }) {

    return (
        <>
            <div className="landing-root">
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