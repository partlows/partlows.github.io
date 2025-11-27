export function useFiveLetterWordGeneration() {
  const wordToGuess = "Gravy"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
