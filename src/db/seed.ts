import { faker, SexType } from "@faker-js/faker";
import { sql } from "kysely";

import { db } from "./db";

faker.seed(13);

const seedPersonTable = async () => {
  const persons = [...Array(10)];
  await Promise.all(
    persons.map(() => {
      const id = faker.string.uuid();
      const gender = faker.person.sex() as SexType;
      const firstName = faker.person.firstName(gender);
      const lastName = faker.person.lastName(gender);

      return db
        .insertInto("person")
        .values({
          firstName,
          id,
          lastName,
          gender,
          createdAt: sql<Date>`now()`,
        })
        .onConflict((oc) =>
          oc.column("id").doUpdateSet({
            firstName,
            lastName,
            gender,
            updatedAt: sql<Date>`now()`,
          })
        )
        .execute();
    })
  );
  console.log("Person Table seeding successfully seeded!");
};

const seedPetTable = async () => {
  const persons = await db
    .selectFrom("person")
    .select("id")
    .clearLimit()
    .execute();
  if (!persons.length) {
    throw Error("Person Table has no records. Seeding aborted.");
  }

  const MIN_ANIMAL_COUNT = 1;
  const MAX_ANIMAL_COUNT = 4;

  await Promise.all(
    persons.map(async ({ id: ownerId }) => {
      const petNumber = faker.number.int({
        min: MIN_ANIMAL_COUNT,
        max: MAX_ANIMAL_COUNT,
      });
      const petsToInsert = [...Array(petNumber)].map(() => {});

      if (petsToInsert.length === 0) {
        return Promise.resolve();
      }

      return db
        .insertInto("pet")
        .values(
          petsToInsert.map(() => {
            const id = faker.string.uuid();
            const name = faker.animal.petName();
            const species = faker.animal.type();
            return {
              id,
              name,
              species,
              ownerId,
            };
          })
        )
        .onConflict((cb) =>
          cb.column("id").doUpdateSet(({ eb }) => ({
            name: eb.ref("excluded.name"),
            species: eb.ref("excluded.species"),
            updatedAt: sql<Date>`now()`,
          }))
        )
        .execute();
    })
  );
  console.log("Pet Table successfully seeded!");
};

const seed = async () => {
  try {
    await seedPersonTable();
  } catch (error) {
    console.error(error);
  }

  try {
    await seedPetTable();
  } catch (error) {
    console.error(error);
  }

  return await db.destroy();
};

seed();
