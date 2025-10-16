export function useFiveLetterWordGeneration() {
  const wordToGuess = "Pride"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
