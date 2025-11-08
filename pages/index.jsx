export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.78)), url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* NAV */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 48px"
      }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 800 }}>
          <span>MaxOut</span><span>logo</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Renovation &amp; Restoration</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Flooring</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Painting</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Bathrooms</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Kitchens</a>
          <a
            href="#quote"
            style={{
              background: "#2563EB",      // Persian-blue family
              padding: "10px 18px",
              borderRadius: 10,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none"
            }}
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO COPY */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "160px 24px 60px" }}>
        <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1 }}>
          Toronto’s Elite Renovation Experts
        </h1>
        <h2 style={{ fontSize: 34, fontWeight: 800, color: "#1D4ED8", marginTop: 8 }}>
          MaxOut Construction
        </h2>
        <p style={{ marginTop: 14, opacity: 0.92 }}>
          Renovation &amp; Restoration • Flooring • Painting • Bathrooms • Kitchens
        </p>
        <a
          href="#quote"
          style={{
            display: "inline-block",
            marginTop: 28,
            background: "#1E40AF",
            padding: "14px 36px",
            borderRadius: 12,
            color: "#fff",
            textDecoration: "none",
            fontWeight: 800
          }}
        >
          Get a Quote
        </a>
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "18px 12px", opacity: 0.9 }}>
        © 2025 MaxOut Construction Inc. · Toronto–GTA · 647-530-1049 · info@maxoutconstruction.ca
      </footer>
    </div>
  );
}
