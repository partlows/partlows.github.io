export function useFiveLetterWordGeneration() {
  const wordToGuess = "Pesto"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
