export function useFiveLetterWordGeneration() {
  const wordToGuess = "Adieu"; // TODO: replace with api call somewhere
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
