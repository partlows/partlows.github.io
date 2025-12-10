export function useFiveLetterWordGeneration() {
  const wordToGuess = "Cruel"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
