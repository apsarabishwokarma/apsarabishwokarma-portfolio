import Blog from "@/components/navigation/blog/blog";
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
      <ServiceCardHoverEffect />
    </>
  );
}
