import { createEnv } from "@t3-oss/env-nextjs";
import { railway } from "@t3-oss/env-nextjs/presets-zod";
import { config } from "dotenv";
import path from "path";
import { cwd } from "process";
import { z } from "zod";

config({
  path:
    process.env.ENV === "DEV"
      ? path.resolve(cwd(), ".env.dev")
      : path.resolve(cwd(), ".env"),
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
