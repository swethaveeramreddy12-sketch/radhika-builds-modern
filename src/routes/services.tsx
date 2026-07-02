import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { services } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Construction Services in Madanapalle — Radhika Constructions" },
      { name: "description", content: "Residential construction, commercial buildings, industrial projects, renovation, interior fit-out, MEP and project management services in Madanapalle and across Andhra Pradesh." },
      { property: "og:title", content: "Construction Services — Radhika Constructions" },
      { property: "og:description", content: "Full-spectrum construction services in Madanapalle and Andhra Pradesh." },
      { property: "og:url", content: "https://radhika-builds-modern.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://radhika-builds-modern.lovable.app/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <PageHero
        eyebrow="What We Do"
        title="A full-spectrum construction partner."
        subtitle="Eight integrated disciplines, one accountable team — from concept feasibility to ribbon-cutting."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="group p-8 bg-card border border-border rounded-lg hover:bg-navy hover:text-white transition-smooth">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-md bg-navy text-white group-hover:bg-[var(--gold)] group-hover:text-navy-deep flex items-center justify-center transition-smooth">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-white/60">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Not sure which service fits?</h2>
          <p className="text-muted-foreground mb-8">Send us your brief — we'll respond within 24 hours with a tailored approach.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white rounded-md font-semibold hover:bg-navy-deep transition-smooth">
            Talk to our team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
