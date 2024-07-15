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
import { PanelRight, SlidersHorizontal } from "lucide-react";
import Logo from "../logo";
export default function Header() {
  const { theme } = useTheme();
  return (
    <header className="py-2 px-4 flex items-center justify-between border-b">
      <div className="px-4 flex items-center gap-3">
        <Logo />
      </div>
      <div className="lg:hidden flex gap-2">
        <span className="border" />
        <Drawer direction="left">
          <DrawerTrigger className="lg:hidden self-start p-1">
            <PanelRight height={18} width={18} />
          </DrawerTrigger>
          <DrawerContent className="!w-1/2 h-screen rounded-none fixed overflow-hidden overflow-y-auto flex items-center">
            <Sidebar />
          </DrawerContent>
        </Drawer>
      </div>
      <ThemeToggle />
    </header>
  );
}
