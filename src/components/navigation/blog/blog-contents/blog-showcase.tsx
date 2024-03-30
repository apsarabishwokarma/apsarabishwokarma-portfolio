import Link from "next/link";

export default function BlogShowcase() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-24 container mx-auto px-6 text-white py-32">
          <div className="flex flex-col gap-8 justify-center items-center text-center">
            <h1 className="font-semibold text-2xl ml-3">
              {" "}
              GitHub: Where coding becomes community
            </h1>
            <p className="font-medium text-lg">
              Ideas don't disappear ;
              <br /> they evolve and merge with others , just like code on
              GitHub.
            </p>
            <Link href="blog/github">
              <button className="max-w-max bg-transparent  text-green-500  border border-green-500 rounded-md py-3 px-10">
                Read More
              </button>
            </Link>
          </div>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?"
              width={600}
              height={650}
              alt="blog-banner"
              className="rounded-lg"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
