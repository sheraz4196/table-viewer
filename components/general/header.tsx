"use client";
import Image from "next/image";
import ThemeToggle from "./themes-toogler";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Sidebar from "../siderbar/sidebar";
import { useTheme } from "next-themes";
import { SlidersHorizontal } from "lucide-react";
export default function Header() {
  const { theme } = useTheme();
  return (
    <header className="p-6 flex items-center justify-between border-b">
      <div className="px-4 flex items-center gap-3">
        <Drawer direction="left">
          <DrawerTrigger>
            <SlidersHorizontal className="size-4" />
          </DrawerTrigger>

          <DrawerContent className="!w-1/2 h-screen rounded-none fixed overflow-hidden overflow-y-auto flex items-center">
            <Sidebar />
          </DrawerContent>
        </Drawer>
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
