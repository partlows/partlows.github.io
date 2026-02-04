import { createNeonAuth } from "@neondatabase/neon-js/auth/next/server";

export const auth = createNeonAuth({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  cookies: {
    secret: ""
  }
});
