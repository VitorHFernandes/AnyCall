'use client'
import { createContext, useState, useEffect } from "react";

type tAppProvider = { children: React.ReactNode };

interface iAppContext {
  theme?: string;
  alterTheme?: () => void;
}

const defaultContextValue: iAppContext = {
  theme: 'light'
};

const AppContext = createContext<iAppContext>(defaultContextValue);

export const AppProvider = ({ children }: tAppProvider) => {
  const [theme, setTheme] = useState('dark');

  const alterTheme = () => {
    const newTheme = theme === '' || theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem("theme");
    setTheme(savedTheme ?? 'light');
  }, []);

  return (
    <AppContext.Provider value={{ theme, alterTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;