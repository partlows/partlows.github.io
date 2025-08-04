// TODO: Potentially delete this if not necessary
export function useWordValidation() {
  // TODO: import word library
  const guessFormatter = (guessAttempt: string[]) => {
    return guessAttempt.join("");
  };
  const isLetterInWord = (letter: string, wordToGuess: string) => {
    return wordToGuess.includes(letter.toLocaleUpperCase()) ? true : false;
  };
  const isLetterInRightSpot = (
    letter: string,
    letterIndex: number,
    wordToGuess: string
  ) => {
    return wordToGuess.charAt(letterIndex) === letter.toLocaleUpperCase()
      ? true
      : false;
  };

  return {
    guessFormatter,
    isLetterInWord,
    isLetterInRightSpot,
  };
}
