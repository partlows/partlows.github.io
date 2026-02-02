"use client";

import { SamdleContextProvider } from "./components/SamdleContext";
import { Game } from "./components/Game";
import { useEffect, useState } from "react";
import { useFiveLetterWordGeneration } from "./hooks/use-five-letter-word-generation";
import useLocalStorage from "use-local-storage";
import { GameStateType, PlayStateEnum } from "./types/samdle-types";

export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);
  const { wordToGuess } = useFiveLetterWordGeneration();
  const [gameState, setGameState] = useLocalStorage(
    "gameState",
    {} as GameStateType
  );

  useEffect(() => {
    // temporary gameState wipe until I add backend
    const previousWord = gameState.previousWord;
    if (
      gameState.playState !== PlayStateEnum.PLAYING &&
      previousWord &&
      wordToGuess !== previousWord
    ) {
      setGameState({
        boardState: Array.from({ length: 6 }, () =>
          Array.from({ length: 5 }, () => "")
        ),
        currentRow: 0,
        playState: PlayStateEnum.PLAYING,
        previousWord: previousWord,
      });
    }

    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <SamdleContextProvider gameState={gameState} setGameState={setGameState}>
      <Game />
    </SamdleContextProvider>
  );
}
