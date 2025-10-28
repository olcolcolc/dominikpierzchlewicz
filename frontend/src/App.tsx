import "./App.css";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader/Loader";
import { Navbar } from "./components/Navbar/Navbar";
// import Awards from "./pages/Awards/Awards";
// import { Contact } from "./pages/Contact/Contact";
import { SliderStatic } from "./components/Slider/SliderStatic";
// import BioAlt2 from "./pages/Bio/Bio";
// import Projects from "./pages/Projects/Projects";
import MainContainer from "./components/MainContainer/MainContainer";
// import { NavbarLinksWrapper } from "./components/Navbar/NavbarLinksWrapper";
// import { sections } from "./data/sections";

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
        <SliderStatic />
        {/* <NavbarLinksWrapper
            isOpen={true}
            links={sections}
            onLinkClick={() => {}}
            ariaLabel="Navbar menu links"
          /> */}
        <MainContainer></MainContainer>
        {/* <section id="bio">
            <BioAlt2 />
          </section>
          <section id="projekty">
            <Projects />
          </section>
          <section id="nagrody">
            <Awards />
          </section> */}
        {/* <footer id="kontakt">
          <Contact />
        </footer> */}
      </div>
    </>
  );
}

export default App;
