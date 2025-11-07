import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-zinc-200">
        <nav className="container py-3 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-xl" style={{color:"#1C39BB"}}>
            MaxOut Construction
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

      {/* Page content */}
      <main className="container py-10">{children}</main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-16 py-8 text-sm text-zinc-600">
        <div className="container">
          <p>© {new Date().getFullYear()} MaxOut Construction — Toronto & GTA</p>
          <p><a href="tel:16475301049">647-530-1049</a> • <a href="mailto:info@maxoutconstruction.ca">info@maxoutconstruction.ca</a></p>
        </div>
      </footer>
    </div>
  );
}
