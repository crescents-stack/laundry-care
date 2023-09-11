

import { ReactElement } from "react";
import LanguageProvider from "./language-provider";

const ContextWrapper = ({ children }: { children: ReactElement }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default ContextWrapper;
