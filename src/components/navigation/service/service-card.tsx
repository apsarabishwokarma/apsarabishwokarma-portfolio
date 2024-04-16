"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaBlogger, FaCamera, FaCode, FaMobile } from "react-icons/fa";

export function ServiceCardHoverEffect() {
  const projects = [
    {
      icon: <FaCode size={40} />,
      title: "Web Development",
      description:
        "Crafting responsive and user-friendly websites using modern technologies like React.js, Vue.js, or Angular.",
      link: "https://google.com",
    },
    {
      icon: <FaMobile size={40} />,
      title: "App Development",
      description:
        "Building native and cross-platform mobile applications for iOS and Android platforms with frameworks like React Native or Flutter.",
      link: "https://stripe.com",
    },
    {
      icon: <FaBlogger size={40} />,
      title: "Blog Posting",
      description:
        "Creating engaging and SEO-friendly blog posts tailored to your audience and industry niche.",
      link: "https://netflix.com",
    },

    {
      icon: <FaCamera size={40} />,
      title: "Photography",
      description:
        "Capturing stunning photographs that showcase your products, events, or lifestyle in the best light.",
      link: "https://meta.com",
    },
  ];

  return (
    <div className="container mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
