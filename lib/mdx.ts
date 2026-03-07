import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  published: boolean;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export type ProjectFrontmatter = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  previewImage: string;
  featured: boolean;
};

export type ProjectMeta = ProjectFrontmatter & {
  slug: string;
};

const contentRoot = path.join(process.cwd(), "content");
const blogRoot = path.join(contentRoot, "blog");
const projectsRoot = path.join(contentRoot, "projects");

const headingPattern = /^(##|###)\s+(.+)$/gm;

function calculateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractHeadings(content: string) {
  const headings: { text: string; id: string; level: 2 | 3 }[] = [];

  for (const match of content.matchAll(headingPattern)) {
    const hashes = match[1];
    const raw = match[2];
    const depth = hashes.length === 3 ? 3 : 2;

    headings.push({
      text: raw.replace(/[#*`]/g, "").trim(),
      id: slugify(raw),
      level: depth
    });
  }

  return headings;
}

export async function getAllBlogPosts() {
  const files = await fs.readdir(blogRoot);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const filePath = path.join(blogRoot, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(source);

        const frontmatter = data as BlogFrontmatter;

        if (!frontmatter.published) return null;

        return {
          ...frontmatter,
          date: frontmatter.date,
          slug,
          readingTime: calculateReadingTime(content)
        } satisfies BlogPostMeta;
      })
  );

  return posts
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((post) => ({ ...post, date: formatDate(post.date) }));
}

export async function getBlogPostBySlug(slug: string) {
  const filePath = path.join(blogRoot, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    frontmatter: {
      ...(data as BlogFrontmatter),
      date: formatDate((data as BlogFrontmatter).date)
    },
    content,
    toc: extractHeadings(content),
    readingTime: calculateReadingTime(content)
  };
}

export async function getAllProjects() {
  const files = await fs.readdir(projectsRoot);

  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const filePath = path.join(projectsRoot, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);

        return {
          ...(data as ProjectFrontmatter),
          slug
        } satisfies ProjectMeta;
      })
  );

  return projects;
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsRoot, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    frontmatter: {
      ...(data as ProjectFrontmatter)
    },
    content
  };
}
