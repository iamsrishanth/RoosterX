"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "@phosphor-icons/react/dist/ssr";

const EASE = [0.16, 1, 0.3, 1] as const;

export type GalleryImage = { src: string; alt: string; caption?: string };

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = React.useState<number | null>(null);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative aspect-square overflow-hidden rounded-[14px] hairline focus:outline-none focus-visible:ring-2 focus-visible:ring-flame"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
            />
            {img.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-smoke/90 to-transparent px-3 py-2 text-left text-xs text-cream">
                {img.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-smoke/95 p-4 backdrop-blur-sm"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close viewer"
              className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-char text-cream hairline hover:bg-[#33220f] transition-colors"
            >
              <X size={24} weight="bold" />
            </button>
            <motion.div
              className="relative max-h-[85vh] max-w-4xl"
              initial={reduce ? undefined : { scale: 0.96, opacity: 0 }}
              animate={reduce ? undefined : { scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                <Image
                  src={images[open].src}
                  alt={images[open].alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              {images[open].caption && (
                <p className="mt-3 text-center text-cream/80 text-sm">{images[open].caption}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
