"use client";

import { useState } from "react";
import type { ImgHTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toNetlifyImageCdn } from "@/lib/netlify-image-cdn";

type MdxImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function MdxImage({ className, alt = "", ...props }: MdxImageProps) {
  const [loaded, setLoaded] = useState(false);
  const src = typeof props.src === "string" ? toNetlifyImageCdn(props.src) : props.src;
  const width =
    typeof props.width === "number"
      ? props.width
      : typeof props.width === "string"
        ? Number.parseInt(props.width, 10)
        : 1600;
  const height =
    typeof props.height === "number"
      ? props.height
      : typeof props.height === "string"
        ? Number.parseInt(props.height, 10)
        : 900;
  const useCdn = typeof src === "string" && src.startsWith("/.netlify/images?");

  return (
    <span className="relative block overflow-hidden rounded-lg border">
      {!loaded ? <span className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" /> : null}
      <Image
        src={typeof src === "string" ? src : ""}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        sizes="100vw"
        unoptimized={useCdn}
        onLoad={() => setLoaded(true)}
        className={cn("h-auto w-full transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0", className)}
      />
    </span>
  );
}
