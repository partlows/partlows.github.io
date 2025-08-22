import { LetterSquare } from "./LetterSquare";
import { useSamdleContext } from "./SamdleContext";
import styles from "./WordRow.module.scss";

type WordRowType = {
  rowIndex: number;
};

export const WordRow: React.FC<WordRowType> = ({ rowIndex }) => {
  const { MAX_COLUMNS } = useSamdleContext();
  return (
    <div id={`row-${rowIndex}`} className={styles["row-wrapper"]}>
      {Array.from({ length: MAX_COLUMNS }, (_, index) => (
        <LetterSquare key={index} squareIndex={index} rowIndex={rowIndex} />
      ))}
    </div>
  );
};
