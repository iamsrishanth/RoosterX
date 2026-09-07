import * as React from "react";
import { Star, Sparkle, ChefHat, Tag } from "@phosphor-icons/react/dist/ssr";
import type { ItemBadge } from "@/data/site";
import { cn } from "@/lib/utils";

const MAP: Record<
  ItemBadge,
  { label: string; icon: typeof Star; cls: string }
> = {
  popular: {
    label: "Popular",
    icon: Star,
    cls: "bg-flame/15 text-flame border-flame/30",
  },
  new: {
    label: "New",
    icon: Sparkle,
    cls: "bg-gold/15 text-gold border-gold/30",
  },
  chef: {
    label: "Chef's pick",
    icon: ChefHat,
    cls: "bg-gold/15 text-gold border-gold/30",
  },
  value: {
    label: "Value",
    icon: Tag,
    cls: "bg-veg/15 text-veg border-veg/30",
  },
};

export function ItemBadgeTag({
  badge,
  className,
}: {
  badge: ItemBadge;
  className?: string;
}) {
  const m = MAP[badge];
  const Icon = m.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
        m.cls,
        className,
      )}
    >
      <Icon size={10} weight="fill" />
      {m.label}
    </span>
  );
}
