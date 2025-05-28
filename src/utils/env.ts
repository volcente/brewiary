import { createEnv } from "@t3-oss/env-nextjs";
import { railway } from "@t3-oss/env-nextjs/presets-zod";
import { config } from "dotenv";
import { resolve } from "path";
import { cwd } from "process";
import { z } from "zod";

const rootDir = cwd();

// Load precedence for .env.* files goes from the most local one to the most general, ex. ".env.development.local > .env.local > .env.development > .env"

// Load default .env
config();
// Load environment specific .env
config({
  path: resolve(rootDir, `.env.${process.env.NODE_ENV}`),
  override: true,
});
// Load local environemnt
config({ path: resolve(rootDir, `.env.local`), override: true });
// Load local environment specific .env
config({
  path: resolve(rootDir, `.env.${process.env.NODE_ENV}.local`),
  override: true,
});

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1, "DATABASE_URL cannot be empty!"),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  extends: [railway()],
});
