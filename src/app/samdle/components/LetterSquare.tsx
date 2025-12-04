"use client";

import { useRef, useEffect } from "react";
import styles from "./LetterSquare.module.scss";
import { useSamdleContext } from "./SamdleContext";
import cn from "clsx";

type LetterSquareProps = {
  squareIndex: number;
  rowIndex: number;
  guessedLetterClassName?: string;
};

export const LetterSquare: React.FC<LetterSquareProps> = ({
  squareIndex,
  rowIndex,
  guessedLetterClassName,
}) => {
  const {
    currentColumn,
    currentRow,
    boardState,
    isGameOver,
    handleBackspace,
    handleEnter,
    handleKeyPress,
  } = useSamdleContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentColumn === squareIndex && currentRow === rowIndex) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [currentColumn, squareIndex, currentRow, rowIndex]);

  return (
    <div
      className={cn(styles["letter-container"], {
        [styles["letter-container--filled"]]: boardState[rowIndex][squareIndex],
        [styles[`letter-container--${guessedLetterClassName}`]]:
          guessedLetterClassName,
      })}
    >
      <input
        autoComplete="off"
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
            if (
              currentColumn === 4 &&
              !!boardState[currentRow][currentColumn]
            ) {
              e.preventDefault();
              return;
            }

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
