export function useFiveLetterWordGeneration() {
  const wordToGuess = "Probe"; // TODO: replace with api call
  return {
    wordToGuess: wordToGuess.toLocaleUpperCase(),
  };
}
