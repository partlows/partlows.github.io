export enum SuitEnum {
    HEART = "HEART",
    DIAMOND = "DIAMOND",
    SPADE = "SPADE",
    CLUB = "CLUB",
};

export type SuitType = keyof typeof SuitEnum;