"use client";
import { ChevronDown, Lock, Plus, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Logo from "../logo";
import ThemeToggle from "../general/themes-toogler";

export default function Sidebar() {
  const [openFavorite, setOpenFavorite] = useState(true);
  const [allFavorites, setAllFavorites] = useState(true);
  const [vehicles, setVehicles] = useState(true);
  const [tryOpen, setTryOpen] = useState(true);
  const [hotDeals, setHotDeals] = useState(true);
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center w-72 relative py-16">
      <div className="flex flex-col gap-1.5 px-4">
        <div className="flex items-center gap-6 p-2">
          <Logo />
          <ThemeToggle className="w-6 h-6 p-1" />
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
          >
            <Image
              src={"/icons/contact.png"}
              width={16}
              height={16}
              alt="Icon"
              className="dark:brightness-200"
            />
            Contact Us
          </button>
          <button
            className="flex items-center text-xs gap-3 border-none"
            type="button"
          >
            <Image
              src={"/icons/lens.png"}
              width={16}
              height={16}
              alt="Icon"
              className="dark:brightness-200"
            />
            View All Inventory
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
            onClick={() => setVehicles(!vehicles)}
          >
            Vehicles
            <Image
              src={"/icons/chev-down.png"}
              width={6}
              height={6}
              alt="Icon"
              className={cn(vehicles ? "" : "-rotate-90")}
            />
          </button>
          {vehicles && (
            <>
              <button
                className="flex items-center gap-3 text-xs border-none !px-0"
                type="button"
              >
                <Image
                  src={"/icons/bmw.png"}
                  width={16}
                  height={16}
                  alt="Icon"
                  className="dark:brightness-200"
                />
                BMW
              </button>
              <button
                className="flex items-center gap-3 text-xs border-none !px-0"
                type="button"
              >
                <Image
                  src={"/icons/audi.png"}
                  width={16}
                  height={16}
                  alt="Icon"
                  className="dark:brightness-200"
                />
                Mercedes-Benz
              </button>
              <button
                className="flex items-center gap-3 text-xs border-none !px-0"
                type="button"
              >
                <Image
                  src={"/icons/porsche.png"}
                  width={16}
                  height={16}
                  alt="Icon"
                  className="dark:brightness-200"
                />
                Porsche
              </button>
              <button
                className="flex items-center gap-3 text-xs border-none !px-0"
                type="button"
              >
                <Image
                  src={"/icons/contact-gray.png"}
                  width={16}
                  height={16}
                  alt="Icon"
                  className="dark:brightness-200"
                />
                Audi
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
            onClick={() => setOpenFavorite(!openFavorite)}
          >
            Favorites
            <Image
              src={"/icons/chev-down.png"}
              width={6}
              height={6}
              alt="Icon"
              className={cn(openFavorite ? "" : "-rotate-90")}
            />
          </button>
          {openFavorite && (
            <button
              type="button"
              className="flex items-center gap-3 text-xs border-none bg-[#efefef] dark:bg-zinc-600/70 px-4 py-2 rounded-[4px] font-semibold"
            >
              <Image
                src={"/icons/list.png"}
                width={16}
                height={16}
                alt="Icon"
              />
              HOT DEALS
            </button>
          )}
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
            onClick={() => setAllFavorites(!allFavorites)}
          >
            Favorites
            <Image
              src={"/icons/chev-down.png"}
              width={6}
              height={6}
              alt="Icon"
              className={cn(allFavorites ? "" : "-rotate-90")}
            />
          </button>
          {allFavorites && (
            <>
              <button
                type="button"
                className="flex items-center gap-3 text-xs border-none !px-0 font-semibold"
                onClick={() => setHotDeals(!hotDeals)}
              >
                <Image
                  src={"/icons/contact-indigo.png"}
                  width={16}
                  height={16}
                  alt="Icon"
                />
                HOT DEALS
                <Lock className="fill-[#9D9D9F]" width={8} height={19} />
                <Image
                  src={"/icons/chev-down.png"}
                  width={6}
                  height={6}
                  alt="Icon"
                  className={cn(hotDeals ? "" : "-rotate-90")}
                />
              </button>

              {hotDeals && (
                <button
                  className="flex items-center gap-3 text-xs border-none bg-[#EFEFEF] dark:bg-zinc-600/70 px-4 py-2 rounded-[4px]"
                  type="button"
                >
                  <Image
                    src={"/icons/backie.png"}
                    width={16}
                    height={16}
                    alt="Icon"
                    className="dark:brightness-200"
                  />
                  BMW
                </button>
              )}
              <ul className="flex flex-col gap-3 border-l-2 border-gray-300">
                <li>
                  <button
                    className="flex items-center gap-3 text-xs border-none !px-0 ml-6"
                    type="button"
                  >
                    Mercedes
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-3 text-xs border-none !px-0 ml-6"
                    type="button"
                  >
                    Porsche
                  </button>
                </li>
              </ul>
              <button
                className="flex items-center gap-3 text-xs border-none !px-0 ml-6"
                type="button"
              >
                <Image
                  src={"/icons/audi.png"}
                  width={16}
                  height={16}
                  alt="Icon"
                  className="dark:brightness-200"
                />
                Audi
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col gap-3 p-2 mt-6">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
            onClick={() => setTryOpen(!tryOpen)}
          >
            Try
            <ChevronDown
              className={cn("size-3", cn(tryOpen ? "" : "-rotate-90"))}
            />
          </button>
          {tryOpen && (
            <>
              <button
                className="flex items-center gap-3 text-xs border-none !px-0"
                type="button"
              >
                <Plus className="size-4" />
                Share This Website
              </button>
              <button
                className="flex items-center gap-3 text-xs border-none !px-0"
                type="button"
              >
                <PlayCircle className="size-4" />
                Updated Today
              </button>
            </>
          )}
        </div>
      </div>
      <Button
        className="rounded-full fixed bottom-12 left-6"
        variant={"outline"}
        size={"icon"}
      >
        ?
      </Button>
    </div>
  );
}
