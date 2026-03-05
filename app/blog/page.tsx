import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { getAllBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about frontend engineering, React architecture, and shipping maintainable interfaces."
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <section className="py-14">
      <div className="mb-10 space-y-3">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Notes on React, Next.js, frontend architecture, and practical product development.
        </p>
      </div>
      <div className="space-y-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
