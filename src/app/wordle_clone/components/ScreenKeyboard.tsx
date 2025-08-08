"use client";

import { KeyboardRow } from "./KeyboardRow";
import styles from "./ScreenKeyboard.module.scss";
import { useWordleContext } from "./WordleContext";

export const ScreenKeyboard = () => {
  const {
    handleBackspace,
    handleEnter,
    handleKeyPress,
    isGameOver,
  } = useWordleContext();

  const KEYBOARD_LAYOUT = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BKSP"],
  ];

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
          />
        );
      })}
    </div>
  );
};
