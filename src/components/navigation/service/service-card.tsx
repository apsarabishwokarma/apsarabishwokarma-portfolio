"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaCamera, FaDesktop, FaFigma, FaMobileAlt } from "react-icons/fa";

export function ServiceCardHoverEffect() {
  const projects = [
    {
      icon: <FaDesktop size={40} />,
      title: "Web Development",
      description:
        "Crafting responsive and user-friendly websites using modern technologies like React.js, Tailwind Css.",
      link: "https://github.com/apsarabiswokarma/WebDevelopment-Roadmap",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "App Development",
      description:
        "Building cross-platform mobile applications for iOS and Android platforms with frameworks like Flutter.",
      link: "https://github.com/apsarabiswokarma/BookNook-App-Flutter",
    },
    {
      icon: <FaFigma size={40} />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces that enhance user experience using figma.",
      link: "/",
    },

    {
      icon: <FaCamera size={40} />,
      title: "Photography",
      description:
        "Capturing stunning photographs that showcase your products, events, or lifestyle in the best light.",
      link: "/",
    },
  ];

  return (
    <div className="container mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
