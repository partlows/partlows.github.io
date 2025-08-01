import { useWordleContext } from "./WordleContext";
import { Board } from "./Board";
import { ScreenKeyboard } from "./ScreenKeyboard";
import styles from "./Game.module.scss";

export const Game: React.FC = () => {
  const { currentColumn, currentRow } = useWordleContext();

  const handleContainerClick = () => {
    console.log("handleContainerClick activated");
    const currentLetterSquare = document.getElementById(
      `row-${currentRow}-square-${currentColumn}`
    );
    if (currentLetterSquare) {
      currentLetterSquare.focus();
      console.log("Focus applied via click handler");
    }
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <Board />
      <ScreenKeyboard />
    </div>
  );
};
