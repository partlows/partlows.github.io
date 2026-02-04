import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in the .env file');
}

export default defineConfig({
  schema: './src/schema.ts', // Your schema file path
  out: './drizzle', // Your migrations folder
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
});