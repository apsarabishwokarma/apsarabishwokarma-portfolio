"use client";

import {
  Category,
  PortfolioItem,
  categories as initialCategories,
  portfolioList,
} from "@/data/projects";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const Portfolio = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [filteredPortfolio, setFilteredPortfolio] =
    useState<PortfolioItem[]>(portfolioList);

  const handleCategoryClick = (value: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.value === value
          ? { ...cat, isActive: !cat.isActive }
          : { ...cat, isActive: false }
      )
    );

    if (value === "") {
      setFilteredPortfolio(portfolioList); // Show all projects
    } else {
      setFilteredPortfolio(
        portfolioList.filter((portfolio) =>
          portfolio.categories.includes(value)
        )
      );
    }
  };

  return (
    <section className="container mx-auto pt-20">
      <div className="pt-14 md:pt-24 pb-52 md:pb-64">
        <div className="container px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 text-center lg:text-start">
              <p className="max-w-7xl mb-4 mx-auto  w-full  text-neutral-400">
                portfollio
              </p>
              <h1 className="text-white md:text-xl text-lg font-normal">
                {" "}
                &darr; Featured Projects
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-6 text-center lg:text-end mt-6 lg:mt-0">
              {categories.map((category, i) => (
                <button
                  onClick={() => handleCategoryClick(category.value)}
                  className={
                    category.isActive
                      ? "btn border border-white py-2 px-4 bg-white text-black rounded-md duration-300 m-1"
                      : "btn border border-white py-2 px-4 hover:bg-white text-white hover:text-black rounded-md duration-300 m-1"
                  }
                  key={i}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8 container px-4 -mt-52">
        <div className="grid grid-cols-12 gap-x-6">
          {filteredPortfolio.map((portfolio, i) => (
            <div
              className={`col-span-12 md:col-span-4 ${
                i % 3 === 0 && "md:mt-4 lg:mt-6 md:pt-6 lg:pt-6"
              } ${i % 3 === 1 && "md:mt-4 lg:mt-6"} `}
              key={i}
            >
              <div className="rounded-lg overflow-hidden relative group mt-4 shadow-md">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-full rounded-lg"
                />
                <div className="absolute left-2 right-2 bottom-2 rounded-lg bg-white bg-opacity-80 opacity-100 transition duration-300 text-center p-3">
                  <h5 className="text-lg font-medium mb-1">
                    {portfolio.title}
                  </h5>
                  <p className="text-sm mb-3">
                    {portfolio.categories.join(", ")}
                  </p>
                  {/* GitHub Button */}
                  <a
                    href={portfolio.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
