import { ChevronDown, Lock, Plus, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <div className="flex items-center justify-center w-56 relative">
      <div className="flex flex-col gap-1.5">
        <div className="p-2">
          <Image src={"/logo.png"} alt="Logo" width={142} height={17} />
        </div>
        <div className="flex flex-col gap-6 p-2">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
          >
            <Image
              src={"/icons/contact.png"}
              width={16}
              height={16}
              alt="Icon"
            />
            Contact Us
          </button>
          <button
            className="flex items-center text-xs gap-3 border-none"
            type="button"
          >
            <Image src={"/icons/lens.png"} width={16} height={16} alt="Icon" />
            View All Inventory
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
          >
            Vehicles
            <Image
              src={"/icons/chev-down.png"}
              width={6}
              height={6}
              alt="Icon"
            />
          </button>
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
          >
            <Image src={"/icons/bmw.png"} width={16} height={16} alt="Icon" />
            BMW
          </button>
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
          >
            <Image src={"/icons/audi.png"} width={16} height={16} alt="Icon" />
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
            />
            Audi
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
          >
            Favorites
            <Image
              src={"/icons/chev-down.png"}
              width={6}
              height={6}
              alt="Icon"
            />
          </button>
          <button
            type="button"
            className="flex items-center gap-3 text-xs border-none bg-[#efefef] px-4 py-2 rounded-sm"
          >
            <Image src={"/icons/list.png"} width={16} height={16} alt="Icon" />
            HOT DEALS
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
          >
            Favorites
            <Image
              src={"/icons/chev-down.png"}
              width={6}
              height={6}
              alt="Icon"
            />
          </button>
          <button
            type="button"
            className="flex items-center gap-3 text-xs border-none !px-0"
          >
            <Image
              src={"/icons/contact-indigo.png"}
              width={16}
              height={16}
              alt="Icon"
            />
            HOT DEALS
            <Lock className="size-4 text-zinc-600" />
            <ChevronDown className="size-3" />
          </button>
          <button
            className="flex items-center gap-3 text-xs border-none ml-6 bg-[#efefef] px-4 py-2 rounded-sm"
            type="button"
          >
            <Image
              src={"/icons/backie.png"}
              width={16}
              height={16}
              alt="Icon"
            />
            BMW
          </button>
          <ul className="flex flex-col border-l-2 border-gray-300">
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
            <Image src={"/icons/audi.png"} width={16} height={16} alt="Icon" />
            Audi
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2 mt-6">
          <button
            className="flex items-center gap-3 text-xs border-none !px-0"
            type="button"
          >
            Try
            <ChevronDown className="size-3" />
          </button>
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
        </div>
      </div>
      <Button
        className="rounded-full absolute -bottom-16 left-6"
        variant={"outline"}
        size={"icon"}
      >
        ?
      </Button>
    </div>
  );
}
