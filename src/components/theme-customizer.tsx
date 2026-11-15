"use client";

import React, { useState, useRef, useEffect } from "react";
import { Palette, Moon, Sun, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { useColorTheme, type ThemeColor } from "@/context/color-theme-context";

export function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const { currentColor, setColor, availableColors } = useColorTheme();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative" ref={menuRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Customize theme and accent colors"
        title="Customize theme & colors"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141922] border border-white/[0.08] hover:border-[var(--primary)] text-zinc-300 hover:text-white transition-all text-xs font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]"
      >
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-200"
          style={{ backgroundColor: currentColor.hex }}
        />
        <Palette className="w-3.5 h-3.5 text-zinc-400" />
      </button>

      {/* Popover Menu */}
      {open && (
        <div
          role="dialog"
          aria-label="Theme & Color Settings"
          className="absolute right-0 top-full mt-2 w-56 p-3 rounded-2xl bg-[#0e1218] border border-white/[0.1] shadow-2xl shadow-black/80 z-50 animate-fade-in"
        >
          {/* Accent Color Section */}
          <div className="mb-3">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
              Accent Color
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {availableColors.map((col) => {
                const isActive = currentColor.id === col.id;
                return (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => {
                      setColor(col);
                    }}
                    className={`flex items-center gap-1.5 p-1.5 rounded-lg border text-left transition-all ${
                      isActive
                        ? "border-[var(--primary)] bg-white/[0.06] shadow-sm"
                        : "border-white/[0.06] hover:border-white/[0.2] bg-[#141922]"
                    }`}
                    title={col.name}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: col.hex }}
                    >
                      {isActive && <Check className="w-2.5 h-2.5 text-black stroke-[3]" />}
                    </span>
                    <span className="text-[10px] text-zinc-300 font-sans truncate">
                      {col.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Mode Section */}
          <div className="pt-2.5 border-t border-white/[0.06]">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
              Theme Mode
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium border transition-colors ${
                  isDark
                    ? "bg-[var(--primary)]/15 border-[var(--primary)] text-[var(--primary)]"
                    : "bg-[#141922] border-white/[0.06] text-zinc-400 hover:text-white"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Dark</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium border transition-colors ${
                  !isDark
                    ? "bg-[var(--primary)]/15 border-[var(--primary)] text-[var(--primary)]"
                    : "bg-[#141922] border-white/[0.06] text-zinc-400 hover:text-white"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Light</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
