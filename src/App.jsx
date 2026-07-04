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
    ></model-viewer>
  );
}

export default App;
