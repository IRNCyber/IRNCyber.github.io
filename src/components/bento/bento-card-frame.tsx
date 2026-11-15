"use client";

import React, { useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface BentoCardFrameProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
  label?: string;
  title?: string;
  titleClassName?: string;
  headerAction?: React.ReactNode;
  noHeader?: boolean;
  id?: string;
}

export function BentoCardFrame({
  children,
  className,
  icon: Icon,
  label,
  title,
  titleClassName,
  headerAction,
  noHeader = false,
  id,
}: BentoCardFrameProps) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <article
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0e1218] dark:bg-[#0e1218] p-5",
        "border border-white/[0.08] transition-all duration-300",
        "hover:border-[var(--primary)]/50 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(var(--primary-rgb,25,211,181),0.2)]",
        className
      )}
    >
      {/* Interactive cursor spotlight glow with dynamic theme color */}
      {mousePos && !shouldReduceMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(360px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb, 25, 211, 181), 0.14), transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Card Header (Icon + Tiny Label + Bold Centered Title) */}
      {!noHeader && (label || title) && (
        <header className="relative z-10 flex flex-col items-center justify-center text-center mb-4">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--primary)] mb-1">
            {Icon && <Icon className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0" />}
            {label && (
              <span className="uppercase tracking-widest text-[11px] text-zinc-400 font-medium">
                {label}
              </span>
            )}
          </div>
          {title && (
            <h3 className={cn("text-base font-bold text-white tracking-tight font-sans", titleClassName)}>
              {title}
            </h3>
          )}
          {headerAction && <div className="mt-1">{headerAction}</div>}
        </header>
      )}

      {/* Card Body */}
      <div className="relative z-10 flex-1 flex flex-col">{children}</div>
    </article>
  );
}
