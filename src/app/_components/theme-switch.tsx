"use client";

import { LucideMonitor, LucideMoon, LucideSun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useTheme } from "~/hooks/useTheme";

const themeIcons = {
  system: <LucideMonitor />,
  light: <LucideSun />,
  dark: <LucideMoon />,
} as const;

export function ThemeSwitch() {
  const { setTheme, theme, themes } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="size-9 sm:w-auto sm:h-9"
          variant="outline"
          aria-label="theme-switch"
        >
          <span className="hidden sm:inline-block capitalize">{theme}</span>
          {themeIcons[theme]}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {themeIcons[theme]}
            <span className="capitalize">{theme}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
