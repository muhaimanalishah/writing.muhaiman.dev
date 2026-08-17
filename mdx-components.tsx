import type { MDXComponents } from "mdx/types"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* The page title comes from frontmatter, so an in-content H1 is a
   section heading — it shares the H2 scale. */
const h1h2 = "mt-10 mb-3 scroll-m-24 text-xl font-semibold tracking-tight text-foreground first:mt-0"

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
      <h1 className={cn(h1h2, className)} {...props} />
    ),
    h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
      <h2 className={cn(h1h2, className)} {...props} />
    ),
    h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
      <h3
        className={cn(
          "mt-8 mb-2 scroll-m-24 text-lg font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
      <h4
        className={cn("mt-7 mb-2 scroll-m-24 text-base font-semibold text-foreground", className)}
        {...props}
      />
    ),
    h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
      <h5
        className={cn("mt-6 mb-2 text-base font-medium text-foreground", className)}
        {...props}
      />
    ),
    h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
      <h6
        className={cn("mt-6 mb-2 text-sm font-medium text-muted-foreground", className)}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.ComponentProps<"p">) => (
      <p
        className={cn(
          "mb-5 text-[1.0625rem] leading-[1.8] text-foreground/90 [text-wrap:pretty]",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, href = "", ...props }: React.ComponentProps<"a">) => {
      const isInternal = href.startsWith("/") || href.startsWith("#")
      const linkStyle = cn(
        "font-medium text-accent underline decoration-accent/35 underline-offset-2 transition-colors hover:decoration-accent",
        className
      )
      if (isInternal) {
        return <Link href={href} className={linkStyle} {...props} />
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle} {...props} />
      )
    },
    blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
      <blockquote
        className={cn(
          "my-7 border-l-2 border-accent/50 pl-5 text-[1.0625rem] leading-[1.75] text-muted-foreground [&>p]:mb-3 [&>p:last-child]:mb-0",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
      <ul
        className={cn(
          "my-5 ml-5 list-disc space-y-2 text-[1.0625rem] leading-[1.8] text-foreground/90 marker:text-muted-foreground/50",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
      <ol
        className={cn(
          "my-5 ml-5 list-decimal space-y-2 text-[1.0625rem] leading-[1.8] text-foreground/90 marker:text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: React.ComponentProps<"li">) => (
      <li className={cn("pl-1 [text-wrap:pretty]", className)} {...props} />
    ),
    hr: ({ className, ...props }: React.ComponentProps<"hr">) => (
      <hr className={cn("mx-auto my-10 w-16 border-faint", className)} {...props} />
    ),
    table: ({ className, ...props }: React.ComponentProps<"table">) => (
      <div className="my-7 w-full overflow-x-auto">
        <table className={cn("w-full border-collapse text-left text-base", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }: React.ComponentProps<"thead">) => (
      <thead className={cn("border-b border-foreground/25", className)} {...props} />
    ),
    tbody: ({ className, ...props }: React.ComponentProps<"tbody">) => (
      <tbody {...props} className={className} />
    ),
    tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
      <tr className={cn("border-b border-faint", className)} {...props} />
    ),
    th: ({ className, ...props }: React.ComponentProps<"th">) => (
      <th
        className={cn(
          "px-3 py-2.5 text-sm font-semibold text-foreground first:pl-0 last:pr-0",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.ComponentProps<"td">) => (
      <td
        className={cn("px-3 py-2.5 text-foreground/90 first:pl-0 last:pr-0", className)}
        {...props}
      />
    ),
    pre: ({ className, ...props }: React.ComponentProps<"pre">) => (
      <pre
        className={cn(
          "my-7 overflow-x-auto rounded-xl border border-faint bg-wash p-4 text-[0.8125rem] leading-relaxed",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: React.ComponentProps<"code">) => {
      // Block code is styled by <pre> (and shiki); only inline code needs a chip.
      const isBlockCode = className?.includes("language-") || "data-language" in props
      if (isBlockCode) {
        return <code className={className} {...props} />
      }
      return (
        <code
          className={cn(
            "rounded-md bg-wash px-1.5 py-0.5 text-[0.85em] text-foreground",
            className
          )}
          {...props}
        />
      )
    },
    img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
      <span className="my-8 block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={cn("h-auto w-full rounded-xl", className)} alt={alt} {...props} />
        {alt && (
          <span className="mt-2 block text-center text-sm text-muted-foreground">{alt}</span>
        )}
      </span>
    ),
    ...components,
  }
}
