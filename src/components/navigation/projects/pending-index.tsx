"use client";
import portfolioList from "@/data/portfolio-pendinglist";
import { useState } from "react";
import { Button } from "../../ui/button";

const categories = [
  { label: "All", value: "", isActive: true },
  { label: "Branding", value: "Branding", isActive: false },
  { label: "Code", value: "Code", isActive: false },
  { label: "Marketing", value: "Marketing", isActive: false },
  { label: "Photography", value: "Photography", isActive: false },
  { label: "Development", value: "Development", isActive: false },
];

export default function MyProjects() {
  const [activeCategory, setActiveCategory] = useState("");

  // Filter the portfolio list based on the active category
  const filteredPortfolioList = portfolioList.filter((portfolio) =>
    activeCategory ? portfolio.categories.includes(activeCategory) : true
  );

  return (
    <section className="container mx-auto py-10 md:py-20 text-[#373572]">
      <div className="container px-4">
        <div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
          <div className="col-span-12 text-center mt-6">
            {categories.map((category) => (
              <Button
                onClick={() => setActiveCategory(category.value)}
                className={`m-1 py-2 px-5 border border-green-600 text-white hover:bg-green-600  rounded-md ${
                  activeCategory === category.value && "bg-green-600 text-white"
                }`}
                key={category.value}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {filteredPortfolioList.map((portfolio) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              key={portfolio.title}
            >
              <div className="group relative text-center">
                <figure
                  onClick={() => {
                    window.open(portfolio.link);
                  }}
                  className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[4px] border border-white/[0.2]"
                >
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="max-w-full w-full h-auto rounded-xl"
                  />
                  <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-white bg-opacity-70  bg-blur-sm bg-saturate-200 translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-center p-6">
                    <h5 className="text-xl font-medium mb-2">
                      {portfolio.title}
                    </h5>
                    <p className="mb-0">{portfolio.categories.join(", ")}</p>
                  </div>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
