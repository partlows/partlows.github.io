export function useFiveLetterWordGeneration() {
  const wordToGuess = "Inked"; // TODO: replace with api cal
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
