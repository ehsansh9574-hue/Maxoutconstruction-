// components/Layout.jsx
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/70 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">

          {/* Brand + Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="MaxOut Construction Home">
            <img
              src="/maxoutlogo.jpg"
              alt="MaxOut Construction Logo"
              width={48}
              height={48}
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

          {/* Menu */}
          <div className="flex items-center gap-6 text-sm">
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
      </header>

      {/* Page Content */}
      <main>{children}</main>

    </div>
  );
}
