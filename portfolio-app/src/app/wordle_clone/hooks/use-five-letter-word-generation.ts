export function useFiveLetterWordGeneration() {
  const wordToGuess = "Adieu"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
