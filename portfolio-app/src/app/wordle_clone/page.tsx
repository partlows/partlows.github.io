"use client";

import {
  WordleContextProvider,
} from "./components/WordleContext";
import { Game } from "./components/Game";

export default function Page() {
  return (
    <WordleContextProvider>
      <Game />
    </WordleContextProvider>
  );
}
