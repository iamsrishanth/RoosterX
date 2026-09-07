"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span" | "article";
}) {
  const Comp = as as any;
  return <Comp className={className}>{children}</Comp>;
}

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display text-[#FF5722] uppercase tracking-[0.18em] text-[1.05rem] leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
