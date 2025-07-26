import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarModeContext was used outside of DarkModeProvider");

  return context;
}

export { useDarkMode };
