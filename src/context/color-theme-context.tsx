"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

export type ThemeColor = {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  bgDark: string;
  cardDark: string;
  bgLight: string;
  cardLight: string;
  ambientB: string;
  ambientC: string;
  lightHex?: string;
  lightRgb?: string;
  lightAmbientB?: string;
  lightAmbientC?: string;
};

export const THEME_COLORS: ThemeColor[] = [
  {
    id: "teal",
    name: "Cyber Teal",
    hex: "#19d3b5",
    rgb: "25, 211, 181",
    bgDark: "#060b0e",
    cardDark: "#0c1518",
    bgLight: "#f0faf8",
    cardLight: "#ffffff",
    ambientB: "#0d9488",
    ambientC: "#0284c7",
    lightHex: "#2563eb",
    lightRgb: "37, 99, 235",
    lightAmbientB: "#6366f1",
    lightAmbientC: "#60a5fa",
  },
  {
    id: "violet",
    name: "Electric Violet",
    hex: "#a855f7",
    rgb: "168, 85, 247",
    bgDark: "#0b0614",
    cardDark: "#140d22",
    bgLight: "#faf5ff",
    cardLight: "#ffffff",
    ambientB: "#7c3aed",
    ambientC: "#c084fc",
    lightHex: "#7e22ce",
    lightRgb: "126, 34, 206",
    lightAmbientB: "#6d28d9",
    lightAmbientC: "#a78bfa",
  },
  {
    id: "emerald",
    name: "Matrix Green",
    hex: "#10b981",
    rgb: "16, 185, 129",
    bgDark: "#050e09",
    cardDark: "#0b1a11",
    bgLight: "#f0fdf4",
    cardLight: "#ffffff",
    ambientB: "#059669",
    ambientC: "#34d399",
    lightHex: "#047857",
    lightRgb: "4, 120, 87",
    lightAmbientB: "#047857",
    lightAmbientC: "#34d399",
  },
  {
    id: "cyan",
    name: "Neon Cyan",
    hex: "#06b6d4",
    rgb: "6, 182, 212",
    bgDark: "#040d14",
    cardDark: "#091824",
    bgLight: "#ecfeff",
    cardLight: "#ffffff",
    ambientB: "#0284c7",
    ambientC: "#38bdf8",
    lightHex: "#0e7490",
    lightRgb: "14, 116, 144",
    lightAmbientB: "#0e7490",
    lightAmbientC: "#67e8f9",
  },
  {
    id: "amber",
    name: "Solar Amber",
    hex: "#f59e0b",
    rgb: "245, 158, 11",
    bgDark: "#100b04",
    cardDark: "#1c1409",
    bgLight: "#fffbeb",
    cardLight: "#ffffff",
    ambientB: "#d97706",
    ambientC: "#fbbf24",
    lightHex: "#b45309",
    lightRgb: "180, 83, 9",
    lightAmbientB: "#b45309",
    lightAmbientC: "#fbbf24",
  },
  {
    id: "rose",
    name: "Crimson Red",
    hex: "#f43f5e",
    rgb: "244, 63, 94",
    bgDark: "#120508",
    cardDark: "#1e0a10",
    bgLight: "#fff1f2",
    cardLight: "#ffffff",
    ambientB: "#e11d48",
    ambientC: "#fb7185",
    lightHex: "#be123c",
    lightRgb: "190, 18, 60",
    lightAmbientB: "#be123c",
    lightAmbientC: "#fb7185",
  },
];

interface ColorThemeContextType {
  currentColor: ThemeColor;
  setColor: (color: ThemeColor) => void;
  availableColors: ThemeColor[];
}

const ColorThemeContext = createContext<ColorThemeContextType>({
  currentColor: THEME_COLORS[0],
  setColor: () => {},
  availableColors: THEME_COLORS,
});

/** Dynamically updates the browser tab favicon to reflect the chosen color */
function updateDynamicFavicon(hex: string) {
  if (typeof document === "undefined") return;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${hex}"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.85"/>
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="#080c10"/>
    <path d="M32 7L52 14.5V31C52 43 43 52 32 57C21 52 12 43 12 31V14.5Z" fill="none" stroke="url(#g)" stroke-width="3.5" stroke-linejoin="round"/>
    <g fill="none" stroke="url(#g)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M26 23V43"/>
      <path d="M26 23H33.5A6.5 6.5 0 0 1 33.5 36H26"/>
      <path d="M33.5 36L40 43"/>
    </g>
  </svg>`;

  let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.type = "image/svg+xml";
  link.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentColor, setCurrentColorState] = useState<ThemeColor>(THEME_COLORS[0]);
  const currentColorRef = useRef(THEME_COLORS[0]);

  const applyColor = (color: ThemeColor) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const isLight = root.classList.contains("light");
    const primaryHex = isLight ? color.lightHex ?? color.hex : color.hex;
    const primaryRgb = isLight ? color.lightRgb ?? color.rgb : color.rgb;

    // CSS variables for primary and accent
    root.style.setProperty("--primary", primaryHex);
    root.style.setProperty("--accent", primaryHex);
    root.style.setProperty("--primary-rgb", primaryRgb);

    // CSS variables for ambient background
    root.style.setProperty("--ambient-a", primaryHex);
    root.style.setProperty("--ambient-b", isLight ? color.lightAmbientB ?? color.ambientB : color.ambientB);
    root.style.setProperty("--ambient-c", isLight ? color.lightAmbientC ?? color.ambientC : color.ambientC);

    // Dynamic background and card colors that adapt with color selection
    if (isLight) {
      root.style.setProperty("--background", color.bgLight);
      root.style.setProperty("--card", color.cardLight);
    } else {
      root.style.setProperty("--background", color.bgDark);
      root.style.setProperty("--card", color.cardDark);
    }

    // Update browser tab favicon dynamically
    updateDynamicFavicon(primaryHex);
  };

  useEffect(() => {
    let initialColor = THEME_COLORS[0];
    try {
      const savedId = localStorage.getItem("irncyber-accent-color");
      if (savedId) {
        const found = THEME_COLORS.find((c) => c.id === savedId);
        if (found) {
          initialColor = found;
        }
      }
    } catch {
      // Ignore
    }

    setCurrentColorState(initialColor);
    currentColorRef.current = initialColor;
    applyColor(currentColorRef.current);

    // Watch for class changes on documentElement (e.g. dark/light mode toggle)
    const observer = new MutationObserver(() => {
      applyColor(currentColorRef.current);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const setColor = (color: ThemeColor) => {
    currentColorRef.current = color;
    setCurrentColorState(color);
    applyColor(color);
    try {
      localStorage.setItem("irncyber-accent-color", color.id);
    } catch {
      // Ignore
    }
  };

  return (
    <ColorThemeContext.Provider value={{ currentColor, setColor, availableColors: THEME_COLORS }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  return useContext(ColorThemeContext);
}
