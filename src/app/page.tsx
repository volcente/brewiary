export default function Home() {
  return (
    <div className="grid min-h-screen w-full p-8 place-content-center">
      <article className="flex flex-col gap-2">
        <h1 className="text-6xl font-black text-stone-950 dark:text-stone-50">
          Brewiary
        </h1>
        <p className="text-lg text-stone-400 italic dark:text-stone-500">
          Your best coffee recipe companion!
        </p>
      </article>
    </div>
  );
}
