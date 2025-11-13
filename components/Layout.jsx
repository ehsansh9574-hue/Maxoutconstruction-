// components/Layout.jsx
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/70 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">

          {/* Brand + (bulletproof) logo image */}
          <Link href="/" className="flex items-center gap-3" aria-label="MaxOut Construction home">
            <img
              src="/maxoutlogo.jpg"     // <-- must match /public/maxoutlogo.png
              alt="MaxOut Construction Logo"
              width="48"
              height="48"
              style={{
                display: "block",
                objectFit: "contain",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "3px",
              }}
            />
            <span className="font-extrabold tracking-wide text-lg">
              MaxOut Construction
            </span>
          </Link>

          {/* Nav */}
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/services/renovation" className="hover:opacity-80">
              Renovation &amp; Restoration
            </Link>
            <Link href="/services/flooring" className="hover:opacity-80">Flooring</Link>
            <Link href="/services/painting" className="hover:opacity-80">Painting</Link>
            <Link href="/services/bathrooms" className="hover:opacity-80">Bathrooms</Link>
            <Link href="/services/kitchens" className="hover:opacity-80">Kitchens</Link>
            <Link
              href="/#quote"
              className="inline-block px-4 py-2 rounded-lg font-bold"
              style={{ background: "#0074FF", color: "white" }}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main>{children}</main>

      {/* Simple footer */}
      <footer className="mt-16 border-t border-zinc-800 bg-black/80">
        <div className="max-w-[1200px] mx-auto px-4 py-10 text-sm text-zinc-300 grid gap-3 sm:flex sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} MaxOut Construction</div>
          <div className="flex items-center gap-4">
            <a href="tel:16475301049" className="hover:text-white">647-530-1049</a>
            <a href="mailto:info@maxoutconstruction.ca" className="hover:text-white">info@maxoutconstruction.ca</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
