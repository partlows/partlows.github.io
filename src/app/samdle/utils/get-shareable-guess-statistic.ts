import { calculateLetterStates } from "./letter-validation";

export function getShareableGuessStatistic(
  boardState: string[][],
  targetWord: string
): string {
  const letterStates = boardState.forEach((currRow) => {
    const letterStates = calculateLetterStates(
      currRow.join("").toUpperCase(),
      targetWord
    );
  }, "");

  return "";
}
