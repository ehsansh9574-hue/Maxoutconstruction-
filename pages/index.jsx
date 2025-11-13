// pages/index.jsx
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <main
        className="min-h-screen flex items-center justify-center text-white px-4"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6">
            Toronto’s Elite Renovation Experts
          </h1>

          <h2 className="text-3xl font-bold text-[#0074FF] mb-4">
            MaxOut Construction
          </h2>

          <p className="text-lg opacity-80 mb-8">
            Renovation &amp; Restoration • Flooring • Painting • Bathrooms • Kitchens
          </p>

          <a
            href="/#quote"
            className="inline-block px-6 py-3 rounded-xl font-bold text-white"
            style={{ background: "#0074FF" }}
          >
            Get a Quote
          </a>
        </section>
      </main>
    </Layout>
  );
}
