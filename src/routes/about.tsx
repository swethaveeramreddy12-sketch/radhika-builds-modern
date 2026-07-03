import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { stats } from "@/lib/site-data";
import {
  Crosshair,
  ShieldCheck,
  Users,
  Star,
  Linkedin,
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Radhika Constructions — Trusted Builders in Andhra Pradesh" },
      { name: "description", content: "Meet the leadership and values behind Radhika Constructions — a Madanapalle-based construction company delivering quality residential, commercial and infrastructure projects since 1998." },
      { property: "og:title", content: "About Radhika Constructions" },
      { property: "og:description", content: "Leadership, values and the craft behind Radhika Constructions in Madanapalle, Andhra Pradesh." },
      { property: "og:url", content: "https://radhika-builds-modern.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://radhika-builds-modern.lovable.app/about" }],
  }),
  component: About,
});

const bottomValues = [
  {
    icon: Crosshair,
    title: "Visionary Leadership",
    desc: "Setting clear goals and building a future-ready organization.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity First",
    desc: "Upholding transparency and ethics in every decision we make.",
  },
  {
    icon: Users,
    title: "Client Commitment",
    desc: "Our clients' success is at the heart of everything we do.",
  },
  {
    icon: Star,
    title: "Excellence Always",
    desc: "Delivering superior quality through innovation and continuous improvement.",
  },
];

function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => {
          const cx = 4 + col * 10;
          const cy = 4 + row * 10;
          const opacity = 1 - (row + col) / 14;
          return (
            <circle
              key={`${row}-${col}`}
              cx={cx}
              cy={cy}
              r="1.5"
              fill="currentColor"
              opacity={opacity}
            />
          );
        })
      )}
    </svg>
  );
}


function AboutHero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <img
        src={aboutHero}
        alt="Construction site"
        width={1920}
        height={640}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-deep/80" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <nav className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-wider mb-6">
          <Link to="/" className="hover:text-white transition-smooth">
            Home
          </Link>
          <span>/</span>
          <span className="text-white/90">About Us</span>
        </nav>
        <h1 className="text-5xl md:text-6xl font-semibold text-white mb-2 animate-fade-up">
          Leadership That
        </h1>
        <h1 className="text-5xl md:text-6xl font-semibold text-gold mb-6 animate-fade-up delay-100">
          Builds Excellence
        </h1>
        <p className="max-w-xl text-white/70 text-lg leading-relaxed animate-fade-up delay-200">
          Our leadership team brings together expertise, vision, and dedication
          to build a stronger tomorrow.
        </p>
        <div className="mt-8 w-16 h-1 bg-gold rounded-full animate-fade-up delay-300" />
      </div>
    </section>
  );
}

function About() {
  return (
    <Layout>
      <AboutHero />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={about}
            alt="On site"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-lg shadow-elegant"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              From a single site to skylines across India.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Radhika Constructions was founded by Mr. Suresh Radhika in
                Hyderabad with a small civil team and a single principle: build
                what you'd be proud to live in. Twenty-seven years later, that
                principle still drives every decision.
              </p>
              <p>
                Today we operate across seven Indian cities with 600+
                professionals across architecture, engineering, MEP and project
                management — delivering everything from boutique villas to
                40-storey towers and national infrastructure.
              </p>
              <p>
                Our growth has never come at the cost of our craft. Every project,
                regardless of scale, passes through the same rigorous QA process
                and is signed off by a senior partner.
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
                <div className="font-display text-5xl text-navy font-semibold">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Our Leadership
            </p>
            <h2 className="text-4xl md:text-[2.6rem] font-semibold text-navy mb-4">
              Guided by Vision. Driven by Values.
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-12 h-[2px] bg-gold/40 rounded-full" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="w-12 h-[2px] bg-gold/40 rounded-full" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              With a shared commitment to quality, integrity, and innovation, our
              leaders drive Radhika Constructions towards consistent growth and
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Divya Card */}
            <div className="relative bg-card rounded-xl border border-border shadow-card overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-navy mb-1">
                  Reddivary Divya
                </h3>
                <p className="text-gold text-sm font-medium mb-3 inline-block relative">
                  Managing Partner
                  <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gold rounded-full" />
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  With a strong vision and strategic leadership, Divya drives the
                  company forward, ensuring quality, integrity, and client
                  satisfaction in every project.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-9 h-9 rounded border border-border text-muted-foreground hover:text-navy hover:border-navy/30 transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <DotPattern className="absolute bottom-4 right-4 text-navy/10" />
            </div>

            {/* Dileep Card */}
            <div className="relative bg-card rounded-xl border border-border shadow-card overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-navy mb-1">
                  Reddivary Dileep Kumar
                </h3>
                <p className="text-gold text-sm font-medium mb-3 inline-block relative">
                  Senior Engineer & CFO
                  <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gold rounded-full" />
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Dileep combines engineering expertise with financial acumen,
                  overseeing project execution and company financial strategy with
                  precision and transparency.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-9 h-9 rounded border border-border text-muted-foreground hover:text-navy hover:border-navy/30 transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <DotPattern className="absolute bottom-4 right-4 text-navy/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {bottomValues.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
