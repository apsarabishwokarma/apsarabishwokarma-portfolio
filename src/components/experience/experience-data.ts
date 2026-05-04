export type ExperienceRole = {
  title: string;
  date: string;
  duration?: string;
  type?: string;
  location?: string;
  description?: string;
  skills: string;
};

export type ExperienceCompany = {
  company: string;
  tenure: string;
  location?: string;
  roles: ExperienceRole[];
};

export const experienceData: ExperienceCompany[] = [
  {
    company: "Proventus Analytics",
    tenure: "Full-time - 1 yr 2 mos",
    location: "Hybrid",
    roles: [
      {
        title: "Associate Software Engineer",
        date: "Aug 2025 - May 2026",
        duration: "10 mos",
        description:
          "Developing and maintaining responsive frontend features using modern web technologies. Collaborating with designers and backend teams to deliver reusable UI components and API integrations.",
        skills: "Front-End Development, HTML5 and +10 skills",
      },
      {
        title: "Junior Frontend Developer",
        date: "Apr 2025 - Aug 2025",
        duration: "5 mos",
        skills: "HTML5, CSS and +8 skills",
      },
    ],
  },
  {
    company: "Suvaye Technology",
    tenure: "1 yr 1 mo",
    roles: [
      {
        title: "Junior Frontend Developer",
        type: "Freelance",
        date: "Dec 2023 - Sep 2024",
        duration: "10 mos",
        location: "Remote",
        description:
          "Developed responsive and user-friendly interfaces for client projects, translated UI designs into functional pages, and collaborated remotely with teams for delivery.",
        skills: "Front-End Development, Front-end Coding and +12 skills",
      },
      {
        title: "Frontend Developer",
        type: "Internship",
        date: "Sep 2023 - Dec 2023",
        duration: "4 mos",
        skills: "Front-End Development, Figma and +11 skills",
      },
    ],
  },
];
