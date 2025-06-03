import "./App.css";
import { NavbarAlt } from "./components/Navbar_alt/NavbarAlt";
import { MenuTitle } from "./components/MenuTitle/MenuTitle";
import { Slider } from "./components/Slider/Slider";

function App() {
  return (
    <>
      <NavbarAlt />
      <Slider />
      <MenuTitle>Bio</MenuTitle>
    </>
  );
}

export default App;
