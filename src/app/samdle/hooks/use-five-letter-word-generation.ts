export function useFiveLetterWordGeneration() {
  const wordToGuess = "Truss"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
