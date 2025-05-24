import { db } from "./db";
import { migrator } from "./migrator";

const migrateDown = async () => {
  const { results, error } = await migrator.migrateDown();

  if (!results?.length) {
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
        `✓ ${migrationResult.migrationName} was successfully migrated down.`
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

migrateDown();
