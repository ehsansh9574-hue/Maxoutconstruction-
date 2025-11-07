import Head from "next/head";

export default function Restoration() {
  return (
    <>
      <Head>
        <title>Restoration & Renovation Toronto | Water, Smoke, Damage & Full Reno</title>
        <meta
          name="description"
          content="Owner-led restoration and renovations in Toronto & GTA. Water/smoke damage repair, insurance-friendly scopes, kitchens, baths, basements, drywall, flooring, painting & carpentry. Fast quotes, clean crews."
        />
      </Head>

      <section>
        <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "#1C39BB" }}>
          Restoration & Renovation — Toronto & GTA
        </h1>
        <p className="mt-3 text-zinc-700">
          When leaks, smoke, tenant damage—or just time—hit your property, you need a crew that shows up fast, scopes clearly, and finishes clean.
          MaxOut delivers insurance-friendly <b>restoration</b> and value-add <b>renovations</b> with tidy sites, disciplined prep, and owner-led quality checks.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="font-semibold text-lg">Restoration Services</h2>
            <ul className="list-disc ml-5 mt-3 text-zinc-700">
              <li><b>Water & Moisture:</b> controlled cut-outs, dry-outs, antimicrobial, drywall/trim rebuild, prime & repaint.</li>
              <li><b>Fire/Smoke & Odor:</b> clean & seal, smoke-blocking primers, deodorization, finish paint.</li>
              <li><b>Impact/Vandalism:</b> doors/frames, casings/baseboards, patch/skim, texture match, repaint.</li>
              <li><b>Insurance-Ready Docs:</b> line-item scopes, progress photos, before/after sign-off.</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="font-semibold text-lg">Renovation Services</h2>
            <ul className="list-disc ml-5 mt-3 text-zinc-700">
              <li><b>Kitchens:</b> demo, layout tweaks, cabinet install or refinishing/spraying, backsplash & counters coordination, lighting, paint.</li>
              <li><b>Bathrooms:</b> demo, backer/tile, vanities, fixture swaps (coord.), fan/lights, paint & caulk.</li>
              <li><b>Basements:</b> framing/drywall, flooring, doors/trim, feature walls, repaint, finishing.</li>
              <li><b>Flooring:</b> hardwood/engineered, vinyl/LVP, laminate, levelling & moisture checks, transitions/baseboards.</li>
              <li><b>Interior Painting:</b> walls/ceilings/trim, drywall repairs, stain-blocking, <b>cabinet spraying</b> (durable 2K finishes).</li>
              <li><b>Carpentry:</b> casings/base, wainscoting, crown, built-ins, stair rails & nosings.</li>
              <li><b>Make-Readies:</b> condo/rental turns, realtor listing prep, punch-list close-outs.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="font-semibold text-lg">Our Process</h2>
            <ol className="list-decimal ml-5 mt-3 text-zinc-700">
              <li><b>Walkthrough & Scope:</b> on-site or video; photos + moisture readings if needed.</li>
              <li><b>Clear Quote:</b> line items, options, timeline, protection plan.</li>
              <li><b>Prep & Protect:</b> floor protection, dust containment, daily cleanup.</li>
              <li><b>Execute:</b> pro materials & methods; tidy work; scheduled check-ins.</li>
              <li><b>Punch-List & Sign-Off:</b> owner walkthrough, touch-ups before we leave.</li>
            </ol>
          </div>

          <div className="card">
            <h2 className="font-semibold text-lg">Why MaxOut</h2>
            <ul className="list-disc ml-5 mt-3 text-zinc-700">
              <li>Owner-led quality and reliable schedules — we show up.</li>
              <li>Insurance-friendly documentation and communication.</li>
              <li>Clean, contained worksites (tenants, kids, pets considered).</li>
              <li>Durable primers, sealers and pro-grade finishes for long-term results.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="font-semibold text-lg">FAQs</h2>
          <div className="mt-3 text-zinc-700">
            <p className="mb-2"><b>Do you work with insurance?</b> Yes — we provide photo logs and line-item scopes your adjuster understands.</p>
            <p className="mb-2"><b>How fast can you start?</b> For urgent water/smoke issues, we prioritize containment and dry-out quickly.</p>
            <p className="mb-2"><b>Where do you serve?</b> Toronto, North York, Etobicoke, Scarborough, Vaughan, Mississauga and nearby GTA.</p>
          </div>
        </div>

        <div className="mt-8">
          <a href="/contact" className="btn btn-primary">Book a Free Restoration/Reno Walkthrough</a>
          <span className="ml-4 text-sm text-zinc-600">
            Or call <a className="underline" href="tel:16475301049">647-530-1049</a> •{" "}
            <a className="underline" href="mailto:info@maxoutconstruction.ca">info@maxoutconstruction.ca</a>
          </span>
        </div>
      </section>
    </>
  );
}
