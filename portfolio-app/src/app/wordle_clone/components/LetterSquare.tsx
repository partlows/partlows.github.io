"use client";

import { useRef, useEffect } from "react";
import styles from "./LetterSquare.module.scss";
import { useWordleContext } from "./WordleContext";

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
    setCurrentColumn,
    currentRow,
    setCurrentRow,
    currentWord,
    setCurrentWord,
    MAX_COLUMNS,
    MAX_ROWS,
  } = useWordleContext();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (currentColumn === squareIndex && currentRow === rowIndex) {
      inputRef.current?.focus();
      console.log("focus is on: ", inputRef.current?.id);
    }
  }, [currentColumn, squareIndex, currentRow, rowIndex]);

  const appendLetterToWord = (letter: string) => {
    setCurrentWord(currentWord + letter);
  };

  const removeLetterFromWord = () => {
    console.log("currentColumn: ", currentColumn);
    console.log("letter being deleted", currentWord.charAt(currentColumn));
    console.log("first letter", currentWord.charAt(0));
    console.log("sliced word", currentWord.slice(0, currentColumn));
    setCurrentWord(currentWord.slice(0, currentColumn));
  };

  const moveToNextSquare = () => {
    if (currentColumn === squareIndex && currentColumn !== MAX_COLUMNS - 1) {
      setCurrentColumn(currentColumn + 1);
    }
  };

  const moveToPreviousSquare = () => {
    if (currentColumn === squareIndex && currentColumn !== 0) {
      setCurrentColumn(currentColumn - 1);
    }
  };

  const moveToNextRow = () => {
    if (currentRow < MAX_ROWS - 1) {
      setCurrentRow(currentRow + 1);
      setCurrentColumn(0);
    }
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        id={`row-${rowIndex}-square-${squareIndex}`}
        type="text"
        maxLength={1}
        className={styles.letter}
        pattern="[A-Z]"
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            if (inputRef.current?.value) {
              removeLetterFromWord();
              return;
            } else {
              moveToPreviousSquare();
            }
          }
          if (e.key === "Enter") {
            if (currentColumn === MAX_COLUMNS - 1 && inputRef.current?.value) {
              // TODO: perform validation on the word itself
              console.log(currentWord);
              // setCurrentWord("");
              // moveToNextRow();
            } else {
              // TODO: show popup indicating that user must fill in the whole word to submit
              console.log(currentWord);
              console.log("invalid submission");
            }
          }
        }}
        onKeyUp={(e) => {
          const target = e.target as HTMLInputElement;

          if (/^[A-Za-z]$/.test(e.key)) {
            target.value = e.key.toUpperCase();
            appendLetterToWord(e.key);
            moveToNextSquare();
          } else {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};
