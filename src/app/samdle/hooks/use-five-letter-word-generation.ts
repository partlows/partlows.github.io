export function useFiveLetterWordGeneration() {
  const wordToGuess = "Yacht"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
