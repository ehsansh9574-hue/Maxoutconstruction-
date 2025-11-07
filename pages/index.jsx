import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[86vh] overflow-hidden">
        {/* background image with subtle motion */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.78)), url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "pan 26s ease-in-out infinite alternate",
            filter: "saturate(1.03) contrast(1.05)"
          }}
        />
        {/* content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1200px] mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Toronto’s Elite Renovation Experts
            </h1>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold" style={{ color:"#0074FF" }}>
              MaxOut Construction
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Renovation & Restoration • Flooring • Painting • Bathrooms • Kitchens
            </p>
            <div className="mt-8">
              <a href="/contact" className="inline-block px-6 py-3 rounded-xl font-bold"
                 style={{ background:"#0074FF", boxShadow:"0 10px 35px rgba(0,116,255,.35)" }}>
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        {/* soft brand glow */}
        <div className="pointer-events-none absolute inset-0"
             style={{background:"radial-gradient(700px circle at 80% 30%, rgba(0,116,255,.16), transparent 45%)"}}/>
      </section>

      {/* animation keyframes */}
      <style jsx>{`
        @keyframes pan {
          0% { transform: scale(1.05) translateY(0); }
          50% { transform: scale(1.11) translateY(-8px); }
          100% { transform: scale(1.08) translateY(6px); }
        }
      `}</style>
    </Layout>
  );
}
