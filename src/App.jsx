import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NovaPlays — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#highlights" className="hover:text-white transition">Highlights</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
