"use client";

import { useTheme } from "next-themes";

/**
 * A local, CSS-driven background. Keeping this independent of a third-party
 * script means it is visible immediately and still works offline or when a
 * content blocker prevents external CDN requests.
 */
export default function ThemeBackground() {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <div
        aria-hidden
        className={`theme-background theme-background--light ${
          resolvedTheme === "light" ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        aria-hidden
        className={`theme-background theme-background--dark ${
          resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
