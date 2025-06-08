import "./App.css";
import { NavbarAlt } from "./components/Navbar_alt/NavbarAlt";
import { Slider } from "./components/Slider/Slider";
import Awards from "./pages/Awards/Awards";
import Bio from "./pages/Bio/Bio";

function App() {
  return (
    <>
      <NavbarAlt />
      <Slider />
      <section id="bio">
        <Bio />
      </section>
      <section id="awards">
        <Awards />
      </section>
    </>
  );
}

export default App;
