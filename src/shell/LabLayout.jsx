import { useState } from "react";
import "./labLayout.css"

export default function LabLayout({ children, transitioning}) {

    return (
        <>
            <div className="lab-shell">
                {/* transition layer */}

                <main className="lab-room">
                    {children}
                </main>
            </div>
        </>
    )
}