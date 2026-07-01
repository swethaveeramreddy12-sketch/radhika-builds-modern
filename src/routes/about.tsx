import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { stats } from "@/lib/site-data";
import { Compass, ShieldCheck, Sparkles, Users } from "lucide-react";
import about from "@/assets/about.jpg";
import leaderDivya from "@/assets/leader-divya.jpg";
import leaderDileep from "@/assets/leader-dileep.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Radhika Constructions" },
      { name: "description", content: "Three decades of disciplined construction craft. Meet the team and values behind Radhika Constructions." },
      { property: "og:title", content: "About Radhika Constructions" },
      { property: "og:description", content: "Three decades of disciplined construction craft." },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Transparent costing, honest timelines and no surprises at handover." },
  { icon: Sparkles, title: "Craftsmanship", desc: "We obsess over the finish details that turn a building into a landmark." },
  { icon: Compass, title: "Precision", desc: "Engineering-led decisions backed by decades of on-site know-how." },
  { icon: Users, title: "Partnership", desc: "We work as an extension of your team, not just another contractor." },
];

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Story"
        title="Building with conviction since 1998."
        subtitle="A family practice turned national construction leader, anchored by the same values we started with."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <img src={about} alt="On site" width={1200} height={900} loading="lazy" className="rounded-lg shadow-elegant" />
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">From a single site to skylines across India.</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Radhika Constructions was founded by Mr. Suresh Radhika in Hyderabad with a small civil team and a single principle: build what you'd be proud to live in. Twenty-seven years later, that principle still drives every decision.
              </p>
              <p>
                Today we operate across seven Indian cities with 600+ professionals across architecture, engineering, MEP and project management — delivering everything from boutique villas to 40-storey towers and national infrastructure.
              </p>
              <p>
                Our growth has never come at the cost of our craft. Every project, regardless of scale, passes through the same rigorous QA process and is signed off by a senior partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl text-navy font-semibold">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="text-navy text-xs uppercase tracking-[0.3em] mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-semibold">The principles we won't compromise.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 border border-border rounded-lg hover:shadow-card transition-smooth">
                <Icon className="w-8 h-8 text-navy mb-5" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="text-navy text-xs uppercase tracking-[0.3em] mb-4">Our Leadership</p>
            <h2 className="text-4xl md:text-5xl font-semibold">The people steering our vision.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-card p-8 rounded-lg border border-border shadow-card flex flex-col sm:flex-row gap-6 items-start">
              <img src={leaderDivya} alt="Reddivary Divya" width={112} height={112} loading="lazy" className="w-28 h-28 rounded-full object-cover shrink-0 border-2 border-navy/10" />
              <div>
                <h3 className="text-xl font-semibold">Reddivary Divya</h3>
                <p className="text-navy text-sm font-medium mb-3">Managing Partner</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Divya co-founded Radhika Constructions alongside her family, bringing over two decades of strategic oversight and client stewardship. She leads business development, vendor partnerships and community engagement — ensuring every project aligns with the firm's long-term reputation for trust and excellence.
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border shadow-card flex flex-col sm:flex-row gap-6 items-start">
              <img src="/src/assets/leader-dileep.jpg" alt="Reddivary Dileep Kumar" className="w-28 h-28 rounded-full object-cover shrink-0 border-2 border-navy/10" />
              <div>
                <h3 className="text-xl font-semibold">Reddivary Dileep Kumar</h3>
                <p className="text-navy text-sm font-medium mb-3">Senior Engineer & CFO</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dileep oversees technical engineering, cost control and financial planning across all verticals. With deep expertise in structural systems and project economics, he ensures Radhika Constructions delivers on scope, schedule and budget — without ever compromising on safety or quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
