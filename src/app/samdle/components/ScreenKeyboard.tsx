"use client";

import { KeyboardRow } from "./KeyboardRow";
import styles from "./ScreenKeyboard.module.scss";
import { useSamdleContext } from "./SamdleContext";
import {
  calculateLetterStates,
  getStatePriority,
  mergeLetterState,
} from "../utils/letter-validation";
import { useMemo } from "react";

export const ScreenKeyboard = () => {
  const {
    handleBackspace,
    handleEnter,
    handleKeyPress,
    isGameOver,
    boardState,
    wordToGuess,
    currentRow,
  } = useSamdleContext();

  const KEYBOARD_LAYOUT = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BKSP"],
  ];

  const keyboardLetterStates = useMemo(() => {
    const states: Record<string, string | undefined> = {};

    for (let rowIndex = 0; rowIndex < currentRow; rowIndex++) {
      const guessedWord = boardState[rowIndex].join("").toUpperCase();

      if (guessedWord.length !== 5) continue;

      const positionStates = calculateLetterStates(guessedWord, wordToGuess);

      const letterStateMap: Record<string, string | undefined> = {};
      guessedWord.split("").forEach((letter, pos) => {
        const state = positionStates[pos];
        if (
          !letterStateMap[letter] ||
          getStatePriority(state) > getStatePriority(letterStateMap[letter])
        ) {
          letterStateMap[letter] = state;
        }
      });

      Object.entries(letterStateMap).forEach(([letter, state]) => {
        states[letter] = mergeLetterState(states[letter], state);
      });
    }

    return states;
  }, [boardState, wordToGuess, currentRow]);

  const handleKeyClick = (key: string) => {
    if (key === "ENTER") {
      handleEnter();
    } else if (key === "BKSP") {
      handleBackspace();
    } else {
      handleKeyPress(key);
    }
  };

  return (
    <div className={styles["screen-keyboard-wrapper"]}>
      {KEYBOARD_LAYOUT.map((row, i) => {
        return (
          <KeyboardRow
            disableKeys={isGameOver}
            key={i}
            keyContent={row}
            handleKeyClick={handleKeyClick}
            letterStates={keyboardLetterStates}
          />
        );
      })}
    </div>
  );
};
