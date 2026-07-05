import { useState } from "react";
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

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <model-viewer
        src={selected.glb}
        alt={selected.name}
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: "100%", height: "100%" }}
      >
        <button
          slot="ar-button"
          style={{
            position: "absolute",
            top: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 20px",
            borderRadius: "999px",
            border: "none",
            background: "black",
            color: "white",
            fontSize: "16px",
          }}
        >
          View in your room 👋
        </button>
      </model-viewer>

      {/* The menu — rendered FROM the data list, not hardcoded. */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {FURNITURE.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              background: item.id === selectedId ? "black" : "white",
              color: item.id === selectedId ? "white" : "black",
              fontSize: "14px",
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
