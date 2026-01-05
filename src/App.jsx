import { useState } from "react";
import LabLanding from "./lab/LabLanding";
import LabLayout from "./shell/LabLayout";
import LabHome from "./lab/LabHome";

function App() {

    const [active, setActive] = useState("landing");
    const [transitioning, setTransitioning] = useState(false);

    const enter = (next) => {
        setTransitioning(true);

        setTimeout(() => {
            setActive(next);
            setTransitioning(false)
        }, 800);
    }

    return (
        <>
            <LabLayout transitioning={transitioning}>
                {active === "landing" && <LabLanding onComplete={() => enter("lab-home")} />}
                {active === "lab-home" && <LabHome onExit={() => enter("landing")} />}
            </LabLayout>
        </>
    )
}

export default App