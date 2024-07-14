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
          <DrawerTrigger className="lg:hidden">
            <Image
              src={"/sidebar.png"}
              alt="sidebar"
              width={18}
              height={18}
              className=" brightness-0 dark:brightness-100"
            />
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
