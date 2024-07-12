"use client";
import Image from "next/image";
import ThemeToggle from "./themes-toogler";
import { useTheme } from "next-themes";
export default function Header() {
  const { theme } = useTheme();
  return (
    <header className="p-6 flex items-center justify-between border-b">
      <div className="px-4">
        <Image
          src={`/logo${theme === "dark" ? "-white" : ""}.png`}
          alt="Site Logo"
          width={142}
          height={17}
        />
      </div>
      <ThemeToggle />
    </header>
  );
}
