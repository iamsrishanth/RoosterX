"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Common = {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-8 py-4 text-base",
} as const;

function focusRing() {
  return "outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 focus-visible:ring-offset-smoke";
}

/* Primary flame button (white label) */
export const FlameButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Common & {
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    disabled?: boolean;
    target?: string;
    rel?: string;
  }
>(function FlameButton(
  { className, children, size = "md", href, onClick, type = "button", disabled, target, rel },
  ref,
) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full bg-flame font-bold text-white",
    "transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "hover:bg-flame-deep hover:-translate-y-[3px] hover:glow-soft",
    "active:translate-y-0 active:scale-[0.98]",
    "disabled:opacity-50 disabled:pointer-events-none",
    sizeMap[size],
    focusRing(),
    className,
  );
  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        prefetch={false}
        onClick={onClick}
        className={cls}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
    >
      {children}
    </button>
  );
});

/* Ghost char button (cream label) */
export const GhostButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Common & {
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    disabled?: boolean;
    target?: string;
    rel?: string;
  }
>(function GhostButton(
  { className, children, size = "md", href, onClick, type = "button", disabled, target, rel },
  ref,
) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full bg-char font-bold text-cream",
    "border border-cream/15 transition-[transform,box-shadow,background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "hover:bg-[#33220f] hover:border-cream/30 hover:-translate-y-[3px] hover:glow-soft",
    "active:translate-y-0 active:scale-[0.98]",
    "disabled:opacity-50 disabled:pointer-events-none",
    sizeMap[size],
    focusRing(),
    className,
  );
  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        prefetch={false}
        onClick={onClick}
        className={cls}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
    >
      {children}
    </button>
  );
});
