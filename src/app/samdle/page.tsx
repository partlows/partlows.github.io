"use client";

import {
  SamdleContextProvider,
} from "./components/SamdleContext";
import { Game } from "./components/Game";

export default function Page() {
  return (
    <SamdleContextProvider>
      <Game />
    </SamdleContextProvider>
  );
}
