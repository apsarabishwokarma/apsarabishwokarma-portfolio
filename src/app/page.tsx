import Footer from "@/components/footer/footer";
import Blog from "@/components/navigation/blog/blog";
import { NavbarDemo } from "@/components/navigation/navbar/navbar";
import { ProjectsGrid } from "@/components/navigation/projects/projects";
import PortfolioShowcase from "@/components/portfolio-showcase";

export default function MyPortfolio() {
  return (
    <>
      <div>
        <NavbarDemo />
      </div>

      <div>
        <PortfolioShowcase />
      </div>
      <div className="relative">
        <ProjectsGrid />
      </div>
      <Blog />
      <Footer />
    </>
  );
}
