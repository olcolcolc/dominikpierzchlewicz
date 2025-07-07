import "./App.css";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader/Loader";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import Awards from "./pages/Awards/Awards";
import Bio from "./pages/Bio/Bio";
import { Contact } from "./pages/Contact/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Loader isVisible={isLoading} />
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
      </div>
    </>
  );
}

export default App;
