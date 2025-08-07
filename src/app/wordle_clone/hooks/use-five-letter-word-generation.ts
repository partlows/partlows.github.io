export function useFiveLetterWordGeneration() {
  const wordToGuess = "Point"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
