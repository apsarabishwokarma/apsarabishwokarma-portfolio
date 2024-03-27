"use client";

import { blogs } from "@/data/blogs";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BlogContent() {
  const pathname = usePathname();
  const blog = blogs.find((b) => pathname.includes(b.slug));

  if (!blog) {
    return <></>;
  }

  const { img, date, blogName, blogDetails, readTime } = blog;
  return (
    <>
      <p className="mt-10 text-lg font-normal text-white">
        {date} &#124; {readTime} min to read
      </p>
      <figure className="w-full overflow-hidden rounded-md aspect-video">
        <Image
          src={img}
          alt={blogName}
          height={900 / 2}
          width={1600 / 2}
          className="w-full h-full object-cover"
          quality={100}
        />
      </figure>
    </>
  );
}
