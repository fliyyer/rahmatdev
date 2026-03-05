import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import { Separator } from "@/components/ui/separator";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx";

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getBlogPostBySlug(slug);

    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        type: "article"
      },
      twitter: {
        card: "summary_large_image",
        title: post.frontmatter.title,
        description: post.frontmatter.description
      }
    };
  } catch {
    return {};
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  try {
    const post = await getBlogPostBySlug(slug);

    return (
      <article className="py-14">
        <header className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight">{post.frontmatter.title}</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">{post.frontmatter.description}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{post.frontmatter.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <Separator className="my-10" />

        <div className="grid gap-12 lg:grid-cols-[1fr_220px]">
          <MdxContent source={post.content} />

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-md border p-4">
              <p className="mb-3 text-sm font-semibold">Table of Contents</p>
              <ul className="space-y-2 text-sm">
                {post.toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "pl-3 text-muted-foreground" : ""}>
                    <a href={`#${item.id}`} className="hover:underline">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
