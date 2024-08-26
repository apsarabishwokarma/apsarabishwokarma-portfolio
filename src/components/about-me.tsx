"use client";
import Link from "next/link";

const Shape1 = () => (
  <svg
    className="absolute z-[-1] top-0 right-0"
    width="270"
    height="389"
    viewBox="0 0 270 389"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="350"
      cy="81"
      r="307"
      stroke="#C8C6FC"
      strokeOpacity="0.52"
      strokeWidth="2"
    />
    <circle cx="248" cy="129" r="22" fill="#87CEEB" />
  </svg>
);

const PortfolioBanner = () => {
  return (
    <section id="about-me" className=" container mx-auto pt-32">
      <p className="max-w-7xl mb-4 w-full  text-neutral-400">
        {" "}
        &darr; about me
      </p>
      <div className=" relative flex items-center text-white">
        <Shape1 />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <img
              src="/profile-me.png"
              alt="profile-girl"
              className="h-auto max-w-full relative z-[1]"
            />
          </div>

          <div className="flex flex-col justify-center lg:text-start">
            <h2 className="text-3xl font-bold mb-4">
              Crafting Modern Web Experiences
            </h2>
            <p className="text-lg opacity-80 mb-4">
              As a software engineer specializing in frontend development, I
              bring creativity and technical expertise to build responsive,
              user-friendly websites. My tools of choice include React, Tailwind
              CSS, and modern JavaScript frameworks.
            </p>
            <p className="text-lg opacity-80 mb-4">
              I am passionate about crafting seamless user interfaces that not
              only look great but also provide an intuitive and enjoyable
              experience for users. I believe in the power of clean, efficient
              code and strive to write maintainable, scalable applications.
            </p>
            <p className="text-lg opacity-80 mb-4">
              With a strong foundation in HTML, CSS, and JavaScript, I
              continuously seek out new challenges and opportunities to grow. My
              goal is to stay at the forefront of web development trends,
              ensuring that every project I work on is equipped with the latest
              technologies and best practices.
            </p>
            <p className="text-lg opacity-80">
              Whether it's creating a brand-new website from scratch or
              enhancing an existing one, I am dedicated to delivering
              high-quality work that exceeds expectations. Let's collaborate and
              bring your vision to life!
            </p>

            <div className="mt-4 flex justify-center lg:justify-start">
              <Link href="mailto:apsarabk94@gmail.com">
                <button className="px-6 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hidden md:block">
                  <span>Let's Work Together &rarr; </span>
                  <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;
