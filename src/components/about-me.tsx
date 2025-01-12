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
    <section
      id="about-me"
      className="relative container mx-auto pt-20 pb-12 px-6 lg:px-10"
    >
      <Shape1 />
      <p className="max-w-7xl mb-4 w-full  text-neutral-400">
        {" "}
        &darr; about me
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex justify-center ">
          <img
            src="/aboutimg.png"
            alt="profile-girl"
            className="max-w-md lg:max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center lg:text-left mt-4 lg:mt-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Crafting Modern Web Experiences
          </h2>
          <p className="text-base lg:text-lg text-neutral-300 mb-4">
            As a software engineer specializing in frontend development, I bring
            creativity and technical expertise to build responsive,
            user-friendly websites. My tools of choice include React, Tailwind
            CSS, and modern JavaScript frameworks.
          </p>
          <p className="text-base lg:text-lg text-neutral-300 mb-4">
            I believe in crafting seamless user interfaces that are both
            functional and aesthetically pleasing. Every project I work on is
            built with attention to detail, clean code, and modern best
            practices.
          </p>
          <p className="text-base lg:text-lg text-neutral-300 mb-4">
            Let’s collaborate and bring your vision to life with a blend of
            creativity and technology!
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
    </section>
  );
};

export default PortfolioBanner;
