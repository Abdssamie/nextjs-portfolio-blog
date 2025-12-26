import { Linkedin } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background pt-6 sm:pt-0">
      <div className="container mx-auto flex h-auto min-h-16 flex-col items-center justify-between gap-4 px-4 py-4 sm:h-16 sm:flex-row sm:gap-0 sm:py-0">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Abdessamie. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/Abdssamie"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <SiGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <SiX className="h-5 w-5" />
            <span className="sr-only">X</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abdessamaie-el-moubarki-406296310/"
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
