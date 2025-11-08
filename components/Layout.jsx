import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/70 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="MaxOut Construction Logo"
              width="40"
              height="40"
              style={{
                borderRadius: "6px",
                backgroundColor: "white",
                padding: "3px",
              }}
            />
            <span className="font-extrabold tracking-wide">MaxOut Construction</span>
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/services/renovation" className="hover:opacity-80">
              Renovation &amp; Restoration
            </Link>
            <Link href="/services/flooring" className="hover:opacity-80">Flooring</Link>
            <Link href="/services/painting" className="hover:opacity-80">Painting</Link>
            <Link href="/services/bathrooms" className="hover:opacity-80">Bathrooms</Link>
            <Link href="/services/kitchens" className="hover:opacity-80">Kitchens</Link>
            <Link href="/#quote" className="inline-block px-4 py-2 rounded-lg font-bold" style={{ background: "#0074FF" }}>
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
