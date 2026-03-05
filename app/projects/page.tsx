import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected frontend and fullstack projects built with modern web technologies."
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="py-14">
      <div className="mb-10 space-y-3">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          A selection of projects focused on product quality, performance, and maintainability.
        </p>
      </div>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
