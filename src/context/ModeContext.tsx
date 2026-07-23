import React, { createContext, useContext, useState, ReactNode } from "react";
import { ModeType } from "../types";

interface ModeContextType {
  mode: ModeType;
  setMode: (mode: ModeType) => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: "all",
  setMode: () => {},
});

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ModeType>("all");

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
