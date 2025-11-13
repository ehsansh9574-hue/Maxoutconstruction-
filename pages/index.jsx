import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl font-extrabold text-center mb-6">
          Toronto’s Elite Renovation Experts
        </h1>

        <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">
          MaxOut Construction
        </h2>

        <p className="text-lg opacity-80 text-center max-w-2xl mb-8">
          Renovation & Restoration • Flooring • Painting • Bathrooms • Kitchens
        </p>

        <a
          href="/#quote"
          className="px-6 py-3 rounded-xl font-bold text-white"
          style={{ background: "#0074FF" }}
        >
          Get a Quote
        </a>
      </section>
    </Layout>
  );
}
