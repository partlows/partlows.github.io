export function useFiveLetterWordGeneration() {
  const wordToGuess = "Heist"; // TODO: replace with api cal
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
