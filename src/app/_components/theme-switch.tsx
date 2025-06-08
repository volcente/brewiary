"use client";

import { LucideMonitor, LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="theme-switch">
          {resolvedTheme === "dark" ? <LucideSun /> : <LucideMoon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <LucideMonitor className="mr-2 size-4" />
          <span>System</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <LucideSun className="mr-2 size-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <LucideMoon className="mr-2 size-4" />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
