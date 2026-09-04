export function useFiveLetterWordGeneration() {
  const wordToGuess = "Toast"; // TODO: replace with api cal
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
