import PortfolioBanner from "@/components/about-me";
import Blog from "@/components/navigation/blog";
import ContactUs from "@/components/navigation/contact";
import { ProjectsGrid } from "@/components/navigation/projects/projects";
import { ServiceCardHoverEffect } from "@/components/navigation/service/service-card";
import PortfolioShowcase from "@/components/portfolio-showcase";

export default function MyPortfolio() {
  return (
    <>
      <div>
        <PortfolioShowcase />
      </div>
      <div className="relative">
        <ProjectsGrid />
      </div>
      <Blog />
      <PortfolioBanner />
      <ServiceCardHoverEffect />
      <ContactUs />
    </>
  );
}
