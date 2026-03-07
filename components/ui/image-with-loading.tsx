"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { toNetlifyImageCdn } from "@/lib/netlify-image-cdn";

type ImageWithLoadingProps = ImageProps & {
  containerClassName?: string;
};

export function ImageWithLoading({ containerClassName, className, alt, ...props }: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState(false);
  const width = typeof props.width === "number" ? props.width : undefined;
  const src = typeof props.src === "string" ? toNetlifyImageCdn(props.src, { width }) : props.src;
  const useCdn = typeof props.src === "string" && props.src.startsWith("/porto/");

  return (
    <div className={cn("relative", containerClassName)}>
      {!loaded ? <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" /> : null}
      <Image
        {...props}
        src={src}
        alt={alt}
        unoptimized={useCdn || props.unoptimized}
        onLoad={() => setLoaded(true)}
        className={cn("transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0", className)}
      />
    </div>
  );
}
