import type { MDXComponents } from "mdx/types"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* The page title comes from frontmatter, so an in-content H1 is a
   section heading — it shares the H2 scale. */
const h1h2 =
  "mt-12 mb-4 scroll-m-24 font-serif text-2xl font-medium tracking-[-0.01em] text-foreground first:mt-0"

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
          "mt-10 mb-3 scroll-m-24 font-serif text-xl font-medium tracking-[-0.005em] text-foreground",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
      <h4
        className={cn(
          "mt-8 mb-2 scroll-m-24 font-serif text-lg font-medium italic text-foreground",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
      <h5
        className={cn("mt-6 mb-2 font-serif text-base font-medium italic text-foreground", className)}
        {...props}
      />
    ),
    h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
      <h6
        className={cn(
          "mt-6 mb-2 font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.ComponentProps<"p">) => (
      <p
        className={cn(
          "mb-5 font-serif text-lg leading-[1.8] text-foreground/90 [text-wrap:pretty]",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, href = "", ...props }: React.ComponentProps<"a">) => {
      const isInternal = href.startsWith("/") || href.startsWith("#")
      const linkStyle = cn(
        "text-foreground underline decoration-foreground/30 underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent",
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
          "my-8 border-l-2 border-accent/60 pl-5 font-serif text-lg italic leading-[1.7] text-foreground/80 [&>p]:mb-3 [&>p:last-child]:mb-0",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
      <ul
        className={cn(
          "my-5 ml-5 list-disc space-y-2 font-serif text-lg leading-[1.8] text-foreground/90 marker:text-muted-foreground/60",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
      <ol
        className={cn(
          "my-5 ml-5 list-decimal space-y-2 font-serif text-lg leading-[1.8] text-foreground/90 marker:font-mono marker:text-sm marker:text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: React.ComponentProps<"li">) => (
      <li className={cn("pl-1 [text-wrap:pretty]", className)} {...props} />
    ),
    hr: ({ className, ...props }: React.ComponentProps<"hr">) => (
      <hr className={cn("dinkus", className)} {...props} />
    ),
    table: ({ className, ...props }: React.ComponentProps<"table">) => (
      <div className="my-8 w-full overflow-x-auto">
        <table
          className={cn("w-full border-collapse text-left font-serif text-base", className)}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }: React.ComponentProps<"thead">) => (
      <thead className={cn("border-b border-foreground/30", className)} {...props} />
    ),
    tbody: ({ className, ...props }: React.ComponentProps<"tbody">) => (
      <tbody {...props} className={className} />
    ),
    tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
      <tr className={cn("border-b border-rule", className)} {...props} />
    ),
    th: ({ className, ...props }: React.ComponentProps<"th">) => (
      <th
        className={cn(
          "px-3 py-2.5 font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground first:pl-0 last:pr-0",
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
          "my-7 overflow-x-auto rounded-[4px] border border-rule bg-wash p-4 font-mono text-[0.8125rem] leading-relaxed",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: React.ComponentProps<"code">) => {
      // Block code is styled by <pre> (and shiki); only inline code needs a chip.
      const isBlockCode = className?.includes("language-") || "data-language" in props
      if (isBlockCode) {
        return <code className={cn("font-mono", className)} {...props} />
      }
      return (
        <code
          className={cn(
            "rounded-[3px] bg-wash px-1.5 py-0.5 font-mono text-[0.8em] text-foreground",
            className
          )}
          {...props}
        />
      )
    },
    img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
      <span className="my-8 block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={cn("h-auto w-full rounded-[4px]", className)} alt={alt} {...props} />
        {alt && (
          <span className="mt-2 block font-mono text-xs text-muted-foreground">{alt}</span>
        )}
      </span>
    ),
    ...components,
  }
}
