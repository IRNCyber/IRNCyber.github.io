"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useColorTheme } from "@/context/color-theme-context";

interface WebIconProps {
  className?: string;
}

export function WebIcon({ className = "w-7 h-7" }: WebIconProps) {
  const { currentColor } = useColorTheme();
  const { resolvedTheme } = useTheme();
  const hex = resolvedTheme === "light"
    ? currentColor?.lightHex || currentColor?.hex || "#2563eb"
    : currentColor?.hex || "#19d3b5";
  const gradId = `web-icon-grad-${currentColor?.id || "default"}`;
  const filterId = `web-icon-glow-${currentColor?.id || "default"}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={hex} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
        </linearGradient>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={hex} floodOpacity="0.55" />
        </filter>
      </defs>
      {/* Background container with rounded corners and themed stroke */}
      <rect
        width="64"
        height="64"
        rx="14"
        fill="#0b0f14"
        stroke={hex}
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
      {/* Cyber shield outline that changes color */}
      <path
        d="M32 7L52 14.5V31C52 43 43 52 32 57C21 52 12 43 12 31V14.5Z"
        stroke={`url(#${gradId})`}
        strokeWidth="3.5"
        strokeLinejoin="round"
        filter={`url(#${filterId})`}
      />
      {/* Stylized R Glyph */}
      <g
        stroke={`url(#${gradId})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M26 23V43" />
        <path d="M26 23H33.5A6.5 6.5 0 0 1 33.5 36H26" />
        <path d="M33.5 36L40 43" />
      </g>
    </svg>
  );
}
