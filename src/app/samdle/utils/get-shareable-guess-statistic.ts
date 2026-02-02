import { PlayStateEnum } from "../types/samdle-types";
import { calculateLetterStates } from "./letter-validation";

export function getShareableGuessStatistic(
  boardState: string[][],
  targetWord: string,
  gameState: string
): string {
  const numberOfGuesses = gameState === PlayStateEnum.WON ? boardState.reduce((acc, curr) => {
    if (curr[0] === "") {
      return acc;
    } else {
      return acc + 1;
    }
  }, 0) : "X";

  let shareableGuessStatistic = `${numberOfGuesses}/6\n`;
  boardState.forEach((currRow) => {
    if (currRow[0] === "") return;

    const letterStates = calculateLetterStates(
      currRow.join("").toUpperCase(),
      targetWord
    );
    letterStates.forEach((state) => {
      switch (state) {
        case "guessed-correctly-right-space":
          shareableGuessStatistic += "🟩";
          break;
        case "guessed-correctly-wrong-space":
          shareableGuessStatistic += "🟨";
          break;
        case "guessed-incorrectly":
          shareableGuessStatistic += "⬛";
          break;
        default:
      }
    });
    shareableGuessStatistic += "\n";
  });

  return shareableGuessStatistic;
}
