export function useFiveLetterWordGeneration() {
  const wordToGuess = "Niche"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
