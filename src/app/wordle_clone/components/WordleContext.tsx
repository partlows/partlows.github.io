import { createContext, useContext, useState } from "react";
import { useFiveLetterWordGeneration } from "../hooks/use-five-letter-word-generation";

type WordleContextType = {
  MAX_COLUMNS: number;
  MAX_ROWS: number;
  currentRow: number;
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
  currentColumn: number;
  setCurrentColumn: React.Dispatch<React.SetStateAction<number>>;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  boardState: string[][];
  setBoardState: React.Dispatch<React.SetStateAction<string[][]>>;
  wordToGuess: string;
  handleBackspace: () => void;
  handleEnter: () => void;
  handleKeyPress: (key: string) => void;
};

const WordleContext = createContext<WordleContextType | undefined>(undefined);

export const useWordleContext = () => {
  const context = useContext(WordleContext);
  if (!context) {
    throw new Error(
      "useWordleContext must be used within a WordleContextProvider"
    );
  }
  return context;
};

export const WordleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const MAX_COLUMNS = 5;
  const MAX_ROWS = 6;

  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [boardState, setBoardState] = useState<string[][]>(
    Array.from({ length: MAX_ROWS }, () =>
      Array.from({ length: MAX_COLUMNS }, () => "")
    )
  );
  const { wordToGuess } = useFiveLetterWordGeneration();

  const appendLetterToWord = (letter: string) => {
    const newBoardState = [...boardState];
    newBoardState[currentRow][currentColumn] = letter;
    setBoardState(newBoardState);
  };

  const removeLetterFromWord = (columnToRemoveFrom: number) => {
    const newBoardState = [...boardState];
    newBoardState[currentRow][columnToRemoveFrom] = "";
    setBoardState(newBoardState);
  };

  const moveToNextSquare = () => {
    if (currentColumn !== MAX_COLUMNS - 1) {
      setCurrentColumn(currentColumn + 1);
    }
  };

  const moveToNextRow = () => {
    if (currentRow < MAX_ROWS - 1) {
      setCurrentRow(currentRow + 1);
      setCurrentColumn(0);
    }
  };

  const handleBackspace = () => {
    if (!!boardState[currentRow][currentColumn]) {
      console.log("removing letter");
      removeLetterFromWord(currentColumn);
    } else {
      if (currentColumn > 0) {
        console.log("moving back a space and removing letter");
        console.log("currentColumn: ", currentColumn);
        console.log("currentColumn - 1: ", currentColumn - 1);
        const newColumn = currentColumn - 1;
        setCurrentColumn(newColumn);
        removeLetterFromWord(newColumn);
      }
    }
  };

  const handleEnter = () => {
    if (
      currentColumn === MAX_COLUMNS - 1 &&
      !!boardState[currentRow][currentColumn]
    ) {
      if (boardState[currentRow].join("").toLocaleUpperCase() === wordToGuess) {
        console.log("You Win!");
        setIsGameOver(true);
        // TODO: Create victory animation
      } else {
        // TODO: need to flip background colors of squares if correct and black out wrong guesses.
        if (currentRow === MAX_ROWS - 1) {
          setIsGameOver(true);
          console.log("You Lose!");
        }
        moveToNextRow();
      }
    } else {
      // TODO: show popup indicating that user must fill in the whole word to submit
      console.log("invalid submission: ", boardState[currentRow].toString());
    }
  };

  const handleKeyPress = (key: string) => {
    appendLetterToWord(key);
    moveToNextSquare();
  };

  return (
    <WordleContext.Provider
      value={{
        MAX_COLUMNS,
        MAX_ROWS,
        currentRow,
        setCurrentRow,
        currentColumn,
        setCurrentColumn,
        boardState,
        setBoardState,
        isGameOver,
        setIsGameOver,
        wordToGuess,
        handleBackspace,
        handleEnter,
        handleKeyPress,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};
