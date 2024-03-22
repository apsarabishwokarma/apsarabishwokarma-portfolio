import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

function Blog() {
  return (
    <>
      <p className=" mt-8 max-w-7xl  mb-4 mx-auto  w-full  text-neutral-400">
        blogs
      </p>
      <div className="flex max-w-7xl mx-auto  w-full items-center justify-between">
        <h1 className="text-white text-xl font-normal">
          {" "}
          &darr; Featured Blogs
        </h1>
        <Button>
          <Book className="mr-2 h-4 w-4  " />
          View More
        </Button>
      </div>
      <div className="h-screen py-4 w-full"></div>
    </>
  );
}

export default Blog;
