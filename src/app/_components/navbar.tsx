"use client";

import { LucideCoffee, LucideCompass, LucidePlus } from "lucide-react";

import { NavLink } from "~/components/ui/nav-link";

import { ThemeSwitch } from "./theme-switch";

export function Navbar() {
  return (
    <>
      <nav className="px-8 h-16 bg-white dark:bg-stone-800 shadow-xs rounded-b-lg">
        <div className="container h-full mx-auto flex justify-between items-center gap-8">
          <section className="flex items-center gap-8">
            <div className="flex items-center gap-3 dark:text-stone-50 text-stone-900">
              <LucideCoffee />
              <h1 className="text-2xl font-bold leading-none">Brewiary</h1>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <NavLink href="/discover">Discover</NavLink>
              <NavLink href="/create">Create</NavLink>
            </div>
          </section>

          <ThemeSwitch />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 bg-white dark:bg-stone-800 border border-stone-300/50 dark:border-stone-700/50 rounded-xl shadow">
        <div className="h-16">
          <div className="flex justify-around items-center h-full">
            <NavLink
              href="/discover"
              className="flex flex-col items-center justify-center gap-1 h-16 w-16"
            >
              <LucideCompass className="size-5" />
              <span className="text-xs">Discover</span>
            </NavLink>
            <NavLink
              href="/create"
              className="flex flex-col items-center justify-center gap-1 h-16 w-16"
            >
              <LucidePlus className="size-5" />
              <span className="text-xs">Create</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
