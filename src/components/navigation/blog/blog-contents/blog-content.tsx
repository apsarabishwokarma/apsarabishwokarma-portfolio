import Image from "next/image";
import { BlogCardProps } from "./blog-card";

export default function BlogContent({
  img,
  date,
  blogName,
  blogDetails,
  blogContent,
}: BlogCardProps) {
  return (
    <div className="flex items-center justify-center">
      <div key={blogName}>
        <h3 className="my-[6px]  text-base font-medium text-white leading-none">
          {blogName}
        </h3>
        <p className="mt-4 text-sm font-normal text-white">
          {date} &#124; {blogDetails}
        </p>
        <figure className="w-full overflow-hidden rounded-md">
          <Image
            src={img}
            alt={blogName}
            height={300}
            width={400}
            className="h-64 w-full object-cover"
            quality={100}
          />
        </figure>
        <p className="mt-4 text-sm font-normal text-white">{blogContent}</p>
      </div>
    </div>
  );
}
