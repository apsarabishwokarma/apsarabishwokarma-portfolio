import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "./blog-contents/blog-card";
import BlogShowcase from "./blog-contents/blog-showcase";

function Blog() {
  return (
    <div id="blog" className="container mx-auto pt-20">
      <p className="max-w-7xl  w-full  text-neutral-400">blogs</p>
      <BlogShowcase />
      <div className="flex max-w-7xl mx-auto  w-full items-center justify-between">
        <h1 className="text-white text-xl font-normal">
          {" "}
          &darr; Featured Blogs
        </h1>
        <Link href="/blog">
          <Button className="">
            <ArrowRight className="mr-2 h-4 w-4 " />
            View More
          </Button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 py-4 w-full max-w-7xl mx-auto">
        {blogs
          .slice(0, 3)
          .map(({ img, slug, date, blogName, blogDetails, readTime }) => (
            <BlogCard
              slug={slug}
              key={blogName}
              img={img}
              blogName={blogName}
              date={date}
              blogDetails={blogDetails}
              readTime={`${readTime} min to read`}
            />
          ))}
      </div>
    </div>
  );
}

export default Blog;
