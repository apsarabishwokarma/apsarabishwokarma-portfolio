"use client";

import { useState } from "react";
import { SiBuymeacoffee } from "react-icons/si";

const COFFEE_URL = "https://buymeacoffee.com/apsaraa";

export default function CoffeeLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={COFFEE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Buy Apsara Bishwokarma a coffee"
      className="group inline-flex items-center gap-3 self-start rounded-full px-1 py-1 text-left text-gray-100 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a06a]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <span
        className={[
          "coffee-mug relative flex h-11 w-11 items-center justify-center rounded-full border border-[#d6a06b]/35 bg-[linear-gradient(145deg,_rgba(103,62,34,0.98),_rgba(42,25,17,0.98))] text-[#f6d7b0] shadow-[0_8px_22px_rgba(0,0,0,0.28)]",
          isHovered ? "coffee-mug--love" : "",
        ].join(" ")}
      >
        <SiBuymeacoffee className="relative z-10 text-xl" />
        <span className="coffee-eyes" aria-hidden="true">
          <span className="coffee-eye coffee-eye--left" />
          <span className="coffee-eye coffee-eye--right" />
        </span>
        <span className="coffee-heart coffee-heart--left" aria-hidden="true">
          <span>♥</span>
        </span>
        <span className="coffee-heart coffee-heart--right" aria-hidden="true">
          <span>♥</span>
        </span>
      </span>

      <span className="flex flex-col leading-tight">
        <span className="text-[0.62rem] uppercase tracking-[0.38em] text-[#d9b08a]/70">
          support
        </span>
        <span className="text-sm font-medium text-gray-100/95">
          Buy me a Coffee
        </span>
      </span>

      <span className="ml-1 hidden text-lg text-[#f5c48b]/90 transition-transform duration-300 group-hover:translate-x-0.5 sm:inline-block">
        ↗
      </span>
    </a>
  );
}
