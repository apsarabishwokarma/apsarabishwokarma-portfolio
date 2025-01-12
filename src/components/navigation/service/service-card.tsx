"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaBug, FaCamera, FaDesktop, FaFigma } from "react-icons/fa";

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
      icon: <FaFigma size={40} />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces that enhance user experience using figma.",
      link: "/",
    },
    {
      icon: <FaBug size={40} />,
      title: "Testing and Debugging",
      description:
        "Ensuring robust and error-free applications through meticulous testing and debugging practices",
      link: "https://github.com/apsarabishwokarma",
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
