import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-prose">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">Frontend Developer</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Rahmat Hidayat</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I build clean and scalable web applications with React and Next.js.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">Read Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
