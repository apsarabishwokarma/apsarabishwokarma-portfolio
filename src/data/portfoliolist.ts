export interface Category {
  label: string;
  value: string;
  isActive: boolean;
}

export interface PortfolioItem {
  image: string;
  title: string;
  subtitle: string;
  categories: string[];
  liveLink: string;
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
    image: "https://images.unsplash.com/photo-1636231945376-3d40fdcbc462",
    title: "Eureka-Consultancy",
    subtitle:
      "Eureka is a trusted Institution,offering top-tier study-abroad consulting for students across Nepal.",
    categories: ["Web Portal Design "],
    liveLink: "https://eurekainternational.com.np/",
    githubLink: "https://github.com/apsarabishwokarma/consultancy-eureka",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio25.jpg",
    title: "ShopHub - Ecommerce Website",
    subtitle:
      "E-commerce platform offering a wide range of products including clothings, perfumes and electronics",
    categories: ["Web Portal Design "],
    liveLink: "https://shophub-ecommerce.vercel.app/",
    githubLink: "https://github.com/apsarabishwokarma/ecommerce-shophub",
  },
  {
    image: "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f",
    title: "Javascript Projects",
    subtitle:
      "A collection of web development projects on HTML, CSS, and JavaScript from beginners to advanced",
    categories: ["Web Portal Design "],
    liveLink: "https://apsarabishwokarma.github.io/javascript-projects/",
    githubLink: "https://github.com/apsarabishwokarma/javascript-projects",
  },
  {
    image: "https://images.unsplash.com/photo-1525113990976-399835c43838",
    title: "RealEstate-Gharsewa",
    subtitle:
      "GharSewa is a platform for managing real estate listings, facilitating property buying,selling and renting processes.",
    categories: ["Project Manager"],
    liveLink: "https://gharsewa.vercel.app/",
    githubLink: "https://github.com/apsarabishwokarma/Gharsewa-RealEstate",
  },
  {
    image: "https://images.unsplash.com/photo-1547583073-4b4fe00854c0",
    title: " Evento Event Management Platform",
    subtitle:
      "Evento is an Event management, platform Creating,publishing Events and staffing platform.",
    categories: ["UI/UX Design"],
    liveLink: "https://github.com/Roopaish/evento",
    githubLink: "https://github.com/Roopaish/evento",
  },
  {
    image: "https://images.unsplash.com/photo-1587932775991-708a20af2cc2",
    title: "Photography",
    subtitle: "",
    categories: ["Cinematography"],
    liveLink: "https://apsarabishwokarma.github.io/javascript-projects/",
    githubLink: "https://github.com/example/photography",
  },
];
