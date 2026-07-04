import "./App.css";

function App() {
  return (
    <model-viewer
      src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
      alt="A 3D model"
      camera-controls
      ar
      ar-modes="webxr scene-viewer quick-look"
      style={{ width: "100vw", height: "100vh" }}
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
  );
}

export default App;
