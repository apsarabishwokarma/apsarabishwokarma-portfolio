import BlogContent from "@/components/navigation/blog/blog-contents/blog-content";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto">
      <BlogContent />

      <article className="prose max-w-4xl prose-invert mt-10">
        {children}
      </article>
    </div>
  );
}
