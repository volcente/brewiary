import { db } from "~/db/db";

export default async function Home() {
  const data = await db
    .selectFrom("person")
    .select(["firstName", "lastName", "gender"])
    .execute();

  return (
    <div className="grid min-h-screen w-full p-8 place-content-center">
      <article className="flex flex-col gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-6xl font-black text-stone-950 dark:text-stone-50">
            Brewiary
          </h1>
          <p className="text-lg text-stone-400 italic dark:text-stone-500">
            Your best coffee recipe companion!
          </p>
        </header>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-stone-900 dark:text-stone-100 font-semibold">
            Some Person Data
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {data.map(({ firstName, gender, lastName }) => (
              <li
                className="flex items-baseline gap-8 justify-between"
                key={`${firstName}-${gender}-${lastName}`}
              >
                <span>
                  {firstName} {lastName}
                </span>

                <span
                  className={`text-xs font-light ${
                    gender.toLowerCase() === "male"
                      ? "text-blue-600 dark:text-blue-300"
                      : "text-pink-600 dark:text-pink-300"
                  }`}
                >
                  ({gender})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
