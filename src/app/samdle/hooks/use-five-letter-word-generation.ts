export function useFiveLetterWordGeneration() {
  const wordToGuess = "Scope"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
