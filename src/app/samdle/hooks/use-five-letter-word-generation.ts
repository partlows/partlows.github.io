export function useFiveLetterWordGeneration() {
  const wordToGuess = "Mount"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
