import { useTheme as useNextTheme } from "next-themes";

export type Theme = "system" | "light" | "dark";
export type Themes = Theme[];

export function useTheme() {
  const { setTheme, theme, themes } = useNextTheme();

  return {
    setTheme,
    theme: (theme ?? "system") as Theme,
    themes: themes as Themes,
  };
}
