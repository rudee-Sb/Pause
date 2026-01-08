import { useState, useEffect, useRef } from "react"
import Box from "../components/Box"
import "./lab.css"
import PauseSentinel from "../components/sentinels/PauseSentinel";
import SilenceSentinel from "../components/sentinels/SilenceSentinel";

export default function LabHome({ onExit }) {

    const [activeBox, setActiveBox] = useState(null);

    const enterBox = (id) => {
        setActiveBox(id);
    }

    const exitBox = () => {
        setActiveBox(null);
    }

    return (
        <>
            <div className="home-root">
                <div className="experiments-wrapper">
                    {/* pause experiment box */}
                    <div className="container">
                        <Box
                            id="pause"
                            active={activeBox === "pause"}
                            onEnter={() => enterBox("pause")}
                            onExit={exitBox}
                        >
                            <PauseSentinel />

                        </Box>
                    </div>


                    {/* silence experiment box */}
                    <div className="container">
                        <Box
                            id="silence"
                            active={activeBox === "silence"}
                            onEnter={() => enterBox("silence")}
                            onExit={exitBox}
                        >
                            <SilenceSentinel />
                        </Box>
                    </div>

                    {/* single screen experiment box */}
                    <div className="container">
                        <Box
                            id="single-screen"
                            active={activeBox === "single-screen"}
                            onEnter={() => enterBox("single-screen")}
                            onExit={exitBox}
                        ></Box>
                    </div>

                    {/* negative space experiment box */}
                    <div className="container">
                        <Box
                            id="negative-space"
                            active={activeBox === "negative-space"}
                            onEnter={() => enterBox("negative-space")}
                            onExit={exitBox}
                        ></Box>
                    </div>
                </div>
            </div>
        </>
    )
}