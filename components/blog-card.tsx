import Link from "next/link";
import { BlogPostMeta } from "@/lib/mdx";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="space-y-3 border-b pb-8 last:border-none">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-2xl font-semibold leading-tight">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="text-base leading-relaxed text-muted-foreground">{post.description}</p>
    </article>
  );
}
