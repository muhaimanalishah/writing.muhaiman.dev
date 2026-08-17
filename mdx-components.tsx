import type { MDXComponents } from "mdx/types"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
      <h1
        className={cn(
          "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-10 mb-5 scroll-m-20 first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
      <h2
        className={cn(
          "font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl mt-9 mb-4 border-b border-border/40 pb-2 scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
      <h3
        className={cn(
          "font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl mt-7 mb-3 scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
      <h4
        className={cn(
          "font-heading text-lg font-medium tracking-tight text-foreground sm:text-xl mt-6 mb-2 scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
      <h5
        className={cn(
          "font-heading text-base font-medium text-foreground sm:text-lg mt-5 mb-2",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
      <h6
        className={cn(
          "font-heading text-sm font-medium text-muted-foreground sm:text-base mt-4 mb-2 uppercase tracking-wider",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.ComponentProps<"p">) => (
      <p
        className={cn(
          "text-[1.0625rem] sm:text-lg text-foreground/90 leading-[1.8] mb-6 font-normal tracking-normal",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, href = "", ...props }: React.ComponentProps<"a">) => {
      const isInternal = href.startsWith("/") || href.startsWith("#")
      if (isInternal) {
        return (
          <Link
            href={href}
            className={cn(
              "font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors",
              className
            )}
            {...props}
          />
        )
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors",
            className
          )}
          {...props}
        />
      )
    },
    blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
      <blockquote
        className={cn(
          "my-6 border-l-2 border-border pl-5 italic text-muted-foreground text-base sm:text-lg [&>p]:mb-2 [&>p:last-child]:mb-0",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc space-y-2 text-[1.0625rem] sm:text-lg text-foreground/90 leading-[1.75]",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
      <ol
        className={cn(
          "my-6 ml-6 list-decimal space-y-2 text-[1.0625rem] sm:text-lg text-foreground/90 leading-[1.75]",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: React.ComponentProps<"li">) => (
      <li className={cn("pl-1 text-[1.0625rem] sm:text-lg leading-[1.75]", className)} {...props} />
    ),
    hr: ({ className, ...props }: React.ComponentProps<"hr">) => (
      <hr className={cn("my-8 border-border", className)} {...props} />
    ),
    table: ({ className, ...props }: React.ComponentProps<"table">) => (
      <div className="my-6 w-full overflow-x-auto rounded-xl border border-border">
        <table className={cn("w-full text-left text-sm sm:text-base border-collapse", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }: React.ComponentProps<"thead">) => (
      <thead className={cn("border-b border-border bg-muted/50", className)} {...props} />
    ),
    tbody: ({ className, ...props }: React.ComponentProps<"tbody">) => (
      <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
    ),
    tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
      <tr className={cn("border-b border-border/50 transition-colors hover:bg-muted/30", className)} {...props} />
    ),
    th: ({ className, ...props }: React.ComponentProps<"th">) => (
      <th className={cn("px-4 py-3 font-semibold text-foreground", className)} {...props} />
    ),
    td: ({ className, ...props }: React.ComponentProps<"td">) => (
      <td className={cn("px-4 py-3 text-foreground/90", className)} {...props} />
    ),
    pre: ({ className, ...props }: React.ComponentProps<"pre">) => (
      <pre
        className={cn(
          "my-6 overflow-x-auto rounded-2xl border border-border bg-muted/40 p-4 sm:p-5 text-sm sm:text-base font-mono leading-relaxed text-foreground",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: React.ComponentProps<"code">) => {
      // If code element has data-language or is inside pre, avoid duplicate background styling
      const isBlockCode = className?.includes("language-") || "data-language" in props
      if (isBlockCode) {
        return <code className={cn("font-mono text-sm sm:text-base", className)} {...props} />
      }
      return (
        <code
          className={cn(
            "rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground",
            className
          )}
          {...props}
        />
      )
    },
    img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
      <span className="my-8 block text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={cn("mx-auto rounded-2xl border border-border/60 shadow-sm max-w-full h-auto", className)}
          alt={alt}
          {...props}
        />
        {alt && (
          <span className="mt-2.5 block text-center text-xs sm:text-sm text-muted-foreground italic">
            {alt}
          </span>
        )}
      </span>
    ),
    ...components,
  }
}
