import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills, and working style of Rahmat Hidayat."
};

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn UI",
  "Redux Toolkit",
  "React Query",
  "Cypress"
];

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MySQL", "MongoDB", "Docker"];

export default function AboutPage() {
  return (
    <section className="space-y-10 py-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold">About</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I am a frontend engineer based in Tangerang, Indonesia, with over two years of experience building
          responsive, product-driven web applications. My focus is writing clean, scalable code and shipping features
          that improve user workflows.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience Summary</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I have contributed to logistics platforms, real estate tools, and freelance products. Across these projects,
          I collaborate closely with backend engineers and designers, prioritize maintainable UI architecture, and use
          testing to protect core flows before release.
        </p>
      </div>
    </section>
  );
}
