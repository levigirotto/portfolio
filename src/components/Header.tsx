import LogoDark from "/logo-no-background-dark.png";
import LogoLight from "/logo-no-background-light.png";
import ThemeToggle from "@/components/ThemeToggle.tsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  const currentTheme = theme === "system" ? systemTheme : theme;
  const logo = currentTheme === "dark" ? LogoDark : LogoLight;

  return (
    <header className="fixed top-0 left-0 z-30 p-3 bg-background h-12 w-full">
      <div className="h-full mx-auto flex justify-between items-center">
        <div className="cursor-pointer rounded hover:bg-background2">
          <img src={logo} alt="My Logo" className="h-8 w-auto" />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
