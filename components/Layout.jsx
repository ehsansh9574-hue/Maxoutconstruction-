// components/Layout.jsx
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/maxoutlogo.jpg"
              alt="MaxOut Construction Logo"
              className="w-10 h-10 rounded-lg bg-white p-1"
            />
            <span className="font-extrabold tracking-wide text-lg">
              MaxOut Construction
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/services/restoration" className="hover:opacity-80">
              Renovation & Restoration
            </Link>
            <Link href="/services/flooring" className="hover:opacity-80">
              Flooring
            </Link>
            <Link href="/services/painting" className="hover:opacity-80">
              Painting
            </Link>
            <Link href="/services/bathrooms" className="hover:opacity-80">
              Bathrooms
            </Link>
            <Link href="/services/kitchens" className="hover:opacity-80">
              Kitchens
            </Link>

            <Link
              href="/contact"
              className="inline-block px-4 py-2 rounded-lg font-bold"
              style={{ background: "#0074FF" }}
            >
              Get a Quote
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 px-4 py-4 space-y-4 border-t border-zinc-800">
            <Link href="/services/restoration" className="block">
              Renovation & Restoration
            </Link>
            <Link href="/services/flooring" className="block">
              Flooring
            </Link>
            <Link href="/services/painting" className="block">
              Painting
            </Link>
            <Link href="/services/bathrooms" className="block">
              Bathrooms
            </Link>
            <Link href="/services/kitchens" className="block">
              Kitchens
            </Link>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 rounded-lg font-bold"
              style={{ background: "#0074FF" }}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>

      {/* Page content */}
      {children}
    </div>
  );
}
