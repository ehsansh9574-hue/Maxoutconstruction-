import { useState } from "react";
import { BadgeCheck, Building2, Hammer, Paintbrush, Ruler, Share2, Star, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const PHONE = "+1 647-530-1049";
const EMAIL = "info@maxoutconstruction.ca";
const CITY = "Toronto & GTA";

const services = [
  {
    icon: Paintbrush,
    name: "Interior & Exterior Painting",
    blurb: "Walls, ceilings, trim, cabinets. Premium prep & coatings for a flawless, durable finish.",
    bullets: ["Accent walls & feature finishes", "Cabinet refinishing & spraying", "Drywall repair & caulking"],
  },
  {
    icon: Ruler,
    name: "Flooring Installation",
    blurb: "Hardwood, vinyl, laminate, stairs. NWFA‑inspired standards with premium adhesives & prep.",
    bullets: ["Subfloor levelling & moisture testing", "Staircase refinishing", "Baseboards & transitions"],
  },
  {
    icon: Hammer,
    name: "Selective Demolition",
    blurb: "Clean, contained demo for renos: kitchens, baths, flooring, wall removals (non‑structural).",
    bullets: ["Dust control & debris haul‑out", "Site protection", "Fast, tidy tear‑outs"],
  },
  {
    icon: Building2,
    name: "Renovation & Restoration",
    blurb: "From make‑ready refreshes to insurance‑scope rebuilds. Reliable schedules, rugged results.",
    bullets: ["Kitchens & baths", "Basements & feature walls", "Insurance & realtor make‑readies"],
  },
];

const portfolio = [
  { title: "Condo refresh — King West", tag: "Painting", img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop" },
  { title: "Stair refinish — North York", tag: "Flooring", img: "https://images.unsplash.com/photo-1616486886892-0f126c788c9a?q=80&w=1200&auto=format&fit=crop" },
  { title: "Office repaint — Etobicoke", tag: "Commercial", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop" },
  { title: "Kitchen demo — Markham", tag: "Demolition", img: "https://images.unsplash.com/photo-1584622781564-1a1b8d7a57b0?q=80&w=1200&auto=format&fit=crop" },
];

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

export default function Home() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Topbar */}
      <div className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight">
            <div className="w-9 h-9 rounded-2xl bg-neutral-900 text-white grid place-items-center">MO</div>
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-widest text-neutral-500">MaxOut</div>
              <div className="-mt-1 text-lg">Construction</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#work" className="hover:text-neutral-600">Work</a>
            <a href="#process" className="hover:text-neutral-600">Process</a>
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE.replace(/[^+0-9]/g, "")}`} className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="ml-1"><button className="px-4 py-2 rounded-xl bg-neutral-900 text-white">Get a Quote</button></a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <Section id="home" className="pt-10 md:pt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Ruggedly Reliable <span className="text-neutral-500">Renovations</span> for {CITY}
            </h1>
            <p className="mt-5 text-neutral-700 text-lg">
              Painting • Flooring • Selective Demo • Renovation & Restoration. We show up, prep like pros, and deliver clean, durable finishes—every time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact"><button className="h-11 px-6 rounded-xl bg-neutral-900 text-white">Book a Free Walkthrough</button></a>
              <a href="#work" className="inline-flex items-center gap-2 px-4 h-11 rounded-xl border">
                See our work <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><Star className="w-4 h-4" /> 5‑star client care</div>
              <div className="flex items-center gap-2"><BadgeCheck className="w-4 h-4" /> Insured & WSIB</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> GTA‑wide</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1508387104394-1660f78a231b?q=80&w=1400&auto=format&fit=crop"
                alt="MaxOut Construction crew at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="shadow-lg bg-white rounded-xl">
                <div className="p-4 flex items-center gap-3">
                  <Share2 className="w-5 h-5" /> Over 100+ projects completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What we do best</h2>
          <p className="mt-3 text-neutral-700">Premium prep. Clean lines. Tough, lasting results.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl border bg-white">
              <div className="p-6">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 grid place-items-center mb-2">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="text-xl font-semibold">{s.name}</div>
                <p className="mt-2 text-sm text-neutral-700">{s.blurb}</p>
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-neutral-700">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section id="work">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent work</h2>
            <p className="mt-2 text-neutral-700">Before/after galleries available on request.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block"><button className="px-4 py-2 rounded-xl border">Get a quote</button></a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolio.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl shadow bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-widest text-neutral-500">{p.tag}</div>
                <div className="font-medium">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, accountable process</h2>
          <p className="mt-3 text-neutral-700">Clear scopes, tight timelines, quality checkpoints.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Walkthrough", text: "Free on‑site or video call to scope your project." },
            { step: "2", title: "Transparent quote", text: "Line‑item pricing with options & timelines." },
            { step: "3", title: "Prep & protect", text: "Floors, fixtures, and furniture fully covered." },
            { step: "4", title: "Punch‑list finish", text: "We don’t leave until it’s right—period." },
          ].map((x) => (
            <div key={x.step} className="rounded-2xl border bg-white p-6">
              <div className="text-neutral-400 font-semibold">Step {x.step}</div>
              <div className="font-semibold mt-1">{x.title}</div>
              <p className="text-neutral-700 text-sm mt-1">{x.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience the MaxOut difference</h2>
            <p className="mt-4 text-neutral-700">
              We’re a GTA‑born crew obsessed with craftsmanship and accountability. Our promise: clear communication, disciplined prep, and finishes that hold up to real life.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4"/> Insured & WSIB</li>
              <li className="flex items-center gap-2"><Star className="w-4 h-4"/> 5‑star client care</li>
              <li className="flex items-center gap-2"><Hammer className="w-4 h-4"/> Pro‑grade tools & materials</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {CITY}</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop"
              alt="Tidy jobsite and clean finishes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="bg-neutral-900 text-white rounded-[2rem] mx-4 md:mx-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to MaxOut your renovation?</h3>
            <p className="mt-2 text-neutral-300">Fast quotes. Clean crews. Premium results.</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${PHONE.replace(/[^+0-9]/g, "")}`}><button className="h-11 px-6 rounded-xl bg-white text-neutral-900 flex items-center gap-2"><Phone className="w-4 h-4"/> Call {PHONE}</button></a>
            <a href={`mailto:${EMAIL}`}><button className="h-11 px-6 rounded-xl bg-white text-neutral-900 flex items-center gap-2"><Mail className="w-4 h-4"/> Email us</button></a>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-white">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get your free quote</h2>
            <p className="mt-3 text-neutral-700">Tell us about your project and preferred timeline. We’ll respond within one business day.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="w-4 h-4"/> {PHONE}</div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4"/> {EMAIL}</div>
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4"/> {CITY}</div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            {sent ? (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                Thanks! Your message is ready in your email client. If it didn’t open, email us at <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </div>
            ) : (
              <ContactForm onSent={() => setSent(true)} />
            )}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white grid place-items-center text-xs">MO</div>
            <div className="text-sm">
              <div className="font-semibold">MaxOut Construction</div>
              <div className="text-neutral-600">Toronto • GTA</div>
            </div>
          </div>
          <div className="text-sm text-neutral-600">© {new Date().getFullYear()} MaxOut Construction. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm({ onSent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Free Quote Request — MaxOut Construction");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProject details:\n${msg}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    onSent();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <input className="border rounded-xl px-3 h-11" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="border rounded-xl px-3 h-11" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <input className="border rounded-xl px-3 h-11" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <textarea className="border rounded-xl px-3 py-2 min-h-[120px] w-full" placeholder="Tell us about your project (scope, size, timeline)" value={msg} onChange={(e) => setMsg(e.target.value)} required />
      <div className="flex items-center gap-3">
        <button type="submit" className="h-11 px-6 rounded-xl bg-neutral-900 text-white">Send request</button>
        <span className="text-sm text-neutral-500">or email <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
      </div>
    </form>
  );
}
