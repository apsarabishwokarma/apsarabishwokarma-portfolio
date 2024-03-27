import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export type BlogCardProps = {
  slug: string;
  img: string;
  date: string;
  blogName: string;
  blogDetails: string;
  readTime?: string;
};

export function BlogCard({
  img,
  date,
  blogName,
  blogDetails,
  readTime,
  className,
  slug,
}: BlogCardProps & { className?: string }) {
  return (
    <>
      <div className={className}>
        <figure className="w-full overflow-hidden rounded-md">
          <Image
            src={img}
            alt={blogName}
            height={350}
            width={350}
            className="h-64 w-full object-cover"
            quality={100}
          />
        </figure>
        <div className=" space-y-2 ">
          <h3 className=" my-[6px] text-base font-medium text-white leading-none">
            {blogName}
          </h3>
          <p className="  mt-4 text-sm font-normal text-white">
            {date} &#124; {readTime}
          </p>
          <p className=" mb-4 text-sm  font-normal text-white">{blogDetails}</p>
        </div>
        <Link href={`/blog/${slug}`}>
          <Button className="mt-2">
            Read more
            <svg
              className="-mr-1 ml-1 h-3 w-4"
              fill="currentColor"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </>
  );
}
