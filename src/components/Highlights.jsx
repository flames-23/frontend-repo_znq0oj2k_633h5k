import { motion } from "framer-motion";
import { PlayCircle, Trophy, Star } from "lucide-react";

const clips = [
  {
    title: "Ace Clutch — Valorant",
    views: "24k",
    length: "1:12",
    thumb: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Top 1% Flicks — Aim Lab",
    views: "18k",
    length: "0:49",
    thumb: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Perfect Parry — Elden Ring",
    views: "32k",
    length: "1:35",
    thumb: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Stream Highlights</h2>
            <p className="mt-2 text-zinc-400 max-w-2xl">A curated set of insane plays, wholesome moments, and community favorites.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-yellow-300">
            <Trophy className="h-5 w-5" />
            <span className="text-sm">Top Clips of the Week</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clips.map((clip, idx) => (
            <motion.a
              key={idx}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img src={clip.thumb} alt={clip.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{clip.title}</p>
                  <p className="text-xs text-zinc-400">{clip.views} views • {clip.length}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-300">
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm">
                  <PlayCircle className="h-5 w-5" /> Play Clip
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
