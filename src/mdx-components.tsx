import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global MDX component map for insights posts.
 * Typography is handled by the `.insight-prose` styles in globals.css,
 * so this only wires up smart link behaviour.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href = "", children, ...rest }) => {
      if (href.startsWith("http")) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} {...rest}>
          {children}
        </Link>
      );
    },
    ...components,
  };
}
