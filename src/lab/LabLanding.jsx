import { useState } from "react";
import Gate from "../shell/Gate";
import "./lab.css";

export default function LabLanding({ onComplete }) {

    return (
        <>
            <div className="landing-root">
                <Gate onComplete={onComplete}/>
            </div>
        </>
    )
}