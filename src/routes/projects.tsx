import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/Layout";
import { projects } from "@/lib/site-data";

const categories = ["All", "Residential", "Commercial", "Retail", "Infrastructure", "Industrial"] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Dileep Construction" },
      { name: "description", content: "A selected portfolio of residential, commercial, retail, infrastructure and industrial projects delivered across India." },
      { property: "og:title", content: "Projects — Dileep Construction" },
      { property: "og:description", content: "Selected portfolio of landmark projects." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <PageHero
        eyebrow="Portfolio"
        title="Projects that define skylines."
        subtitle="A selection of landmark work delivered for India's leading developers, enterprises and public bodies."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                  active === c ? "bg-navy text-white" : "bg-secondary text-foreground hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.title} className="group relative overflow-hidden rounded-lg aspect-[4/5] animate-fade-in">
                <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[var(--gold)] text-[10px] uppercase tracking-[0.25em] mb-2">{p.category} · {p.location}</p>
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
