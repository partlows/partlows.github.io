"use client";

import { WordRow } from "./WordRow";
import styles from "./Board.module.scss";
import { useWordleContext } from "./WordleContext";

export const Board: React.FC = () => {
  const { MAX_ROWS  } = useWordleContext();
  return (
    <div className={styles["board-wrapper"]}>
      {Array.from({ length: MAX_ROWS }, (_, index) => (
        <WordRow key={index} rowIndex={index}/>
      ))}
    </div>
  );
};
