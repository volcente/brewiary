import fs from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

const rootDir = cwd();

const migrationTemplate = `
import { Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {}

export async function down(db: Kysely<unknown>): Promise<void> {}
`;

try {
  const filename = `${new Date().toISOString()}.ts`;
  const filepath = join(rootDir, "/src/db/migrations", filename);
  fs.writeFileSync(filepath, migrationTemplate);
  console.log(`Migration: ${filename} successfully created.`);
} catch (err) {
  console.error(err);
}
