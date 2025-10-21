"use client";

import { useStackApp, useUser } from "@stackframe/stack";
import Link from "next/link";

export const LoginHandler: React.FC = () => {
  const user = useUser();
  const app = useStackApp();

  return user ? (
    <Link href={app.urls.signOut}>Sign out</Link>
  ) : (
    <Link href={app.urls.signIn}>Sign in</Link>
  );
};
