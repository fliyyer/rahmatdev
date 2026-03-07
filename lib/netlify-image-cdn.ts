type NetlifyImageOptions = {
  width?: number;
  quality?: number;
};

export function toNetlifyImageCdn(src: string, options: NetlifyImageOptions = {}) {
  if (!src.startsWith("/porto/")) return src;
  if (!process.env.NETLIFY) return src;

  const params = new URLSearchParams({
    url: src,
    q: String(options.quality ?? 75),
    fm: "webp"
  });

  if (options.width) {
    params.set("w", String(options.width));
  }

  return `/.netlify/images?${params.toString()}`;
}
