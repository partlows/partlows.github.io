import { SetStateAction } from "react";
import styles from "./GameOverModal.module.scss";
import { GameStateEnum, GameStateType } from "./SamdleContext";
import { getShareableGuessStatistic } from "../utils/get-shareable-guess-statistic";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

type GameOverModalProps = {
  boardState: string[][];
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  gameState: GameStateType;
  wordToGuess: string;
};
export const GameOverModal: React.FC<GameOverModalProps> = ({
  boardState,
  isOpen,
  setIsOpen,
  gameState,
  wordToGuess,
}) => {
  const headingText =
    gameState === GameStateEnum.WON
      ? "Congratulations!"
      : "Better Luck Next Time!";

  return (
    <dialog className={styles.container} open={isOpen}>
      <div className={styles.header}>
        <button onClick={() => setIsOpen(false)}>
          {/* <FontAwesomeIcon icon={byPrefixAndName.far["xmark"]} /> */}X
        </button>
      </div>
      <div className={styles.body}>
        <h1>{headingText}</h1>
        <p style={{}}>Come back tomorrow for the next word!</p>
        <CopyToClipboardButton
          contentToCopy={getShareableGuessStatistic(
            boardState,
            wordToGuess,
            gameState
          )}
          buttonText="Share your stats!"
        />
      </div>
    </dialog>
  );
};
