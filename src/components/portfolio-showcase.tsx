import { SparklesCore } from "@/components/ui/sparkles";

export default function PortfolioShowcase() {
  return (
    <div className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h6 className="md:text-4xl text-xl lg:text-3xl font-medium text-center text-white relative z-20">
        Apsara Bishwokarma /
        <span className="font-normal"> Frontend Developer</span>
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
        <div className="absolute inset-0 bg-slate-950 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <p className="md:text-l text-l lg:text-l font-normal text-center text-white relative z-20 max-w-lg mx-auto">
        I am Passionate about creating visually appealing websites and mobile
        apps
      </p>
    </div>
  );
}
