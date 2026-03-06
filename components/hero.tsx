import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-prose space-y-6">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Frontend Developer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Rahmat Hidayat
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I build clean and scalable web applications with React and Next.js.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Frontend engineer with 3+ years of experience delivering production
            web products in logistics, real estate, and digital media. I focus
            on scalable interfaces, performance, and clear user experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/about">Read Full Bio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
