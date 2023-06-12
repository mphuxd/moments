import React, { createContext } from "react";

interface ThemeContextProps {
  colorScheme: string;
  setColorScheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  colorScheme: "",
  setColorScheme: () => {},
});
