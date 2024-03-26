import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
        <Button className="">
          <ArrowRight className="mr-2 h-4 w-4 " />
          View More
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 py-4 w-full max-w-7xl mx-auto">
        {blogs.map(({ img, date, blogName, blogDetails, blogContent }) => (
          <BlogCard
            key={blogName}
            img={img}
            blogName={blogName}
            date={date}
            blogDetails={blogDetails}
            readTime={`${Math.round(
              blogContent.split(" ").length * (1 / 120)
            )} min to read`}
            blogContent=""
          />
        ))}
      </div>
      {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hidden md:block">
        <span> View More &gt;</span>

        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
      </button> */}
    </>
  );
}

const blogs: BlogCardProps[] = [
  {
    img: "https://t3.ftcdn.net/jpg/04/79/12/94/360_F_479129405_2ItSaOfgDJn8gsAtzmElw65yxLFRZe2s.jpg",
    date: "02/02/2024",
    blogName: "Books: Our Trusted Friends",
    blogDetails:
      "Books have a unique ability to foster empathy and compassion within us. ",
    blogContent: ``,
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/003/356/915/small_2x/csr-concept-and-business-planting-saplings-of-trees-photo.JPG",
    date: "02/02/2024",
    blogName: "Planting Pleasures: Joy of Gardening ",
    blogDetails:
      "Share the joy of transforming outdoor and indoor spaces into vibrant gardens.",
    blogContent: `Title: Planting Pleasures: Exploring the Joys of Gardening

      Introduction:
      
      Begin with a personal reflection on your passion for planting and gardening.
      Introduce the topic of the blog post and why gardening is a fulfilling hobby.
      1. Cultivating Green Spaces:
      
      Share the joy of transforming outdoor and indoor spaces into vibrant gardens.
      Discuss the therapeutic benefits of getting your hands dirty and connecting with nature.
      2. Growing Your Garden:
      
      Offer tips and advice for starting a garden, including selecting the right plants for your space and climate.
      Discuss the importance of soil preparation, watering, and plant care techniques for successful gardening.
      3. Discovering New Plant Varieties:
      
      Explore the excitement of discovering and cultivating new plant varieties.
      Share stories of your favorite plants and how they have enriched your gardening experience.
      4. Seasonal Gardening Adventures:
      
      Highlight the joys and challenges of gardening throughout the seasons.
      Share seasonal gardening tips and activities, from spring planting to winter garden maintenance.
      5. Connecting with Fellow Gardeners:
      
      Discuss the sense of community and camaraderie among gardeners.
      Share experiences of joining gardening clubs, attending workshops, and participating in plant swaps.
      6. Harvesting Homegrown Delights:
      
      Celebrate the rewards of homegrown produce and fresh flowers from your garden.
      Share recipes and creative ways to enjoy the fruits of your gardening labor.
      7. Sustainable Gardening Practices:
      
      Emphasize the importance of sustainable gardening practices, such as composting, water conservation, and natural pest control.
      Discuss the role of gardening in promoting environmental stewardship and biodiversity.
      Conclusion:
      
      Summarize the joys and benefits of gardening as a hobby.
      Encourage readers to embrace planting as a rewarding pastime and explore the wonders of nature in their own gardens.
      Closing Thought:
      
      End with a heartfelt reflection on the beauty and fulfillment that gardening brings to your life, inspiring readers to cultivate their own green thumb and experience the pleasures of planting.
      Feel free to personalize each section with anecdotes, gardening tips, favorite plant varieties, and insights from your own gardening journey to create a captivating and inspiring blog post about the joys of planting as a hobby.`,
  },
  {
    img: "https://img-c.udemycdn.com/course/480x270/3906220_be65_2.jpg",
    date: "02/09/2024",
    blogName: "Roadmap for Web-Development",
    blogDetails: "Learn Web development step by step",
    blogContent: ``,
  },
  // {
  //   img: "https://img-new.cgtrader.com/items/3003470/e8f748ff02/large/artificial-intelligence-abstract-graphics-for-websites-ai-3d-model-obj.jpg",
  //   PostDate: "22/03/2023",
  //   blogName: "Artificial Intelligence",
  //   blogDetails: "Widely popular Artificial Intelligence",
  // },
];

export default Blog;
