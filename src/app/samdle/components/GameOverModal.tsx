import { SetStateAction } from "react";
import styles from "./GameOverModal.module.scss";
import { getShareableGuessStatistic } from "../utils/get-shareable-guess-statistic";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import { PlayStateEnum, PlayStateType } from "../types/samdle-types";

type GameOverModalProps = {
  boardState: string[][];
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  playState: PlayStateType;
  wordToGuess: string;
};
export const GameOverModal: React.FC<GameOverModalProps> = ({
  boardState,
  isOpen,
  setIsOpen,
  playState,
  wordToGuess,
}) => {
  const headingText =
    playState === PlayStateEnum.WON
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
        <p>Come back tomorrow for the next word!</p>
        <CopyToClipboardButton
          contentToCopy={getShareableGuessStatistic(
            boardState,
            wordToGuess,
            playState
          )}
          buttonText="Share your stats!"
        />
      </div>
    </dialog>
  );
};
