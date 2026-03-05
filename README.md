# Rahmat Portfolio (Next.js + MDX)

Personal developer portfolio inspired by Medium's content-first design.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- MDX content
- next-themes dark mode

## Project Structure

```txt
app/
  layout.tsx
  page.tsx
  about/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  experience/page.tsx
  contact/page.tsx
  contact/actions.ts
components/
  navbar.tsx
  footer.tsx
  hero.tsx
  blog-card.tsx
  project-card.tsx
  contact-form.tsx
  mdx-content.tsx
  theme-provider.tsx
  theme-toggle.tsx
  ui/*
content/
  blog/*.mdx
  projects/*.mdx
lib/
  mdx.ts
  site.ts
  utils.ts
```

## Install and Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## shadcn/ui Setup

`components.json` is included and UI primitives are already scaffolded.

If you want to use the CLI later:

```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea badge separator dropdown-menu sheet
```

## MDX Content

- Blog posts: `content/blog/*.mdx`
- Projects: `content/projects/*.mdx`

Each blog post supports frontmatter (`title`, `description`, `date`, `published`), reading time, syntax highlighting, and table of contents.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: `Next.js`.
4. Build command: `npm run build`.
5. Output directory: `.next` (default).
6. Deploy.

Optional domain setup can be configured in Vercel project settings.
