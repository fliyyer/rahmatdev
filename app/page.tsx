import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllBlogPosts, getAllProjects } from "@/lib/mdx";

export default async function HomePage() {
  const [posts, projects] = await Promise.all([getAllBlogPosts(), getAllProjects()]);

  const featuredPosts = posts.slice(0, 2);
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <>
      <Hero />

      <section className="space-y-8 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Featured Blog Posts</h2>
          <Button asChild variant="ghost">
            <Link href="/blog">All Posts</Link>
          </Button>
        </div>
        <div className="space-y-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-8 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <Button asChild variant="ghost">
            <Link href="/projects">All Projects</Link>
          </Button>
        </div>
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-4 py-10">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Frontend engineer with 2+ years of experience delivering production web products in logistics, real estate,
          and digital media. I focus on scalable interfaces, performance, and clear user experiences.
        </p>
        <Button asChild variant="outline">
          <Link href="/about">Read Full Bio</Link>
        </Button>
      </section>
    </>
  );
}
