import { useMemo } from "react";
import { LetterSquare } from "./LetterSquare";
import { useSamdleContext } from "./SamdleContext";
import styles from "./WordRow.module.scss";
import { calculateLetterStates } from "../utils/letter-validation";

type WordRowType = {
  rowIndex: number;
};

export const WordRow: React.FC<WordRowType> = ({ rowIndex }) => {
  const { MAX_COLUMNS, isGameOver, currentRow, boardState, wordToGuess } =
    useSamdleContext();

  const letterClassNames = useMemo(() => {
    if (!isGameOver && currentRow === rowIndex) {
      return Array(MAX_COLUMNS).fill(undefined);
    }

    const guessedWord = boardState[rowIndex].join('').toLocaleUpperCase();
    return calculateLetterStates(guessedWord, wordToGuess);
  }, [isGameOver, currentRow, rowIndex, boardState, wordToGuess, MAX_COLUMNS]);

  return (
    <div id={`row-${rowIndex}`} className={styles["row-wrapper"]}>
      {Array.from({ length: MAX_COLUMNS }, (_, index) => (
        <LetterSquare
          key={index}
          squareIndex={index}
          rowIndex={rowIndex}
          guessedLetterClassName={letterClassNames[index]}
        />
      ))}
    </div>
  );
};
