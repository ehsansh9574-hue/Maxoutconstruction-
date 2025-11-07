import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-black/70 backdrop-blur border-b border-zinc-800">
        <nav className="container py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={36} height={36} alt="MaxOut logo" className="shadow-glow rounded" />
            <span className="font-extrabold text-lg tracking-wide">MaxOut Construction</span>
          </Link>

          <div className="flex items-center gap-5 text-sm">
            <Link href="/services/restoration" className="hover:opacity-80">Restoration</Link>
            <Link href="/services/flooring" className="hover:opacity-80">Flooring</Link>
            <Link href="/services/painting" className="hover:opacity-80">Painting</Link>
            <Link href="/services/demolition" className="hover:opacity-80">Demolition</Link>
            <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="">{children}</main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16 py-8 text-sm text-zinc-300">
        <div className="container">
          <p>© {new Date().getFullYear()} MaxOut Construction — Toronto & GTA</p>
          <p><a href="tel:16475301049">647-530-1049</a> • <a href="mailto:info@maxoutconstruction.ca">info@maxoutconstruction.ca</a></p>
        </div>
      </footer>
    </div>
  );
}
