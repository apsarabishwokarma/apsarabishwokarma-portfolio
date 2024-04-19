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
    <div className="h-[48rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <img src="/nobgkti.png" width={250} height={250} alt="kti"></img>

      <h6 className=" pt-4 md:text-4xl text-xl sm:text-2xl font-medium text-center text-white relative z-20">
        Apsara Bishwokarma /
        <span className="font-medium text-emerald-400">
          {" "}
          Frontend Developer
        </span>
      </h6>

      <div className="w-[60rem] h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

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

      <p className="md:text-lg font-preahvihear text-base font-normal text-center text-white relative z-20 max-w-lg mx-auto ">
        Innovative and Motivated Individual , Passionate about creating visually
        appealing websites and mobile apps.
      </p>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 pt-10 justify-center mb-4 -z-10">
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
