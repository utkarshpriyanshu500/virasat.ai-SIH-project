import Link from "next/link";
import { ARCHIVE_URL } from "@/lib/config";

export default function Navbar() {
  return (
    <nav className="flex h-22 items-center justify-between bg-white/90 px-8 shadow-sm backdrop-blur-md">
      <Link href="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Virasat.ai — Artifacts of India"
          className="h-22 w-auto object-contain"
        />
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link
          href="/"
          className="hover:text-[#7b3f00]"
        >
          Home
        </Link>

        <Link
          href="/explore"
          className="hover:text-[#7b3f00]"
        >
          Explore
        </Link>

        <a
          href={ARCHIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-[#7b3f00] hover:text-[#5f3000] transition"
          title="Explore Virasat Image Archive (Wikimedia Commons Discovery)"
        >
          <span>Image Archive</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>

        <Link
          href="/about"
          className="hover:text-[#7b3f00]"
        >
          About
        </Link>

        {/* Admin */}
        <Link
          href="/admin"
          className="rounded-full border border-[#7b3f00] px-4 py-2 text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
        >
          Admin
        </Link>

        {/* Login */}
        <Link
          href="/login"
          className="rounded-full border border-[#7b3f00] px-4 py-2 text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
        >
          Login
        </Link>

        {/* Sign Up */}
        <Link
          href="/signup"
          className="rounded-full bg-[#7b3f00] px-4 py-2 text-white transition hover:bg-[#5f3000]"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}