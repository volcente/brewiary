import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

import { env } from "~/utils/env";

import { DB } from "./types";

const postgresDialect = new PostgresDialect({
  pool: new Pool({
    connectionString: env.DATABASE_URL,
  }),
});

const db = new Kysely<DB>({
  dialect: postgresDialect,
});

export { db };
