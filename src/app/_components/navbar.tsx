"use client";

import { LucideCoffee } from "lucide-react";

import { NavLink } from "~/components/ui/nav-link";

import { ThemeSwitch } from "./theme-switch";

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-stone-800 dark:border-stone-700/50 border-b border-stone-300/50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center gap-8">
        <section className="flex items-center gap-8">
          <div className="flex items-center gap-3 dark:text-stone-50 text-stone-900">
            <LucideCoffee />
            <h1 className="text-2xl font-bold leading-none">Brewiary</h1>
          </div>

          <div className="flex items-center gap-6">
            <NavLink href="/discover">Discover</NavLink>
            <NavLink href="/create">Create</NavLink>
          </div>
        </section>

        <section>
          <ThemeSwitch />
        </section>
      </div>
    </nav>
  );
}
