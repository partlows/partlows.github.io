export function useFiveLetterWordGeneration() {
  const wordToGuess = "Plumb"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
