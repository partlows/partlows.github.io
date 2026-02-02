export type PlayStateType = "PLAYING" | "WON" | "LOST";

export enum PlayStateEnum {
  PLAYING = "PLAYING",
  WON = "WON",
  LOST = "LOST",
}

export type GameStateType = {
  boardState: string[][];
  currentRow: number;
  playState: PlayStateType;
  previousWord: string | undefined; // temporary solution for clearing game state when word gets updated until I add backend (will only be populated on game completion)
};
