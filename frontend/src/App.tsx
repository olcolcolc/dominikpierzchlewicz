import "./App.css";
import { NavbarAlt } from "./components/Navbar_alt/NavbarAlt";
import { Slider } from "./components/Slider/Slider";
import Bio from "./pages/Bio/Bio";

function App() {
  return (
    <>
      <NavbarAlt />
      <Slider />
      <section id="bio">
        <Bio />
      </section>
    </>
  );
}

export default App;
