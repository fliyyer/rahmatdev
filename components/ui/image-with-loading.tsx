"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type ImageWithLoadingProps = ImageProps & {
  containerClassName?: string;
};

export function ImageWithLoading({ containerClassName, className, alt, ...props }: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative", containerClassName)}>
      {!loaded ? <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" /> : null}
      <Image
        {...props}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn("transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0", className)}
      />
    </div>
  );
}
