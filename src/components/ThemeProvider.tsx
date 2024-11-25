import React, { createContext, useState, useContext } from "react";

// Create a ThemeContext
//  this is the context that we are createing
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
//  now we cretae the Provider ,
//  which ahvea  a state and we use it as commponent as such ThemeContext.Provider
//  and then to theat component we send a prop of value , so all the consumers
//  that want to have access to the save values need to useContext
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
