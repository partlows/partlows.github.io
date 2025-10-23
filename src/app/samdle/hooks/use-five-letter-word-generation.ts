export function useFiveLetterWordGeneration() {
  const wordToGuess = "Scrap"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
