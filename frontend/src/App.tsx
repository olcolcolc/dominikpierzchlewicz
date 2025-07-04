import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import Awards from "./pages/Awards/Awards";
import Bio from "./pages/Bio/Bio";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <main>
        <section id="projekty">{/* <Projects /> */}</section>
        <section id="bio">
          <Bio />
        </section>
        <section id="nagrody">
          <Awards />
        </section>
      </main>
      <footer id="kontakt">
        <Contact />
      </footer>
    </>
  );
}

export default App;
