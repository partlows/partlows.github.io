import { calculateLetterStates } from "./letter-validation";

export function getShareableGuessStatistic(
  boardState: string[][],
  targetWord: string
): string {
  const numberOfGuesses = boardState.reduce((acc, curr) => {
    if (curr[0] === "") {
      return acc;
    } else {
      return acc + 1;
    }
  }, 0);

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
          return (shareableGuessStatistic += "🟩");
        case "guessed-correctly-wrong-space":
          return (shareableGuessStatistic += "🟨");
        case "guessed-incorrectly":
          return (shareableGuessStatistic += "⬛");
        default:
      }
    });
    shareableGuessStatistic += "\n";
  });

  return shareableGuessStatistic;
}
