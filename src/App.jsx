import { useState, useRef, useEffect } from "react";
import "./App.css";

// The data list — the single source of truth for the furniture.
// Add a piece = add one object here. Nothing else needs to change.
const FURNITURE = [
  { id: "chair", name: "Lounge Chair", glb: "/chair.glb" },
  { id: "armchair", name: "Arm Chair", glb: "/arm_chair__furniture.glb" },
  { id: "table", name: "Table", glb: "/table_furniture.glb" },
  { id: "decorative", name: "Decorative", glb: "/decorative_furniture.glb" },
  { id: "apocalyptic", name: "Apocalyptic", glb: "/post_apocalyptic_furniture.glb" },
];

function App() {
  // State: which piece is currently selected (stores the id).
  const [selectedId, setSelectedId] = useState(FURNITURE[0].id);

  // Read state → find the selected item's data.
  const selected = FURNITURE.find((item) => item.id === selectedId);

  // A handle to the <model-viewer> element so we can ask it about AR.
  const modelRef = useRef(null);

  // Feature detection: assume AR works, let the device tell us if it doesn't.
  const [arSupported, setArSupported] = useState(true);

  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;
    // model-viewer knows if AR is available once the model has loaded.
    const check = () => setArSupported(el.canActivateAR);
    el.addEventListener("load", check);
    return () => el.removeEventListener("load", check);
  }, []);

  return (
    <div className="viewer">
      <model-viewer
        ref={modelRef}
        src={selected.glb}
        alt={selected.name}
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
      >
        <button slot="ar-button" className="ar-button">
          View in your room 👋
        </button>
      </model-viewer>

      {/* Fallback: only shown when the device can't do AR (e.g. desktop). */}
      {!arSupported && (
        <div className="fallback">
          AR isn’t available on this device — open this page on your phone to
          place furniture in your room. You can still spin the model here.
        </div>
      )}

      {/* The menu — rendered FROM the data list, not hardcoded. */}
      <div className="menu">
        {FURNITURE.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={
              item.id === selectedId ? "menu-item active" : "menu-item"
            }
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
