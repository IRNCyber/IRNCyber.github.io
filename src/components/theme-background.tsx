"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    THREE?: unknown;
    VANTA?: {
      GLOBE?: (options: Record<string, unknown>) => { destroy?: () => void };
    };
  }
}

let threeScriptPromise: Promise<void> | null = null;
let vantaScriptPromise: Promise<void> | null = null;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if ((existing as HTMLScriptElement).dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.loaded = "false";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

async function ensureVantaScripts() {
  if (!threeScriptPromise) {
    threeScriptPromise = loadScript(
      "https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js"
    );
  }
  await threeScriptPromise;

  if (!vantaScriptPromise) {
    vantaScriptPromise = loadScript(
      "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.globe.min.js"
    );
  }
  await vantaScriptPromise;
}

export default function ThemeBackground() {
  const { resolvedTheme } = useTheme();
  const lightRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<{ destroy?: () => void } | null>(null);

  useEffect(() => {
    if (resolvedTheme !== "light") {
      effectRef.current?.destroy?.();
      effectRef.current = null;
      return;
    }

    let cancelled = false;

    ensureVantaScripts()
      .then(() => {
        if (cancelled || !lightRef.current || !window.VANTA?.GLOBE) {
          return;
        }

        effectRef.current?.destroy?.();
        effectRef.current = window.VANTA.GLOBE({
          el: lightRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          backgroundColor: 0xf6f8fb,
          color: 0x1f8f70,
          color2: 0x7fb8ff,
          size: 0.85,
        });
      })
      .catch(() => {
        effectRef.current = null;
      });

    return () => {
      cancelled = true;
      effectRef.current?.destroy?.();
      effectRef.current = null;
    };
  }, [resolvedTheme]);

  return (
    <>
      <div
        ref={lightRef}
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
