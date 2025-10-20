export function useFiveLetterWordGeneration() {
  const wordToGuess = "Quart"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
