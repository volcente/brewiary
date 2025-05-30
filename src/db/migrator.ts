import { promises as fs } from "fs";
import { FileMigrationProvider, Migrator } from "kysely";
import path, { join } from "path";

import { db } from "./db";

const rootDir = process.cwd();
const migrationFolder = join(rootDir, "/src/db/migrations");

export const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder,
  }),
});

export const migrate = async (direction: "up" | "down" | "latest") => {
  const { results, error } =
    direction === "down"
      ? await migrator.migrateDown()
      : direction === "up"
      ? await migrator.migrateUp()
      : await migrator.migrateToLatest();

  if (!error && !results?.length) {
    console.log("No migrations executed.");
    process.exit(0);
  }

  results?.forEach((migrationResult) => {
    if (migrationResult.status === "Error") {
      console.error(
        `✕ Failed to exectue migration: "${migrationResult.migrationName}."`
      );
    } else {
      console.log(
        `✓ ${migrationResult.migrationName} was successfully migrated up.`
      );
    }
  });

  if (error) {
    console.error("Failed to migrate.");
    console.error(error);
    process.exit(1);
  }

  await db.destroy();
  process.exit(0);
};
