export function useFiveLetterWordGeneration() {
  const wordToGuess = "Thank"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
