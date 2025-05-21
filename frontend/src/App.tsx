import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import arch_sketch from "./assets/arch_sketch.jpg";

function App() {
  return (
    <div className="fade-in">
      <Navbar />
      <main
        style={{
          top: 0,
          position: "absolute",
        }}
      >
        <img
          src={arch_sketch}
          alt="Wallpaper"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </main>
    </div>
  );
}

export default App;
