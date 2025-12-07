export function useFiveLetterWordGeneration() {
  const wordToGuess = "Pitch"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
