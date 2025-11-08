export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
          fontWeight: 600,
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center", fontWeight: 800 }}>
          <img src="/logo.png" alt="MaxOut Logo" style={{ height: 40 }} />
          <span style={{ fontSize: 18 }}>MaxOut Construction</span>
        </div>

        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Renovation & Restoration</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Flooring</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Painting</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Bathrooms</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Kitchens</a>
          <a
            href="#quote"
            style={{
              background: "#2563EB",
              padding: "10px 20px",
              borderRadius: 10,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              boxShadow: "0 0 12px rgba(37,99,235,0.6)",
            }}
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div
        style={{
          textAlign: "center",
          marginTop: "160px",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontSize: 54,
            fontWeight: 800,
            marginBottom: 10,
            letterSpacing: "1px",
          }}
        >
          Toronto’s Elite Renovation Experts
        </h1>
        <h2
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: "#3B82F6",
            marginBottom: 12,
          }}
        >
          MaxOut Construction
        </h2>
        <p style={{ opacity: 0.95, fontSize: 18 }}>
          Renovation & Restoration • Flooring • Painting • Bathrooms • Kitchens
        </p>
        <a
          href="#quote"
          style={{
            display: "inline-block",
            marginTop: 30,
            background: "#1D4ED8",
            padding: "14px 36px",
            borderRadius: 12,
            color: "#fff",
            textDecoration: "none",
            fontWeight: 800,
            boxShadow: "0 0 15px rgba(29,78,216,0.7)",
          }}
        >
          Get a Quote
        </a>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "25px 12px",
          opacity: 0.9,
          marginTop: "160px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        © 2025 MaxOut Construction Inc. · Toronto–GTA ·{" "}
        <a href="tel:6475301049" style={{ color: "#3B82F6", textDecoration: "none" }}>
          647-530-1049
        </a>{" "}
        ·{" "}
        <a
          href="mailto:info@maxoutconstruction.ca"
          style={{ color: "#3B82F6", textDecoration: "none" }}
        >
          info@maxoutconstruction.ca
        </a>
      </footer>
    </div>
  );
}
