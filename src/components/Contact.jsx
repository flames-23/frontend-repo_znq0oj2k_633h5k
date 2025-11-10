import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent! Thanks for reaching out.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 mb-4">
            <Mail className="h-3.5 w-3.5" />
            Get in touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Bookings & collabs</h2>
          <p className="mt-2 text-zinc-400">For sponsorships, tournaments, or content partnerships, drop a message below.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          <input required placeholder="Your name" className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-500" />
          <input required type="email" placeholder="Email address" className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-500" />
          <input placeholder="Company / Brand (optional)" className="sm:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-500" />
          <textarea required rows={5} placeholder="Project details" className="sm:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-500" />
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <p className="text-sm text-green-400 h-5">{status}</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500 transition">
              <Send className="h-4 w-4" /> Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
