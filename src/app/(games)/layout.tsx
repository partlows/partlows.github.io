import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";
import { Header } from "./Header";

export const metadata: Metadata = {
  title: "Games",
  description: "Games section",
};

export default function GamesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <StackProvider app={stackServerApp}>
      <header>
        <Header />
      </header>
      <StackTheme>{children}</StackTheme>
    </StackProvider>
  );
}
