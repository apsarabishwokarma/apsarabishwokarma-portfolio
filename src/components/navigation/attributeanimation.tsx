export default function AttributionLink() {
  return (
    <a
      href="#"
      className="group relative px-4 py-2 text-sm font-medium  text-muted-foreground transition-colors hover:text-nambg-namecolor"
    >
      <span className="relative z-10 text-white">Connect With Me</span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-namecolor transition-all duration-200 group-hover:w-full"></span>
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-namecolor transition-all delay-100 duration-200 group-hover:h-full"></span>
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-namecolor transition-all delay-200 duration-200 group-hover:w-full"></span>
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-namecolor transition-all delay-300 duration-200 group-hover:h-full"></span>
      <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-nambg-namecolor/10 to-nambg-namecolor/20 opacity-0 blur-lg transition-opacity duration-200 group-hover:opacity-100"></span>
    </a>
  );
}
