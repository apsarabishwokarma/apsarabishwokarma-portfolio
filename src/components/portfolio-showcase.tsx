import { SparklesCore } from "@/components/ui/sparkles";

import {
  SiCss3,
  SiFigma,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function PortfolioShowcase() {
  return (
    <div className="relative isolate flex min-h-[36rem] w-full flex-col items-center justify-center overflow-hidden rounded-md px-4 py-16 text-center sm:min-h-[42rem] lg:min-h-[48rem]">
      <img
        src="/nobgkti.png"
        width={250}
        height={250}
        alt="kti"
        className="h-28 w-28 sm:h-40 sm:w-40 md:h-[250px] md:w-[250px]"
      ></img>

      <h6 className="pt-4 text-xl font-medium text-center text-white relative z-20 sm:text-2xl md:text-4xl">
        Apsara Bishwokarma /
        <span className="font-medium text-emerald-400"> Web Developer</span>
      </h6>

      <div className="relative mt-6 h-10 w-full max-w-[60rem]">
        {/* Gradients */}
        <div className="absolute inset-x-8 top-0 h-[2px] w-[calc(100%-4rem)] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm sm:inset-x-20 sm:w-3/4" />
        <div className="absolute inset-x-8 top-0 h-px w-[calc(100%-4rem)] bg-gradient-to-r from-transparent via-indigo-500 to-transparent sm:inset-x-20 sm:w-3/4" />
        <div className="absolute inset-x-20 top-0 hidden h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm sm:block sm:inset-x-60" />
        <div className="absolute inset-x-20 top-0 hidden h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent sm:block sm:inset-x-60" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <p className="font-preahvihear relative z-20 mx-auto mt-6 max-w-lg text-base font-normal text-center text-white md:text-lg">
        Innovative and Motivated Individual , Passionate about creating visually
        appealing websites and mobile apps.
      </p>

      <div className="mb-4 grid grid-cols-4 gap-2 pt-10 justify-center -z-10 md:grid-cols-8">
        <SiHtml5 className="text-4xl text-red-500" />
        <SiCss3 className="text-4xl text-blue-400" />
        <SiJavascript className="text-4xl text-yellow-500" />
        <SiTypescript className="text-4xl text-green-500" />
        <SiReact className="text-4xl text-blue-600" />
        <SiTailwindcss className="text-4xl text-blue-600" />
        <SiFigma className="text-4xl text-pink-500" />
        <SiFlutter className="text-4xl text-blue-500" />
      </div>
    </div>
  );
}
