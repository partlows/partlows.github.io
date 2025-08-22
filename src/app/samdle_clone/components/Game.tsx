import { useSamdleContext } from "./SamdleContext";
import { Board } from "./Board";
import { ScreenKeyboard } from "./ScreenKeyboard";
import styles from "./Game.module.scss";
import { BuyMeACoffee } from "@/scripts";

export const Game: React.FC = () => {
  const { currentColumn, currentRow } = useSamdleContext();

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
      <BuyMeACoffee />
      <Board />
      <ScreenKeyboard />
    </div>
  );
};
