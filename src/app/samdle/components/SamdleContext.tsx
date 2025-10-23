import { createContext, useContext, useState } from "react";
import { useFiveLetterWordGeneration } from "../hooks/use-five-letter-word-generation";

type SamdleContextType = {
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
  gameState: GameStateType;
  setGameState: React.Dispatch<React.SetStateAction<GameStateType>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
  handleBackspace: () => void;
  handleEnter: () => void;
  handleKeyPress: (key: string) => void;
};

export type GameStateType = "PLAYING" | "WON" | "LOST";
export enum GameStateEnum {
  PLAYING = "PLAYING",
  WON = "WON",
  LOST = "LOST",
}

const SamdleContext = createContext<SamdleContextType | undefined>(undefined);

export const useSamdleContext = () => {
  const context = useContext(SamdleContext);
  if (!context) {
    throw new Error(
      "useSamdleContext must be used within a SamdleContextProvider"
    );
  }
  return context;
};

export const SamdleContextProvider = ({
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
  const [gameState, setGameState] = useState<GameStateType>(
    GameStateEnum.PLAYING
  );
  const [alertMessage, setAlertMessage] = useState<string>("");
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
      removeLetterFromWord(currentColumn);
    } else {
      if (currentColumn > 0) {
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
        setGameState("WON");
        setAlertMessage("You Won!");
        setIsGameOver(true);
        // TODO: Create victory animation
      } else {
        if (currentRow === MAX_ROWS - 1) {
          setGameState("LOST");
          setAlertMessage(`${wordToGuess}`);
          setIsGameOver(true);
        }
        moveToNextRow();
      }
    } else {
      setAlertMessage("Invalid Submission");
    }
  };

  const handleKeyPress = (key: string) => {
    if (
      currentColumn === MAX_COLUMNS - 1 &&
      !!boardState[currentRow][currentColumn]
    ) {
      return;
    }

    appendLetterToWord(key);
    moveToNextSquare();
  };

  return (
    <SamdleContext.Provider
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
        gameState,
        setGameState,
        alertMessage,
        setAlertMessage,
        handleBackspace,
        handleEnter,
        handleKeyPress,
      }}
    >
      {children}
    </SamdleContext.Provider>
  );
};
