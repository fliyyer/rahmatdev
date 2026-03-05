import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex w-full max-w-prose flex-col gap-4 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex items-center gap-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </Link>
          <Link href={siteConfig.links.email} className="hover:text-foreground">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
