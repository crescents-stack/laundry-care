"use client";

import {
  ReactElement,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

type TokenContextProviderProps = {
  children: ReactElement;
};
type tokenType = string | null;
export interface TokenContextState {
  token: tokenType;
  setToken: Dispatch<SetStateAction<tokenType>>;
}

export const TokenContext = createContext<TokenContextState | null>(null);

const TokenProvider = ({ children }: TokenContextProviderProps) => {
  const [token, setToken] = useState<tokenType>(null);

  useEffect(() => {
    if (localStorage) {
      let tempToken = localStorage.getItem("token");
      if (tempToken) {
        setToken(tempToken);
      }
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;

export const useTokenProvider = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useTokenProvider must be used within ContextWrapper");
  }
  return context;
};
