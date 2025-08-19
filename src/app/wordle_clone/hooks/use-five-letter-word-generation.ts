export function useFiveLetterWordGeneration() {
  const wordToGuess = "Prank"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
