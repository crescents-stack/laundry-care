"use client";

import {
  ReactElement,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type LanguageContextProviderProps = {
  children: ReactElement;
};
type languages = "en" | "bn";
export interface LanguageContextState {
  language: languages;
  setLanguage: Dispatch<SetStateAction<languages>>;
}

export const LanguageContext = createContext<LanguageContextState | null>(null);

const LanguageProvider = ({ children }: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState<languages>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const useLanguageProvider = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageProvider must be used within ContextWrapper");
  }
  return context;
};
