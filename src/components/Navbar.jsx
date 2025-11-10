import { Gamepad2, Twitch, Youtube, Twitter } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/20 text-purple-300">
            <Gamepad2 className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">NovaPlays</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#highlights" className="hover:text-white transition">Highlights</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a aria-label="Twitch" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-200 transition">
            <Twitch className="h-5 w-5" />
          </a>
          <a aria-label="YouTube" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-200 transition">
            <Youtube className="h-5 w-5" />
          </a>
          <a aria-label="Twitter" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-200 transition">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
