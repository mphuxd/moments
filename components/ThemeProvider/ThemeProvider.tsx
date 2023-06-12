import React, { useState } from "react";
import cx from "classnames";
import { ThemeContext } from "./context";

export interface ThemeProviderProps {
  children: React.ReactElement;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState("light");

  const className = cx({
    "theme--light": colorScheme === "light",
    "theme--dark": colorScheme === "dark",
  });

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {React.cloneElement(children, {
        ...children.props,
        className: cx(children.props.className, className),
      })}
    </ThemeContext.Provider>
  );
}
