import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MdxImage } from "@/components/mdx-image";

export function MdxContent({ source }: { source: string }) {
  return (
    <article className="prose prose-zinc max-w-none text-lg leading-relaxed dark:prose-invert">
      <MDXRemote
        source={source}
        components={{
          img: MdxImage
        }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "append",
                  properties: {
                    className: ["anchor"]
                  }
                }
              ],
              rehypeHighlight
            ]
          }
        }}
      />
    </article>
  );
}
