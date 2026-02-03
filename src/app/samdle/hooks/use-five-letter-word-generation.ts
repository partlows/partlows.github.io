export function useFiveLetterWordGeneration() {
  const wordToGuess = "Owned"; // TODO: replace with api cal
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
