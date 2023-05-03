export interface Category {
  label: string;
  value: string;
  isActive: boolean;
}

export interface PortfolioItem {
  image: string;
  title: string;
  categories: string[];
  githubLink: string;
}

export const categories: Category[] = [
  { label: "All", value: "", isActive: false },
  { label: "Branding", value: "Branding", isActive: true },
  { label: "Code", value: "Code", isActive: false },
  { label: "Marketing", value: "Marketing", isActive: false },
];

export const portfolioList: PortfolioItem[] = [
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_4_1.png",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
    githubLink: "https://github.com/example/web-portal-dev",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio24.jpg",
    title: "Marketing",
    categories: ["Digital Marketing"],
    githubLink: "https://github.com/example/marketing",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_4_3.png",
    title: "Designing",
    categories: ["Product Design"],
    githubLink: "https://github.com/example/designing",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio21.jpg",
    title: "Management",
    categories: ["Project Manager"],
    githubLink: "https://github.com/example/management",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_4_4.png",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
    githubLink: "https://github.com/example/web-portal-dev-2",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio22.jpg",
    title: "Photography",
    categories: ["Cinematography"],
    githubLink: "https://github.com/example/photography",
  },
];
