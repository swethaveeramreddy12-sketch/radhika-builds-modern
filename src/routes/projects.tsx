import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, ConstructionIcon, Users, UserCheck, MapPin, Calendar, ShieldCheck, HardHat, Handshake, Settings, ArrowRight, Ruler, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { projects } from "@/lib/site-data";
import heroImg from "@/assets/hero-construction.jpg";
import businessHubImg from "@/assets/project-business-hub.jpg";
import eliteVillasImg from "@/assets/project-elite-villas.jpg";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import interiorOffice from "@/assets/interior-office.jpg";
import interiorVilla from "@/assets/interior-villa.jpg";
import interiorRetail from "@/assets/interior-retail.jpg";
import interiorIndustrial from "@/assets/interior-industrial.jpg";
import interiorDesign from "@/assets/interior-design.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Radhika Constructions, Madanapalle" },
      { name: "description", content: "Running and completed residential, commercial, industrial and infrastructure projects by Radhika Constructions across Andhra Pradesh." },
      { property: "og:title", content: "Projects — Radhika Constructions" },
      { property: "og:description", content: "Landmark residential, commercial and infrastructure projects by Radhika Constructions." },
      { property: "og:url", content: "https://radhika-builds-modern.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://radhika-builds-modern.lovable.app/projects" }],
  }),
  component: Projects,
});

const runningProjects = [
  { title: "Radhika Skyline Apartments", location: "Gachibowli, Hyderabad", progress: 65, eta: "2028", img: heroImg },
  { title: "Radhika Business Hub", location: "Vijayawada", progress: 40, eta: "2028", img: businessHubImg },
  { title: "Radhika Elite Villas", location: "Chennai", progress: 70, eta: "2028", img: eliteVillasImg },
];

const completedCategories = ["All", "Residential", "Commercial", "Industrial", "Architectural Designs", "Structural and Interiors"] as const;

const completedProjects = [
  { title: "Radhika Heights", location: "Manikonda, Hyderabad", category: "Residential", year: "2023", img: projects[0].img },
  { title: "Radhika Tech Park", location: "Hitec City, Hyderabad", category: "Commercial", year: "2022", img: projects[1].img },
  { title: "Radhika Green Villas", location: "Mokila, Hyderabad", category: "Residential", year: "2023", img: projects[2].img },
  { title: "Radhika Industrial Complex", location: "Patancheru, Hyderabad", category: "Industrial", year: "2021", img: projects[5].img },
  { title: "Crescent Mall", location: "Pune", category: "Commercial", year: "2020", img: projects[3].img },
  { title: "Radhika Design Centre", location: "Banjara Hills, Hyderabad", category: "Architectural Designs", year: "2022", img: heroImg },
  { title: "Radhika Corporate Interiors", location: "Gachibowli, Hyderabad", category: "Structural and Interiors", year: "2022", img: projects[1].img },
  { title: "Radhika Villa Interiors", location: "Jubilee Hills, Hyderabad", category: "Structural and Interiors", year: "2023", img: projects[2].img },
];

const stats = [
  { icon: Building2, value: "50+", label: "Projects Completed" },
  { icon: ConstructionIcon, value: "12+", label: "Running Projects" },
  { icon: Users, value: "8+", label: "Years of Experience" },
  { icon: UserCheck, value: "100+", label: "Happy Clients" },
];

const features = [
  { icon: ShieldCheck, title: "Quality Construction", desc: "We deliver the highest standards in every project." },
  { icon: HardHat, title: "On-Time Delivery", desc: "Committed to completing projects on schedule." },
  { icon: Handshake, title: "Client Satisfaction", desc: "Our clients' trust is the foundation of our success." },
  { icon: Settings, title: "Innovative Solutions", desc: "Smart, sustainable and cost-effective construction." },
];

function Projects() {
  const [active, setActive] = useState<(typeof completedCategories)[number]>("All");
  const filtered = active === "All" ? completedProjects : completedProjects.filter((p) => p.category === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Construction site" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-white">
          <nav className="text-sm mb-6">
            <Link to="/" className="text-white/70 hover:text-white">Home</Link>
            <span className="mx-2 text-white/40">›</span>
            <span className="text-[var(--gold)]">Projects</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">Our Projects</h1>
          <p className="max-w-xl text-white/80 text-lg">From concept to completion, we build spaces that inspire and stand the test of time.</p>
          <div className="mt-6 w-16 h-1 bg-[var(--gold)]" />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg border border-border grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 p-6">
              <div className="w-14 h-14 rounded-full bg-[var(--gold)]/15 flex items-center justify-center shrink-0">
                <s.icon className="w-6 h-6 text-[var(--gold)]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-navy">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-[var(--gold)] text-xs uppercase tracking-[0.25em] mb-2">Completed Projects</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy">Our Completed Projects</h2>
              <div className="mt-3 w-12 h-1 bg-[var(--gold)]" />
            </div>
            <Link to="/projects" className="text-[var(--gold)] font-medium flex items-center gap-2 hover:gap-3 transition-all">
              View All Completed Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {completedCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-md text-sm font-medium border transition-smooth ${
                  active === c ? "bg-[var(--gold)] text-navy-deep border-[var(--gold)]" : "bg-white text-foreground border-border hover:border-[var(--gold)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <article key={p.title} className="bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-smooth">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4 text-[var(--gold)]" /> {p.location}
                  </p>
                  <span className="inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded bg-[var(--gold)]/15 text-[var(--gold)]">{p.category}</span>
                  <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" /> Completed: {p.year}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Running Projects */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-[var(--gold)] text-xs uppercase tracking-[0.25em] mb-2">Running Projects</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy">Projects in Progress</h2>
              <div className="mt-3 w-12 h-1 bg-[var(--gold)]" />
            </div>
            <Link to="/projects" className="text-[var(--gold)] font-medium flex items-center gap-2 hover:gap-3 transition-all">
              View All Running Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {runningProjects.map((p) => (
              <article key={p.title} className="bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-smooth">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-[var(--gold)] text-navy-deep text-xs font-semibold px-3 py-1 rounded">In Progress</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4 text-[var(--gold)]" /> {p.location}
                  </p>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-navy">{p.progress}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--gold)] rounded-full" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[var(--gold)]" /> Expected Completion: {p.eta}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-[var(--gold)]/10 rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <f.icon className="w-8 h-8 text-[var(--gold)] shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">{f.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative rounded-2xl overflow-hidden bg-navy-deep text-white p-10 md:p-14">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="w-12 h-1 bg-[var(--gold)] mb-4" />
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Let's Build Something <span className="text-[var(--gold)]">Amazing Together</span>
                </h3>
              </div>
              <div className="flex flex-col md:items-end gap-3">
                <p className="text-white/80">Have a project in mind?<br />We're here to turn your vision into reality.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[var(--gold)] text-navy-deep font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-smooth">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
