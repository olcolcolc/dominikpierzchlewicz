import "./App.css";
import { NavbarAlt } from "./components/Navbar_alt/NavbarAlt";
import { Slider } from "./components/Slider/Slider";
import Awards from "./pages/Awards/Awards";
import Bio from "./pages/Bio/Bio";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app-container">
      <NavbarAlt />
      <Slider />
      <section id="bio">
        <Bio />
      </section>
      <section id="nagrody">
        <Awards />
      </section>
      <footer id="kontakt">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
