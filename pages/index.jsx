export default function Home() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      backgroundColor: "#0a0a0a",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#facc15" }}>
        Welcome to MaxOut Construction
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
        Toronto’s ruggedly reliable renovation team. <br />
        Restoration • Flooring • Painting • Demolition
      </p>
      <a 
        href="mailto:info@maxoutconstruction.ca"
        style={{
          marginTop: "2rem",
          backgroundColor: "#facc15",
          color: "#000",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Get a Free Quote
      </a>
    </div>
  );
}
