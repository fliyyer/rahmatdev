import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectMeta } from "@/lib/mdx";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Card className="shadow-none">
      <CardHeader className="px-4 pb-4">
        <CardTitle className="text-2xl">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          View on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </CardContent>
    </Card>
  );
}
