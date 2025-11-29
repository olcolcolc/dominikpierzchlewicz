import "./App.css";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader/Loader";
import { Navbar } from "./components/Navbar/Navbar";
import { SliderStatic } from "./components/Slider/SliderStatic";
import MainContainer from "./components/MainContainer/MainContainer";

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
      <Loader isVisible={isLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <SliderStatic />
          <MainContainer></MainContainer>
        </>
      )}
    </>
  );
}

export default App;
