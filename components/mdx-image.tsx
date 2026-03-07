"use client";

import { useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { toNetlifyImageCdn } from "@/lib/netlify-image-cdn";

type MdxImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function MdxImage({ className, alt = "", ...props }: MdxImageProps) {
  const [loaded, setLoaded] = useState(false);
  const src = typeof props.src === "string" ? toNetlifyImageCdn(props.src) : props.src;

  return (
    <span className="relative block overflow-hidden rounded-lg border">
      {!loaded ? <span className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" /> : null}
      <img
        {...props}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn("h-auto w-full transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0", className)}
      />
    </span>
  );
}
