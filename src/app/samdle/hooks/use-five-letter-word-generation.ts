export function useFiveLetterWordGeneration() {
  const wordToGuess = "Brand"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
