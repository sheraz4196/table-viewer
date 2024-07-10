import {
  Car,
  CarFront,
  CarTaxiFront,
  ChevronDown,
  ClipboardList,
  Fullscreen,
  Nfc,
  Lock,
  Plus,
  Video,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <div className="flex items-center justify-center w-56">
      <div className="flex flex-col gap-1.5">
        <div className="p-2">
          <Image src={"/logo.png"} alt="Logo" width={142} height={17} />
        </div>
        <div className="flex flex-col gap-6 p-2">
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            <Nfc className="size-4" />
            Contact Us
          </button>
          <button
            className="flex items-center text-sm gap-3 font-bold border-none"
            type="button"
          >
            <Fullscreen className="size-4" />
            Contact Us
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            Vehicles
            <ChevronDown className="size-3" />
          </button>
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            <Car className="size-4" />
            BMW
          </button>
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            <CarTaxiFront className="size-4" />
            Mercedes-Benz
          </button>
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            <CarFront className="size-4" />
            Porsche
          </button>
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            <CarFront className="size-4" />
            Audi
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            Favorites
            <ChevronDown className="size-3" />
          </button>
          <button
            type="button"
            className="flex items-center gap-3 text-sm border-none !px-0"
          >
            <ClipboardList className="size-4 text-indigo-700" />
            HOT DEALS
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            Favorites
            <ChevronDown className="size-3" />
          </button>
          <button
            type="button"
            className="flex items-center gap-3 text-sm border-none !px-0"
          >
            <ClipboardList className="size-4 text-indigo-700" />
            HOT DEALS
            <Lock className="size-4 text-zinc-600" />
            <ChevronDown className="size-3" />
          </button>
          <button
            className="flex items-center gap-3 text-sm border-none !px-0 ml-6"
            type="button"
          >
            <Car className="size-4" />
            BMW
          </button>
          <ul className="flex flex-col border-l-2 border-gray-300">
            <li>
              <button
                className="flex items-center gap-3 text-sm border-none !px-0 ml-6"
                type="button"
              >
                Mercedes
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-3 text-sm border-none !px-0 ml-6"
                type="button"
              >
                Por
              </button>
            </li>
          </ul>
          <button
            className="flex items-center gap-3 text-sm border-none !px-0 ml-6"
            type="button"
          >
            <Car className="size-4" />
            Audi
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2 mt-6">
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            Try
            <ChevronDown className="size-3" />
          </button>
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            <Plus className="size-4" />
            Share This Website
          </button>
          <button
            className="flex items-center gap-3 text-sm border-none !px-0"
            type="button"
          >
            <PlayCircle className="size-4" />
            Updated Today
          </button>
        </div>
      </div>
    </div>
  );
}
