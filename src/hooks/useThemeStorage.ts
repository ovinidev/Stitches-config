import { useState, useEffect } from "react";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

type Props = [theme: string, toggleTheme: () => void];

export function useThemeStorage(): Props {
  const [theme, setTheme] = useState<string>(light);

  useEffect(() => {
    const storageValue = localStorage.getItem("stitches@theme");

    if (!storageValue) {
      setTheme(light);
      localStorage.setItem("stitches@theme", "light");
    }

    setTheme(storageValue === "light" ? light : dark);
  }, []);

  function toggleTheme() {
    const newThemeName = theme === light ? "dark" : "light";
    localStorage.setItem("stitches@theme", newThemeName);
    setTheme(newThemeName === "light" ? light : dark);
  }

  return [theme, toggleTheme];
}
