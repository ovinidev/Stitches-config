import { createContext, ReactNode, useContext } from "react";
import { useThemeStorage } from "../hooks/useThemeStorage";

interface ContextProps {
  children: ReactNode;
}

interface ContextData {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ContextData);

export const ThemeProvider = ({ children }: ContextProps) => {
  const [theme, toggleTheme] = useThemeStorage();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const response = useContext(ThemeContext);

  return response;
};
