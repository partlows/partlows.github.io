import { createContext, useContext, useState } from "react";

type WordleContextType = {
  currentRow: number;
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
  currentColumn: number;
  setCurrentColumn: React.Dispatch<React.SetStateAction<number>>;
  currentWord: string;
  setCurrentWord: React.Dispatch<React.SetStateAction<string>>;
  MAX_COLUMNS: number;
  MAX_ROWS: number;
};

const WordleContext = createContext<WordleContextType | undefined>(undefined);

export const useWordleContext = () => {
  const context = useContext(WordleContext);
  if (!context) {
    throw new Error("useWordleContext must be used within a WordleContextProvider");
  }
  return context;
};

export const WordleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  return (
    <WordleContext.Provider
      value={{
        currentRow,
        setCurrentRow,
        currentColumn,
        setCurrentColumn,
        currentWord,
        setCurrentWord,
        MAX_COLUMNS: 5,
        MAX_ROWS: 6,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};
