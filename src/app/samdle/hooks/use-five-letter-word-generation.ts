export function useFiveLetterWordGeneration() {
  const wordToGuess = "Nacho"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
