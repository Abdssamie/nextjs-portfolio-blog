import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background pt-6 sm:pt-0 ">
      <div className="container mx-auto flex h-auto min-h-16 flex-col items-center justify-center gap-4 px-4 py-4 sm:h-16 sm:flex-row sm:gap-0 sm:py-0">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
