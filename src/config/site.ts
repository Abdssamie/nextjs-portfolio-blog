import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { SiGithub, SiX, SiReact, SiNextdotjs, SiTypescript, SiPython, SiPostgresql, SiDocker, SiTailwindcss, SiNodedotjs, SiGit, SiFastapi, SiRedis, SiExpress, SiDotnet } from "react-icons/si";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export interface Author {
  name: string;
  image: string;
  bio: string;
  bioParts: string[];
  originStory: string;
  education: {
    degree: string;
    school: string;
    year: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType | LucideIcon;
  ctaLabel: string;
}

export interface Skill {
  text: string;
  className: string;
}

export interface Hero {
  titlePrefix: string;
  titleSuffix: string;
  skills: Skill[];
}

export interface Contact {
  title: string;
  description: string;
  ctaIcon: IconType | LucideIcon;
  availability: string;
}

export interface TechStackItem {
  iconName: string;
  name: string;
  description: string;
  span: string;
}

export interface LottieConfig {
  src: string;
  showOnHome: boolean;
}

export interface FeaturedProjectsConfig {
  title: string;
  subtitle: string;
  maxDisplay: number;
}

export interface HeaderConfig {
  logo: {
    src: string;
    alt: string;
  };
}

export interface AIWorkflow {
  tools: string[];
  approach: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: Author;
  nav: NavItem[];
  social: {
    [key: string]: SocialLink;
  };
  hero: Hero;
  contact: Contact;
  techStack: TechStackItem[];
  lottieAnimation: LottieConfig;
  featuredProjects: FeaturedProjectsConfig;
  header: HeaderConfig;
  aiWorkflow: AIWorkflow;
}

export const iconMap: Record<string, IconType | LucideIcon> = {
  SiReact: SiReact,
  SiNextdotjs: SiNextdotjs,
  SiTypescript: SiTypescript,
  SiPython: SiPython,
  SiFastapi: SiFastapi,
  SiPostgresql: SiPostgresql,
  SiDocker: SiDocker,
  SiTailwindcss: SiTailwindcss,
  SiNodedotjs: SiNodedotjs,
  SiGit: SiGit,
  SiGithub: SiGithub,
  SiDotnet: SiDotnet,
  SiRedis: SiRedis,
  SiExpress: SiExpress,
};

const defaultTechStack: TechStackItem[] = [
  { iconName: "SiDotnet", name: "C# / .NET", description: "Backend & enterprise APIs", span: "md:col-span-1" },
  { iconName: "SiReact", name: "React", description: "UI library for building interfaces", span: "md:col-span-1" },
  { iconName: "SiNextdotjs", name: "Next.js", description: "Full-stack React framework", span: "md:col-span-1" },
  { iconName: "SiTypescript", name: "TypeScript", description: "Type-safe JavaScript", span: "md:col-span-1" },
  { iconName: "SiPython", name: "Python", description: "Backend & automation", span: "md:col-span-1" },
  { iconName: "SiFastapi", name: "FastAPI", description: "High-performance APIs", span: "md:col-span-1" },
  { iconName: "SiPostgresql", name: "PostgreSQL", description: "Relational database", span: "md:col-span-1" },
  { iconName: "SiRedis", name: "Redis", description: "Caching & real-time", span: "md:col-span-1" },
  { iconName: "SiDocker", name: "Docker", description: "Containerization", span: "md:col-span-1" },
  { iconName: "SiTailwindcss", name: "Tailwind CSS", description: "Utility-first styling", span: "md:col-span-2" },
  { iconName: "SiNodedotjs", name: "Node.js", description: "JavaScript runtime", span: "md:col-span-1" },
  { iconName: "SiGit", name: "Git", description: "Version control", span: "md:col-span-1" },
  { iconName: "SiExpress", name: "Express", description: "Node.js web framework", span: "md:col-span-1" },
];

export const siteConfig: SiteConfig = {
  name: "Abdessamie",
  title: "Abdessamie - Full Stack Developer",
  description: "Chemical engineering student turned self-taught full-stack developer. I build automation systems and scalable applications using AI to solve real problems.",
  url: "https://abdessamie.dev",
  author: {
    name: "Abdssamie",
    image: "/profile.jpeg",
    bio: "I specialize in building automation systems and helping businesses create powerful internal tools that streamline their operations. From client-facing applications to back-office workflows, I turn complex manual processes into elegant, automated solutions.",
    bioParts: [
      "I'm a <strong>4th year Chemical Engineering student</strong> at ENSC Kenitra who's self-taught in software development. I started learning to code because I wanted to build software solutions that solve real problems in my field and beyond.",
      "What makes me different? My <strong>engineering mindset</strong>. I don't just write code—I focus on <strong>architecture, maintainability, testability, and compliance</strong>. In the age of AI, I shifted from just coding to designing systems that are scalable and trustworthy.",
      "I leverage AI tools like <strong>OpenCode, Antigravity, and Plannotator</strong> to speed up development while maintaining engineering standards. I never outsource my thinking—I use AI to execute my thoughts faster, not to think for me.",
    ],
    originStory: "Started learning to code to build software solutions for chemical engineering problems. Built my first project—a website for my school's AI club—while exploring how software can solve real-world problems. Now I build full-stack applications with a focus on automation, scalability, and engineering quality.",
    education: {
      degree: "Chemical Engineering",
      school: "ENSC Kenitra",
      year: "Graduating 2026",
    },
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: {
      label: "GitHub",
      href: "https://github.com/Abdssamie",
      icon: SiGithub,
      ctaLabel: "Check my code",
    },
    x: {
      label: "X",
      href: "https://x.com/Abdessamie86831",
      icon: SiX,
      ctaLabel: "Follow me",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdessamaie-el-moubarki-406296310/",
      icon: Linkedin,
      ctaLabel: "Connect professionally",
    },
    email: {
      label: "Email",
      href: "mailto:abdessamie.elmoubarki@gmail.com",
      icon: Mail,
      ctaLabel: "Send me an email",
    }
  },
  hero: {
    titlePrefix: "Building",
    titleSuffix: "Solutions",
    skills: [
      { text: "C# / .NET", className: "bg-purple-600" },
      { text: "React & Next.js", className: "bg-sky-500" },
      { text: "C# / .NET", className: "bg-purple-600" },
      { text: "Full Stack Apps", className: "bg-emerald-500" }
    ]
  },
  contact: {
    title: "Let's Build Something Together",
    description: "Have a project in mind? Need help automating your workflows or building scalable applications? I'm open to opportunities where I can solve real problems with software.",
    ctaIcon: MessageCircle,
    availability: "Open to opportunities"
  },
  techStack: defaultTechStack,
  lottieAnimation: {
    src: "/Web Development.lottie",
    showOnHome: true,
  },
  featuredProjects: {
    title: "Featured Projects",
    subtitle: "Real applications solving real problems.",
    maxDisplay: 3,
  },
  header: {
    logo: {
      src: "/abdessamie-personal-logo.png",
      alt: "Personal logo",
    },
  },
  aiWorkflow: {
    tools: ["OpenCode", "Antigravity", "Plannotator"],
    approach: "I use AI as a force multiplier—not to replace my thinking, but to execute faster. Every AI-generated plan goes through my engineering standards review. I verify every line of code and never blindly trust AI output.",
  },
};

export function getTechStackItems(customTechStack?: TechStackItem[]): TechStackItem[] {
  return customTechStack ?? siteConfig.techStack;
}
