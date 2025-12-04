import { SetStateAction } from "react";
import styles from "./GameOverModal.module.scss";

type GameOverModalProps = {
  boardState: string[][];
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
export const GameOverModal: React.FC<GameOverModalProps> = ({
  boardState,
  isOpen,
  setIsOpen,
}) => {
  return (
    <dialog className={styles.container} open={isOpen}>
      <div className={styles.header}>
        <button onClick={() => setIsOpen(false)}>
          {/* <FontAwesomeIcon icon={byPrefixAndName.far["xmark"]} /> */}X
        </button>
      </div>
      <div className={styles.body}>
        <h1>You Solved the Word!</h1>
        <button onClick={() => {}}>Share your stats!</button>
      </div>
    </dialog>
  );
};
