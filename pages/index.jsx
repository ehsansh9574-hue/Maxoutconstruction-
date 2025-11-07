export default function Home() {
  const features = [
    ["Restoration & Reno", "Water/smoke damage, make-readies, kitchens, baths, basements, carpentry."],
    ["Flooring", "Hardwood, vinyl, laminate, stairs. Real subfloor prep & moisture checks."],
    ["Painting", "Interior/exterior, cabinet spraying, drywall repairs, crisp lines."],
    ["Selective Demo", "Kitchen/bath tear-outs, flooring removal, non-structural walls."]
  ];

  return (
    <section className="text-center py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold" style={{color:"#1C39BB"}}>
        Ruggedly Reliable Renovations for Toronto & GTA
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        Restoration • Flooring • Painting • Selective Demolition
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="/contact" className="btn btn-primary">Get a Free Quote</a>
        <a href="/services/restoration" className="btn btn-outline">See Services</a>
      </div>

      <div className="mt-14 grid md:grid-cols-4 gap-4 text-left">
        {features.map(([t, d]) => (
          <div className="card" key={t}>
            <h3 className="font-semibold">{t}</h3>
            <p className="mt-2 text-zinc-600 text-sm">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
