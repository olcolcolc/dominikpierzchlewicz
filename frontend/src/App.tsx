// App.tsx
import "./App.css";
import { useEffect, useState, useCallback } from "react"; // Dodaj useCallback
import { Loader } from "./components/Loader/Loader";
import { Navbar } from "./components/Navbar/Navbar";
import Awards from "./pages/Awards/Awards";
import { Contact } from "./pages/Contact/Contact";
import { SliderStatic } from "./components/Slider/SliderStatic";
import BioAlt2 from "./pages/Bio/Bio";
import Projects from "./pages/Projects/Projects";
import { LogoWidthContext } from "./context/LogoWidthContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [logoWidth, setLogoWidth] = useState<number | null>(null); // Stan na szerokość logo

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Użyj useCallback, aby funkcja onLogoWidthMeasured była stabilna
  const handleLogoWidthMeasured = useCallback((width: number) => {
    setLogoWidth(width);
  }, []); // Brak zależności, bo setLogoWidth jest stabilne

  // To jest kluczowa zmiana: Renderuj główną zawartość tylko wtedy, gdy logoWidth nie jest null
  if (logoWidth === null) {
    // Możesz tutaj zwrócić jakiś fallback, np. tylko loader lub pusty div
    return (
      <>
        <Navbar onLogoWidthMeasured={handleLogoWidthMeasured} />
        <Loader isVisible={isLoading} />
        {/* Możesz ewentualnie wyświetlić inne elementy UI, które nie potrzebują logoWidth */}
      </>
    );
  }

  // Gdy logoWidth jest już dostępne, renderuj całą aplikację
  return (
    <LogoWidthContext.Provider value={logoWidth}>
      <Navbar onLogoWidthMeasured={handleLogoWidthMeasured} />
      <div>
        <Loader isVisible={isLoading} />{" "}
        {/* Loader być może nadal powinien być kontrolowany przez isLoading */}
        <SliderStatic />
        <main>
          <section id="bio">
            <BioAlt2 />
          </section>
          <section id="projekty">
            <Projects />
          </section>
          <section id="nagrody">
            <Awards />
          </section>
        </main>
        <footer id="kontakt">
          <Contact />
        </footer>
      </div>
    </LogoWidthContext.Provider>
  );
}

export default App;
