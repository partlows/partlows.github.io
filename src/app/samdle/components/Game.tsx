import { useSamdleContext } from "./SamdleContext";
import { Board } from "./Board";
import { ScreenKeyboard } from "./ScreenKeyboard";
import styles from "./Game.module.scss";
import { BuyMeACoffee } from "@/scripts";
import { AlertBox } from "./AlertBox";
import { GameOverModal } from "./GameOverModal";

export const Game: React.FC = () => {
  const {
    currentColumn,
    currentRow,
    isGameOverModalOpen,
    setIsGameOverModalOpen,
    boardState,
    isGameOver,
    playState,
    wordToGuess
  } = useSamdleContext();

  const handleContainerClick = () => {
    const currentLetterSquare = document.getElementById(
      `row-${currentRow}-square-${currentColumn}`
    );
    if (currentLetterSquare) {
      currentLetterSquare.focus();
    }
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <AlertBox />
      <BuyMeACoffee />
      <Board />
      {!isGameOver && <ScreenKeyboard />}
      <GameOverModal
        isOpen={isGameOverModalOpen}
        setIsOpen={setIsGameOverModalOpen}
        boardState={boardState}
        playState={playState}
        wordToGuess={wordToGuess}
      />
      <div className={styles["see-results-button-container"]}>
        {isGameOver && (
          <button
            className={styles["see-results-button"]}
            onClick={() => setIsGameOverModalOpen(true)}
          >
            See Results
          </button>
        )}
      </div>
    </div>
  );
};
