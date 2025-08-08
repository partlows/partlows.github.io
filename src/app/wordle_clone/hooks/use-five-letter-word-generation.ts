export function useFiveLetterWordGeneration() {
  const wordToGuess = "Brine"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
