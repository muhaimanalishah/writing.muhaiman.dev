import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "frontmatter" }],
    ],
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          keepBackground: false,
        },
      ],
    ],
  },
})

export default withMDX(nextConfig)
