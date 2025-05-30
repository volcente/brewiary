import { createEnv } from "@t3-oss/env-nextjs";
import { railway } from "@t3-oss/env-nextjs/presets-zod";
import { config } from "dotenv";
import { resolve } from "path";
import { cwd } from "process";
import { z } from "zod";

const rootDir = cwd();

config({
  path: resolve(rootDir, ".env"),
  override: true,
});
config({
  path: resolve(rootDir, `.env.${process.env.NODE_ENV}`),
  override: true,
});
config({
  path: resolve(rootDir, `.env.local`),
  override: true,
});
config({
  path: resolve(rootDir, `.env.${process.env.NODE_ENV}.local`),
  override: true,
});

export const env = createEnv({
  skipValidation: process.env.SKIP_VALIDATION === "true",
  server: {
    DATABASE_URL: z.string().min(1, "DATABASE_URL cannot be empty!"),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  extends: [railway()],
});
