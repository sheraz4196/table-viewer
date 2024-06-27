import { Heart, MessageCircle } from "lucide-react";
export default function Header() {
  return (
    <header className="py-8  border-b border-zinc-600">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="h-6 w-48 bg-red-400"></div>
        <div className="flex items-center gap-4">
          <Heart className="fill-red-400 text-red-400" />
          <MessageCircle />
          <div className="h-14 w-14 bg-zinc-300 text-3xl rounded-full flex items-center justify-center">
            S
          </div>
        </div>
      </div>
    </header>
  );
}
