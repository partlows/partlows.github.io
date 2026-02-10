import { ReactNode } from "react";
import styles from "./PlayingCard.module.scss";
import { SuitType } from "../types/solitaire-types";

type PlayingCardType = {
    // suit, value, bodyImage
    suit: SuitType;
    value: number;
    bodyImage?: ReactNode;
};

export const PlayingCard: React.FC<PlayingCardType> = ({
    suit,
    value,
}) => {
  return <div className={styles["playing-card-outer"]} draggable={true}>
    <div className={styles["playing-card-inner"]}>
        
    </div>
  </div>;
};
