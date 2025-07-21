import { createContext, useContext } from "react";

export const LogoWidthContext = createContext<number | null>(null);

export const useLogoWidth = () => {
  const context = useContext(LogoWidthContext);
  // Nie rzucaj błędu, po prostu zwróć null
  return context;
};
