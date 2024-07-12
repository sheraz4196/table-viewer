"use client";
import Image from "next/image";
import ThemeToggle from "./themes-toogler";
import { useTheme } from "next-themes";
export default function Header() {
  const { theme } = useTheme();
  return (
    <header className="p-6 flex items-center justify-between border-b">
      <div className="px-4">
        {theme === "dark" ? (
          <Image
            src={`/logo-white.png`}
            alt="Site Logo"
            width={142}
            height={17}
          />
        ) : (
          <Image src={`/logo.png`} alt="Site Logo" width={142} height={17} />
        )}
      </div>
      <ThemeToggle />
    </header>
  );
}
