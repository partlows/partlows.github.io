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
    setCurrentColumn,
    currentRow,
    setCurrentRow,
    wordToGuess,
    boardState,
    setBoardState,
    isWordleSolved,
    setIsWordleSolved,
    MAX_COLUMNS,
    MAX_ROWS,
  } = useWordleContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentColumn === squareIndex && currentRow === rowIndex) {
      inputRef.current?.focus();
    }
  }, [currentColumn, squareIndex, currentRow, rowIndex]);

  const { isLetterInWord, isLetterInRightSpot } = useWordValidation();

  const isCompletedRow = currentRow !== rowIndex;
  const hasLetter = !!boardState[rowIndex][squareIndex];
  const letterInWord = hasLetter
    ? isLetterInWord(boardState[rowIndex][squareIndex], wordToGuess)
    : false;
  const letterInRightSpot = hasLetter
    ? isLetterInRightSpot(
        boardState[rowIndex][squareIndex],
        squareIndex,
        wordToGuess
      )
    : false;

  const appendLetterToWord = (
    letter: string,
    rowIndex: number,
    columnIndex: number
  ) => {
    const newBoardState = [...boardState];
    newBoardState[rowIndex][columnIndex] = letter;
    setBoardState(newBoardState);
  };

  const removeLetterFromWord = (rowIndex: number, columnIndex: number) => {
    const newBoardState = [...boardState];
    newBoardState[rowIndex][columnIndex] = "";
    setBoardState(newBoardState);
  };

  const moveToNextSquare = () => {
    if (currentColumn === squareIndex && currentColumn !== MAX_COLUMNS - 1) {
      setCurrentColumn(currentColumn + 1);
    }
  };

  const moveToNextRow = () => {
    if (currentRow < MAX_ROWS - 1) {
      setCurrentRow(currentRow + 1);
      setCurrentColumn(0);
    }
  };

  return (
    <div
      className={cn(styles["letter-container"], {
        [styles["letter-container--filled"]]: boardState[rowIndex][squareIndex],
        [styles["letter-container--guessed-incorrectly"]]:
          (isWordleSolved || isCompletedRow) && hasLetter && !letterInWord,
        [styles["letter-container--guessed-correctly-wrong-space"]]:
          (isWordleSolved || isCompletedRow) &&
          hasLetter &&
          letterInWord &&
          !letterInRightSpot,
        [styles["letter-container--guessed-correctly-right-space"]]:
          (isWordleSolved || isCompletedRow) &&
          hasLetter &&
          letterInWord &&
          letterInRightSpot,
      })}
    >
      <input
        ref={inputRef}
        id={`row-${rowIndex}-square-${squareIndex}`}
        type="text"
        disabled={currentRow !== rowIndex || isWordleSolved}
        value={boardState[rowIndex][squareIndex]}
        maxLength={1}
        className={styles["letter-input"]}
        pattern="[A-Z]"
        onInput={() => {}}
        onKeyUp={(e) => {
          const target = e.target as HTMLInputElement;
          if (e.key === "Backspace") {
            if (boardState[rowIndex][squareIndex]) {
              removeLetterFromWord(rowIndex, squareIndex);
            } else {
              console.log("a letter is not present");
              if (currentColumn > 0) {
                const newColumn = currentColumn - 1;
                setCurrentColumn(newColumn);
                removeLetterFromWord(rowIndex, newColumn);
              }
            }
          }
          if (e.key === "Enter") {
            if (
              squareIndex === MAX_COLUMNS - 1 &&
              !!boardState[rowIndex][squareIndex]
            ) {
              if (
                boardState[currentRow].join("").toLocaleUpperCase() ===
                wordToGuess
              ) {
                console.log("You Win!");
                setIsWordleSolved(true);
                // TODO: Create victory animation
              } else {
                // TODO: need to flip background colors of squares if correct and black out wrong guesses.
                //setCurrentWord("");
                moveToNextRow();
              }
            } else {
              // TODO: show popup indicating that user must fill in the whole word to submit
              console.log(
                "invalid submission: ",
                boardState[currentRow].toString()
              );
            }
          }

          if (/^[A-Za-z]$/.test(e.key)) {
            target.value = e.key.toUpperCase();
            appendLetterToWord(e.key, rowIndex, squareIndex);
            moveToNextSquare();
          } else {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};
