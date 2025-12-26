"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/lib/providers/themer-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" type="button" disabled>
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const renderIcon = () => {
    if (theme === "light") {
      return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    }
    if (theme === "dark") {
      return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    }
    return <Monitor className="h-[1.2rem] w-[1.2rem]" />;
  };

  return (
    <Button variant="outline" size="icon" onClick={cycleTheme} type="button">
      {renderIcon()}
    </Button>
  );
}
