import { createContext, useContext, useState } from "react";
import { useFiveLetterWordGeneration } from "../hooks/use-five-letter-word-generation";
import {
  PlayStateEnum,
  PlayStateType,
  GameStateType,
} from "../types/samdle-types";

type SamdleContextType = {
  MAX_COLUMNS: number;
  MAX_ROWS: number;
  currentRow: number;
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
  currentColumn: number;
  setCurrentColumn: React.Dispatch<React.SetStateAction<number>>;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  isGameOverModalOpen: boolean;
  setIsGameOverModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  boardState: string[][];
  setBoardState: React.Dispatch<React.SetStateAction<string[][]>>;
  wordToGuess: string;
  playState: PlayStateType;
  setPlayState: React.Dispatch<React.SetStateAction<PlayStateType>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
  handleBackspace: () => void;
  handleEnter: () => void;
  handleKeyPress: (key: string) => void;
};

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
  gameState,
  setGameState,
}: {
  children: React.ReactNode;
  gameState: GameStateType;
  setGameState: React.Dispatch<React.SetStateAction<GameStateType | undefined>>;
}) => {
  const MAX_COLUMNS = 5;
  const MAX_ROWS = 6;

  const [currentRow, setCurrentRow] = useState(gameState.currentRow ?? 0);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [isGameOver, setIsGameOver] = useState(
    (gameState.playState === PlayStateEnum.WON || gameState.playState === PlayStateEnum.LOST) ? true : false
  );
  const [isGameOverModalOpen, setIsGameOverModalOpen] = useState(isGameOver);
  const [boardState, setBoardState] = useState<string[][]>(
    gameState.boardState
      ? gameState.boardState
      : Array.from({ length: MAX_ROWS }, () =>
        Array.from({ length: MAX_COLUMNS }, () => "")
      )
  );
  const [playState, setPlayState] = useState<PlayStateType>(
    gameState.playState ?? PlayStateEnum.PLAYING
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

  const moveToNextRow = (): number => {
    if (currentRow < MAX_ROWS - 1) {
      const nextRow = currentRow + 1;
      setCurrentRow(nextRow);
      setCurrentColumn(0);

      return nextRow;
    }
    return currentRow;
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
    if (boardState[currentRow][MAX_COLUMNS - 1] !== "") {
      if (boardState[currentRow].join("").toLocaleUpperCase() === wordToGuess) {
        setPlayState("WON");
        setAlertMessage("You Won!");
        setIsGameOver(true);
        setGameState({
          boardState: boardState,
          currentRow: currentRow,
          playState: PlayStateEnum.WON,
          previousWord: wordToGuess,
        });
        // TODO: Create victory animation
      } else if (currentRow === MAX_ROWS - 1) {
        setPlayState("LOST");
        setAlertMessage(`${wordToGuess}`);
        setIsGameOver(true);
        setGameState({
          boardState: boardState,
          currentRow: currentRow,
          playState: PlayStateEnum.LOST,
          previousWord: wordToGuess,
        });
      } else {
        const newRow = moveToNextRow();
        setGameState({
          boardState: boardState,
          currentRow: newRow,
          playState: playState,
          previousWord: undefined,
        });
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
        isGameOverModalOpen,
        setIsGameOverModalOpen,
        wordToGuess,
        playState,
        setPlayState,
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
