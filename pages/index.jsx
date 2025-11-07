export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://maxoutconstruction.ca/luxury-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0 0 15px rgba(0,0,0,0.6)",
      }}
    >
      <img
        src="https://maxoutconstruction.ca/logo.png"
        alt="MaxOut Construction Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <h1 style={{ fontSize: "3rem", color: "#0072ce" }}>
        Welcome to MaxOut Construction
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
        Premium Renovation, Restoration, Flooring & Demolition Services Across the GTA.
      </p>
      <button
        style={{
          marginTop: "30px",
          backgroundColor: "#0072ce",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: "8px",
          fontSize: "1.1rem",
          cursor: "pointer",
        }}
      >
        Get a Free Quote
      </button>
    </main>
  );
}
