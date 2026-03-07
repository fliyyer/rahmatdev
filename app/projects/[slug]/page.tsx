import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { ImageWithLoading } from "@/components/ui/image-with-loading";
import { Badge } from "@/components/ui/badge";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";

type Params = { slug: string };

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);

    return {
      title: project.frontmatter.title,
      description: project.frontmatter.description
    };
  } catch {
    return {};
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return (
    <article className="space-y-8 py-14">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold">{project.frontmatter.title}</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">{project.frontmatter.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.frontmatter.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        {project.frontmatter.githubUrl ? (
          <Link
            href={project.frontmatter.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Open GitHub Repository
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        ) : null}
      </header>

      <div className="overflow-hidden rounded-lg border">
        <ImageWithLoading
          src={project.frontmatter.previewImage}
          alt={project.frontmatter.title}
          width={1280}
          height={720}
          containerClassName="aspect-video w-full"
          className="h-full w-full object-cover"
        />
      </div>

      <MdxContent source={project.content} />
    </article>
  );
}
