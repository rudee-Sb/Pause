import React, { useState } from "react";
import "./box.css";

export default function Box({ id, active, onEnter, onExit, children }) {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <div
                className={`box ${active ? "box--active" : ""}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {children &&
                    React.Children.map(children, child =>
                        React.cloneElement(child, { hovered, onComplete: onExit })
                    )
                }
            </div>
        </>
    )
}