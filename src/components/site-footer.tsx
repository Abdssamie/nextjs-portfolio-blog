import { Linkedin } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex h-16 flex-col items-center justify-between px-4 sm:flex-row">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Abdessamie. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <SiGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <SiX className="h-5 w-5" />
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
