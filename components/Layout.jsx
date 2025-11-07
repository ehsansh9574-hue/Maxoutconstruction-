import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/70 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="MaxOut logo" width={34} height={34} className="rounded" />
            <span className="font-extrabold tracking-wide">MaxOut Construction</span>
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/services/restoration" className="hover:opacity-80">
              Renovation &amp; Restoration
            </Link>
            <Link href="/services/flooring" className="hover:opacity-80">Flooring</Link>
            <Link href="/services/painting" className="hover:opacity-80">Painting</Link>
            <Link href="/services/bathrooms" className="hover:opacity-80">Bathrooms</Link>
            <Link href="/services/kitchens" className="hover:opacity-80">Kitchens</Link>
            <Link href="/contact" className="inline-block px-4 py-2 rounded-lg font-bold"
              style={{ background:"#0074FF" }}>
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      {/* Page */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-[1200px] mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-zinc-300 text-sm">
          <div>© {new Date().getFullYear()} MaxOut Construction Inc.<br/>Toronto – GTA | All Rights Reserved</div>
          <div className="space-y-1">
            <div><b>Phone:</b> <a href="tel:16475301049" className="hover:opacity-80">647-530-1049</a></div>
            <div><b>Email:</b> <a href="mailto:info@maxoutconstruction.ca" className="hover:opacity-80">info@maxoutconstruction.ca</a></div>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0074FF"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/></svg>
            </a>
            <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0074FF"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0074FF"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 5.9V24h-4v-6.8c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V24h-4V8z"/></svg>
            </a>
            <a aria-label="Google Maps" href="https://maps.google.com" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0074FF"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
