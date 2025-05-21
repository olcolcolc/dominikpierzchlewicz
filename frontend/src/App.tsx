import "./App.css";
import arch_sketch from "./assets/arch_sketch.jpg";
import { NavbarAlt } from "./components/Navbar_alt/NavbarAlt";

const bgImageStyle = {
  backgroundImage: `url(${arch_sketch})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
};

function App() {
  return (
    <>
      <div style={bgImageStyle} className="fade-in">
        {/* <Navbar />/> */}
        <NavbarAlt />
        <main
          style={{
            top: 0,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            width: "100%",
          }}
        ></main>
      </div>
    </>
  );
}

export default App;
