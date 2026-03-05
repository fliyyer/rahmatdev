import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional timeline and notable frontend experience."
};

const timeline = [
  {
    company: "Seryu Cargo",
    role: "Frontend Engineer",
    year: "Jul 2025 - Present",
    description:
      "Built and maintained internal modules with React, TypeScript, Ant Design, and Tailwind CSS. Added Cypress coverage for critical UI flows and collaborated with backend and design teams."
  },
  {
    company: "Ray White Indonesia",
    role: "Frontend Developer",
    year: "Sep 2023 - Jul 2025",
    description:
      "Developed and maintained the main company website and Brand Central platform, including API integration for document builder features."
  },
  {
    company: "Maritim Muda Nusantara",
    role: "Web Developer",
    year: "Feb 2023 - Jul 2023",
    description:
      "Redesigned website interfaces and delivered React-based applications for Maritime Preneur and Blue Economy Company Index."
  },
  {
    company: "Fastwork.id",
    role: "Freelance Web Developer",
    year: "Feb 2023 - Present",
    description:
      "Converted Figma to responsive web experiences, built interactive React components, and implemented Firebase and Express/MySQL integrations."
  }
];

export default function ExperiencePage() {
  return (
    <section className="py-14">
      <div className="mb-10 space-y-3">
        <h1 className="text-4xl font-semibold">Experience</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Timeline of work focused on frontend architecture, product delivery, and team collaboration.
        </p>
      </div>

      <ol className="relative ml-3 border-l space-y-10">
        {timeline.map((item) => (
          <li key={`${item.company}-${item.year}`} className="relative pl-8">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground">{item.year}</p>
            <h2 className="mt-1 text-2xl font-semibold">{item.role}</h2>
            <p className="font-medium">{item.company}</p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
