import { WordRow } from "./WordRow";
import styles from "./Board.module.scss";

export const Board: React.FC = () => {
  return (
    <div className={styles["board-wrapper"]}>
      {Array.from({ length: 6 }, () => (
        <WordRow />
      ))}
    </div>
  );
};
