import BlogContent from "@/components/navigation/blog/blog-contents/blog-content";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    BlogContent: BlogContent,
  };
}
