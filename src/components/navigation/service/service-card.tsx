"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaBlogger, FaCamera, FaDesktop, FaMobile } from "react-icons/fa";

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
      icon: <FaMobile size={40} />,
      title: "App Development",
      description:
        "Building native and cross-platform mobile applications for iOS and Android platforms with frameworks like React Native or Flutter.",
      link: "https://github.com/apsarabiswokarma/BookNook-App-Flutter",
    },
    {
      icon: <FaBlogger size={40} />,
      title: "Blog Posting",
      description:
        "Creating engaging and SEO-friendly blog posts tailored to your audience and industry niche.",
      link: "/#blog",
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
