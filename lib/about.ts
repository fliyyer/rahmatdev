export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
};

export type Training = {
  org: string;
  program: string;
  period: string;
};

export type TechGroup = {
  category: string;
  items: string[];
};

export const profile = {
  name: "Rahmat Hidayat",
  location: "Tangerang, Banten",
  email: "rahmathidayat290915@gmail.com",
  github: "https://github.com/fliyyer",
  githubLabel: "github.com/fliyyer",
  linkedin: "https://linkedin.com/in/rahmat-hidayat29",
  linkedinLabel: "linkedin.com/in/rahmat-hidayat",
  summary:
    "Front-end developer with over 3 years of experience, specializing in building user-friendly and responsive web applications. Skilled in utilizing modern technologies like React.js and Tailwind CSS to create clean, interactive interfaces that enhance user experience while streamlining development.",
};

export const experiences: Experience[] = [
  {
    company: "Seryu Cargo",
    location: "Jakarta",
    role: "Frontend Engineer",
    period: "Juli 2025 – Present",
    points: [
      "Built and maintained web modules using React.js, TypeScript, Ant Design, and Tailwind CSS.",
      "Developed responsive UI components and improved user experience across multiple internal systems.",
      "Wrote Cypress tests for UI flows to ensure quality and stability before deployment.",
      "Collaborated with backend and design teams to deliver features on time.",
      "Used GitLab, Docker, and Refine.dev for development and CI/CD workflows.",
    ],
  },
  {
    company: "Ray White Indonesia",
    location: "Jakarta",
    role: "Frontend Developer",
    period: "September 2023 – Juli 2025",
    points: [
      "Built applications with React.js and Tailwind CSS.",
      "Expanded the appearance of the Brand Central application.",
      "Integrated Document Builder API into Brand Central.",
      "Developed and maintained the Ray White Indonesia website.",
    ],
  },
  {
    company: "Maritim Muda Nusantara",
    location: "Jakarta",
    role: "Web Developer",
    period: "February 2023 – July 2023",
    points: [
      "Redesigned the website user interface.",
      "Built applications with React.js and Tailwind CSS.",
      "Developed website Maritime Preneur.",
      "Developed and maintained Blue Economy Company Index (BecDex).",
    ],
  },
  {
    company: "Fastwork.id",
    location: "Freelance",
    role: "Web Developer",
    period: "February 2023 – Present",
    points: [
      "Converted Figma designs into pixel-perfect websites.",
      "Built responsive web pages using HTML, CSS, JavaScript, and React.js.",
      "Designed UI components with Tailwind CSS for consistent and scalable styling.",
      "Integrated Firebase, Express.js, Prisma, and MySQL for full-stack projects.",
    ],
  },
  {
    company: "Dicoding Indonesia",
    location: "Bandung",
    role: "Frontend Web Developer",
    period: "August 2022 – December 2022",
    points: [
      "Learned web application development with React.",
      "Completed Become a Front-End Web Developer Expert path.",
      "Built a Capstone Project as the final deliverable.",
    ],
  },
];

export const education = {
  university: "Universitas Raharja",
  degree: "Bachelor of Science in Informatics Engineering",
  gpa: "3.78 / 4.00",
  period: "September 2020 – October 2024",
  location: "Tangerang",
};

export const trainings: Training[] = [
  {
    org: "Progate x KOMINFO",
    program: "Mobile App Development — React Native",
    period: "May 2024 – Juli 2024",
  },
  {
    org: "Indosat Ooredoo Hutchison Digital Camp (ID Camp)",
    program: "Frontend Web Developer",
    period: "May 2022 – September 2022",
  },
];

export const techStack: TechGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Express.js", "Nest.js", "Prisma", "MySQL", "MongoDB"],
  },
  {
    category: "State & Data",
    items: ["Redux Toolkit", "React Query"],
  },
  {
    category: "UI & Styling",
    items: ["Tailwind CSS", "Shadcn UI", "Ant Design", "Material UI"],
  },
  {
    category: "Testing",
    items: ["Cypress", "Jest", "React Testing Library", "Vitest"],
  },
  {
    category: "Tools",
    items: ["Figma", "Docker", "GitLab", "JIRA", "Notion"],
  },
];
