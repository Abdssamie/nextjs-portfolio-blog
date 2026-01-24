import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export interface Author {
  name: string;
  image: string;
  bio: string;
  bioParts: string[];
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
}

export const siteConfig: SiteConfig = {
  name: "Abdessamie",
  title: "Abdessamie - Full Stack Developer",
  description: "I am a Full Stack Developer specializing in React, Next.js, TypeScript, C#, .NET, and Avalonia UI. I turn complex problems into scalable, user-friendly applications.",
  url: "https://abdessamie.dev",
  author: {
    name: "Abdessamie",
    image: "/profile.jpeg",
    bio: "I specialize in building automation systems and helping businesses create powerful internal tools that streamline their operations. From client-facing applications to back-office workflows, I turn complex manual processes into elegant, automated solutions.",
    bioParts: [
      "I specialize in building <strong class='text-slate-900 dark:text-white'>automation systems</strong> and helping businesses create powerful <strong class='text-slate-900 dark:text-white'>internal tools</strong> that streamline their operations. From client-facing applications to back-office workflows, I turn complex manual processes into elegant, automated solutions.",
      "Whether it's integrating APIs, building custom dashboards, or designing systems that scale with your business—I'm passionate about creating technology that works <em>for</em> you, not the other way around.",
      "I'm naturally curious, quietly confident, and always exploring new ways to make businesses more efficient through thoughtful automation and clean code."
    ]
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
      { text: "React & Next.js", className: "bg-sky-500" },
      { text: "C# & .NET", className: "bg-purple-600" },
      { text: "Full Stack Apps", className: "bg-orange-500" }
    ]
  },
  contact: {
    title: "Let's Build Something Together",
    description: "Have a project in mind? Need help automating your workflows or building internal tools? I'd love to hear from you.",
    ctaIcon: MessageCircle,
    availability: "Available for new projects"
  }
};
