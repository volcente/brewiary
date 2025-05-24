import { promises } from "fs";
import { FileMigrationProvider, Migrator } from "kysely";
import path from "path";

import { db } from "./db";

export const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs: promises,
    path,
    migrationFolder: path.join(
      path.resolve(import.meta.dirname),
      "/migrations"
    ),
  }),
});

export const migrate = async (direction: "up" | "down" | "latest") => {
  const { results, error } =
    direction === "down"
      ? await migrator.migrateDown()
      : direction === "up"
      ? await migrator.migrateUp()
      : await migrator.migrateToLatest();

  if (!(error || results?.length)) {
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
};
