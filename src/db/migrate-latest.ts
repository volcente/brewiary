import { db } from "./db";
import { migrator } from "./migrator";

const migrateLatest = async () => {
  const { results, error } = await migrator.migrateToLatest();

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
        `✓ ${migrationResult.migrationName} was successfull migrated up.`
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

migrateLatest();
