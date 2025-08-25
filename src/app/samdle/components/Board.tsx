"use client";

import { WordRow } from "./WordRow";
import styles from "./Board.module.scss";
import { useSamdleContext } from "./SamdleContext";

export const Board: React.FC = () => {
  const { MAX_ROWS } = useSamdleContext();
  return (
    <div className={styles["board-wrapper"]}>
      {Array.from({ length: MAX_ROWS }, (_, index) => (
        <WordRow key={index} rowIndex={index} />
      ))}
    </div>
  );
};
