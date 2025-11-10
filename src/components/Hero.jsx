import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            Live now: Cyber Arena
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            I’m Nova — streamer, gamer, and digital artist.
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-xl">
            Welcome to my world of neon vibes and high APM. Dive into 3D interactions, stream highlights, and behind-the-scenes content.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#highlights" className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500 transition">
              Watch Highlights
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
