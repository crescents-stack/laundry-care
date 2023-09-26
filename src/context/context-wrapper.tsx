import { ReactElement } from "react";
import LanguageProvider from "./language-provider";
import TokenProvider from "./token-provider";

const ContextWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <LanguageProvider>
      <TokenProvider>{children}</TokenProvider>
    </LanguageProvider>
  );
};

export default ContextWrapper;
