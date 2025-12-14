export function useFiveLetterWordGeneration() {
  const wordToGuess = "Whisk"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
