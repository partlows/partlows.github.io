"use client";

import { useRef, useEffect } from "react";
import styles from "./LetterSquare.module.scss";
import { useWordValidation } from "../hooks/use-word-validation";
import { useWordleContext } from "./WordleContext";
import cn from "clsx";

type LetterSquareProps = {
  squareIndex: number;
  rowIndex: number;
};

export const LetterSquare: React.FC<LetterSquareProps> = ({
  squareIndex,
  rowIndex,
}) => {
  const {
    currentColumn,
    currentRow,
    wordToGuess,
    boardState,
    isGameOver,
    handleBackspace,
    handleEnter,
    handleKeyPress,
  } = useWordleContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentColumn === squareIndex && currentRow === rowIndex) {
      inputRef.current?.focus();
    }
  }, [currentColumn, squareIndex, currentRow, rowIndex]);

  const { isLetterInWord, isLetterInCorrectSpot } = useWordValidation();

  const isCompletedRow = currentRow !== rowIndex;
  const hasLetter = !!boardState[rowIndex][squareIndex];
  const letterInWord = hasLetter
    ? isLetterInWord(boardState[rowIndex][squareIndex], wordToGuess)
    : false;
  const letterInRightSpot = hasLetter
    ? isLetterInCorrectSpot(
        boardState[rowIndex][squareIndex],
        squareIndex,
        wordToGuess
      )
    : false;

  return (
    <div
      className={cn(styles["letter-container"], {
        [styles["letter-container--filled"]]: boardState[rowIndex][squareIndex],
        [styles["letter-container--guessed-incorrectly"]]:
          (isGameOver || isCompletedRow) && hasLetter && !letterInWord,
        [styles["letter-container--guessed-correctly-wrong-space"]]:
          (isGameOver || isCompletedRow) &&
          hasLetter &&
          letterInWord &&
          !letterInRightSpot,
        [styles["letter-container--guessed-correctly-right-space"]]:
          (isGameOver || isCompletedRow) &&
          hasLetter &&
          letterInWord &&
          letterInRightSpot,
      })}
    >
      <input
        ref={inputRef}
        id={`row-${rowIndex}-square-${squareIndex}`}
        type="text"
        disabled={currentRow !== rowIndex || isGameOver}
        value={boardState[rowIndex][squareIndex]}
        maxLength={1}
        className={styles["letter-input"]}
        pattern="[A-Z]"
        inputMode="none"
        onInput={() => {}}
        onKeyUp={(e) => {
          const target = e.target as HTMLInputElement;
          if (e.key === "Backspace") {
            handleBackspace();
          }
          if (e.key === "Enter") {
            handleEnter();
          }

          if (/^[A-Za-z]$/.test(e.key)) {
            target.value = e.key.toUpperCase();
            handleKeyPress(e.key);
          } else {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};
