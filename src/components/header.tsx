import { NavigationDataProvider } from "./navigation/nav-data-provider";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";

/**
 * Site Header Component
 * 
 * Renders the sticky header with logo, navigation menu, and theme toggle.
 * Uses NavigationDataProvider to fetch navigation content from MDX files.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xs supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/abdessamie-personal-logo.png"
            alt="Abdessamie"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight">Abdessamie</span>
        </Link>
        <NavigationDataProvider />
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}