"use client";
import { History } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
export default function Header() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <header className="p-6 flex items-center justify-between border-b">
      <div className="px-4">
        <Image src={"/logo.png"} alt="Site Logo" width={142} height={17} />
      </div>
      <div className="flex px-4 gap-6">
        <span></span>
        <span className="self-stretch border" />
        <Button
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <History />
        </Button>
      </div>
    </header>
  );
}
