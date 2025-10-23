export function calculateLetterStates(
  guessedWord: string,
  targetWord: string
): (string | undefined)[] {
  const result: (string | undefined)[] = new Array(5).fill(undefined);

  const targetLetterCounts: { [key: string]: number } = {};
  for (const letter of targetWord) {
    targetLetterCounts[letter] = (targetLetterCounts[letter] || 0) + 1;
  }

  for (let i = 0; i < 5; i++) {
    if (guessedWord[i] && targetWord[i] === guessedWord[i]) {
      result[i] = "--guessed-correctly-right-space";
    }
  }

  const usedLetterCounts: { [key: string]: number } = {};

  for (let i = 0; i < 5; i++) {
    const letter = guessedWord[i];

    if (!letter || result[i]) continue;

    if (!usedLetterCounts[letter]) {
      usedLetterCounts[letter] = 0;
    }

    if (!targetWord.includes(letter)) {
      result[i] = "--guessed-incorrectly";
      continue;
    }

    const correctCount = guessedWord
      .split("")
      .filter(
        (l, idx) =>
          l === letter && result[idx] === "--guessed-correctly-right-space"
      ).length;
    const availableSlots = (targetLetterCounts[letter] || 0) - correctCount;

    if (usedLetterCounts[letter] < availableSlots) {
      result[i] = "--guessed-correctly-wrong-space";
      usedLetterCounts[letter]++;
    } else {
      result[i] = "--guessed-incorrectly";
    }
  }

  return result;
}
