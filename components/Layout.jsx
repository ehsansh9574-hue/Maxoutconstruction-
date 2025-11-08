// components/Layout.jsx
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/70 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + brand */}
          <Link href="/" className="flex items-center gap-3" aria-label="MaxOut Construction home">
            <Image
              src="/logo.jpg"           // <— uses /public/logo.jpg
              alt="MaxOut Logo"
              width={36}
              height={36}
              priority
              className="object-contain rounded-md bg-white/90 p-[2px] shadow"
            />
            <span className="font-extrabold tracking-wide">MaxOut Construction</span>
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
              style={{ background: "#0074FF" }} // Persian blue button
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer (simple, matches brand) */}
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
