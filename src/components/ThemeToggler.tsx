import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

//  this is a consumer component that is using useContext function
//  and that functino is getting the context that we created in the Provider file
//  and from that function we can destructuring the props from the return value
//  of the useContext
const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button className="btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
