export default function CreatePage() {
  return (
    <div className="p-8">
      <article className="container mx-auto h-full">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-6">
          Create New Recipe
        </h1>
        <div className="bg-white dark:bg-stone-800 rounded-lg p-6 shadow-sm">
          <p className="text-stone-600 dark:text-stone-400">
            Create your new brewing recipe here.
          </p>
        </div>
      </article>
    </div>
  );
}
