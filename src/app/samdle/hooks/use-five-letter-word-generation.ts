export function useFiveLetterWordGeneration() {
  const wordToGuess = "Halve"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
