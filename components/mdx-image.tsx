"use client";

import { useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type MdxImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function MdxImage({ className, alt = "", ...props }: MdxImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="relative block overflow-hidden rounded-lg border">
      {!loaded ? <span className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" /> : null}
      <img
        {...props}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn("h-auto w-full transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0", className)}
      />
    </span>
  );
}
