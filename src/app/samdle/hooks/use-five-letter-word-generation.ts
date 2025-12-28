export function useFiveLetterWordGeneration() {
  const wordToGuess = "Whale"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
