export default function LabHome({ onExit }) {
    return (
        <div className="home-root">
            <h3>Lab home</h3>
            <button className="exit" onClick={onExit}>
                Leave Lab
            </button>
        </div>
    );
}
