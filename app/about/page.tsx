import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Wrench,
  Mail,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import {
  profile,
  experiences,
  education,
  trainings,
  techStack,
} from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Front-end developer dengan 2+ tahun pengalaman membangun web app yang responsif dan user-friendly.",
};

export default function AboutPage() {
  return (
    <div className="space-y-14 py-10">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>

        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          {profile.location}
        </span>

        <div className="flex flex-wrap gap-x-5 text-sm text-muted-foreground">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" />
            {profile.githubLabel}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-3.5 w-3.5" />
            {profile.linkedinLabel}
          </a>
        </div>

        <p className="max-w-prose leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>
      </section>

      <Separator />

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Briefcase className="h-5 w-5 text-primary" />
          Experience
        </h2>

        <div className="relative space-y-8 border-l pl-5">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[26px] h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <div className="space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-1">
                  <div>
                    <p className="font-semibold leading-tight">{exp.company}</p>
                    <p className="text-sm text-primary">{exp.role}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1 shrink-0 text-primary">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Education */}
      {/* <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <GraduationCap className="h-5 w-5 text-primary" />
          Education
        </h2>

        <div className="rounded-lg border bg-card p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="font-semibold">{education.university}</p>
              <p className="text-sm text-muted-foreground">{education.degree}</p>
              <p className="mt-1 text-sm font-medium text-primary">
                GPA: {education.gpa}
              </p>
            </div>
            <div className="text-right text-xs text-muted-foreground">
              <p>{education.period}</p>
              <p>{education.location}</p>
            </div>
          </div>
        </div>
      </section>

      <Separator /> */}

      {/* Training */}
      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <BookOpen className="h-5 w-5 text-primary" />
          Training
        </h2>

        <div className="space-y-3">
          {trainings.map((t, i) => (
            <div key={i} className="rounded-lg border bg-card p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">{t.org}</p>
                  <p className="text-sm text-muted-foreground">{t.program}</p>
                </div>
                <span className="text-xs text-muted-foreground">{t.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Wrench className="h-5 w-5 text-primary" />
          Tech Stack
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {techStack.map((group) => (
            <div key={group.category} className="rounded-lg border bg-card p-4">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
