import { BlogCard, BlogCardProps } from "./blog-contents/blog-card";

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

        {/* <Button>
          <Book className="mr-2 h-4 w-4  " />
          View More
        </Button> */}
      </div>
      <div className="flex space-x-4 p-4 py-4 w-full">
        {blogs.map(({ img, PostDate, BlogName, BlogDetails }) => (
          <BlogCard
            key={BlogName}
            img={img}
            BlogName={BlogName}
            PostDate={PostDate}
            BlogDetails={BlogDetails}
          />
        ))}
      </div>
      <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hidden md:block">
        <span> Read More</span>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
      </button>
    </>
  );
}

const blogs: BlogCardProps[] = [
  {
    img: "",
    PostDate: "02/02/2024",
    BlogName: "",
    BlogDetails:
      "Books have a unique ability to foster empathy and compassion within us. ",
  },
  {
    img: "https://localmedia.org/wp-content/uploads/2021/06/events-1.png",
    PostDate: "02/09/2024",
    BlogName: "nepal News Conference",
    BlogDetails: "Gwarko ,Imadol,Lalitpur",
  },
  {
    img: "https://craftworldevents.com/wp-content/uploads/2022/10/Corporate-Events.jpg",
    PostDate: "22/03/2023",
    BlogName: "25th ceremony",
    BlogDetails: "Maitighar, kathmandu",
  },
];

export default Blog;
