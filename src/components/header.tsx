import { NavigationDataProvider } from "./navigation/nav-data-provider";
import { MobileNav } from "./navigation/mobile-nav";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * Site Header Component
 *
 * Renders the sticky header with logo, navigation menu, and theme toggle.
 * Uses NavigationDataProvider for desktop and MobileNav for small screens.
 */

const mobileNavItems = siteConfig.nav;

const socialLinks = [
  {
    label: siteConfig.social.github.label,
    href: siteConfig.social.github.href,
    icon: <siteConfig.social.github.icon className="h-5 w-5" />,
  },
  {
    label: siteConfig.social.x.label,
    href: siteConfig.social.x.href,
    icon: <siteConfig.social.x.icon className="h-5 w-5" />,
  },
  {
    label: siteConfig.social.linkedin.label,
    href: siteConfig.social.linkedin.href,
    icon: <siteConfig.social.linkedin.icon className="h-5 w-5" />,
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xs supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <Image
            src="/abdessamie-personal-logo.png"
            alt={siteConfig.name}
            width={36}
            height={36}
            className="h-8 w-8 rounded-full sm:h-9 sm:w-9"
          />
          <span className="text-lg font-bold tracking-tight sm:text-xl">{siteConfig.name}</span>
        </Link>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden md:block">
          <NavigationDataProvider />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground hidden sm:block"
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
          <ModeToggle />
          {/* Mobile navigation - hidden on desktop */}
          <MobileNav items={mobileNavItems} socials={socialLinks} />
        </div>
      </div>
    </header>
  );
}