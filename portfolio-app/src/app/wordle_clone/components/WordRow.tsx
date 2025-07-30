import { LetterSpace } from "./LetterSpace";
import styles from "./WordRow.module.scss";

export const WordRow: React.FC = () => {
  return (
    <div className={styles["row-wrapper"]}>
      {Array.from({ length: 5 }, () => (
        <LetterSpace />
      ))}
    </div>
  );
};
