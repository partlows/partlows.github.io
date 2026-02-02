export function useFiveLetterWordGeneration() {
  const wordToGuess = "Nacho"; // TODO: replace with api cal
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
