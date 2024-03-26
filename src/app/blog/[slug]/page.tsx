import BlogContent from "@/components/navigation/blog/blog-contents/blog-content";
import { blogs } from "@/data/blogs";
import { redirect } from "next/navigation";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) {
    redirect("/404");
  }
  return <BlogContent {...blog} />;
}
