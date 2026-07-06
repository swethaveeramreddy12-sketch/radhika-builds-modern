import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, CheckCircle2, Linkedin, Quote, User } from "lucide-react";
import hero from "@/assets/hero-construction.jpg";
import about from "@/assets/about.jpg";
import { Layout } from "@/components/Layout";
import { services, projects, testimonials, stats } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radhika Constructions — Builders & Contractors in Madanapalle, Andhra Pradesh" },
      { name: "description", content: "Radhika Constructions is a trusted construction company in Madanapalle building premium homes, commercial spaces, and infrastructure across Andhra Pradesh since 1998." },
      { property: "og:title", content: "Radhika Constructions — Builders & Contractors in Madanapalle" },
      { property: "og:description", content: "Premium residential, commercial and infrastructure construction across Andhra Pradesh since 1998." },
      { property: "og:url", content: "https://radhika-builds-modern.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://radhika-builds-modern.lovable.app/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={hero} alt="Construction site at golden hour" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-navy-deep/50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 text-white w-full">
          <p className="text-[var(--gold)] text-xs uppercase tracking-[0.4em] mb-6 animate-fade-up">Established 1998</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] max-w-4xl animate-fade-up delay-100">
            Building tomorrow's<br />landmarks today.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/80 leading-relaxed animate-fade-up delay-200">
            Radhika Constructions delivers premium residential, commercial and infrastructure projects with the precision of a craftsman and the scale of an industry leader.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link to="/projects" className="inline-flex items-center gap-2 px-7 py-4 bg-[var(--gold)] text-navy-deep font-semibold rounded-md hover:brightness-110 transition-smooth">
              View Our Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-smooth">
              Start a Project
            </Link>
          </div>
        </div>

        {/* Floating stats strip */}
        <div className="absolute bottom-0 inset-x-0 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="bg-white shadow-elegant rounded-t-xl grid grid-cols-4 divide-x divide-border">
              {stats.map((s) => (
                <div key={s.label} className="px-8 py-6 text-center">
                  <div className="font-display text-3xl text-navy font-semibold">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={about} alt="Architect on site" width={1200} height={900} loading="lazy" className="rounded-lg shadow-elegant" />
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-navy text-white p-6 rounded-lg shadow-elegant max-w-[220px] hidden sm:block">
              <Award className="w-8 h-8 text-[var(--gold)] mb-3" />
              <p className="text-sm leading-snug">Recognized among India's Top 50 Builders for 7 consecutive years.</p>
            </div>
          </div>
          <div>
            <p className="text-navy text-xs uppercase tracking-[0.3em] mb-4">About Radhika</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Three decades of building with conviction.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 1998, Radhika Constructions has grown from a family-run civil practice into one of India's most trusted construction partners. We believe great buildings are the product of patience, technical mastery and an obsession with the details no one else notices.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "ISO 9001:2015 certified processes end-to-end",
                "In-house design, engineering and execution teams",
                "On-time delivery on 96% of projects since 2015",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all">
              Learn our story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
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

          <div className="grid md:grid-cols-2 gap-6">
            {/* Divya Card */}
            <div className="group p-8 bg-card border border-border rounded-lg hover:bg-navy hover:text-white transition-smooth">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-md bg-navy text-white flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:text-navy-deep transition-smooth">
                  <User className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">Reddivary Divya</h3>
              <p className="text-gold text-sm font-medium mb-3 inline-block relative">
                Managing Partner
                <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gold rounded-full" />
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/80 mb-5">
                With a strong vision and strategic leadership, Divya drives the
                company forward, ensuring quality, integrity, and client
                satisfaction in every project.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded border border-border text-muted-foreground hover:text-navy hover:border-navy/30 group-hover:border-white/30 group-hover:text-white transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Dileep Card */}
            <div className="group p-8 bg-card border border-border rounded-lg hover:bg-navy hover:text-white transition-smooth">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-md bg-navy text-white flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:text-navy-deep transition-smooth">
                  <User className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">Reddivary Dileep Kumar</h3>
              <p className="text-gold text-sm font-medium mb-3 inline-block relative">
                Senior Engineer & CFO
                <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gold rounded-full" />
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/80 mb-5">
                Dileep combines engineering expertise with financial acumen,
                overseeing project execution and company financial strategy with
                precision and transparency.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded border border-border text-muted-foreground hover:text-navy hover:border-navy/30 group-hover:border-white/30 group-hover:text-white transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="text-navy text-xs uppercase tracking-[0.3em] mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-semibold">A full-spectrum construction partner.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-card p-7 rounded-lg border border-border hover:border-navy hover:shadow-card transition-smooth">
                <div className="w-12 h-12 rounded-md bg-navy text-white flex items-center justify-center mb-5 group-hover:bg-[var(--gold)] group-hover:text-navy-deep transition-smooth">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-navy text-xs uppercase tracking-[0.3em] mb-4">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-semibold">Projects that define skylines.</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((p) => (
              <article key={p.title} className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
                <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[var(--gold)] text-[10px] uppercase tracking-[0.25em] mb-2">{p.category} · {p.location}</p>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 gradient-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[var(--gold)] text-xs uppercase tracking-[0.3em] mb-4">Client Voices</p>
            <h2 className="text-4xl md:text-5xl font-semibold">Trusted by India's most discerning builders.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 backdrop-blur border border-white/10 p-8 rounded-lg">
                <Quote className="w-8 h-8 text-[var(--gold)] mb-5" />
                <p className="text-white/90 leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-white/60">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Building2 className="w-12 h-12 text-navy mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Let's build something enduring.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            From feasibility to handover, our team is ready to bring rigor, transparency and craftsmanship to your next project.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white rounded-md font-semibold hover:bg-navy-deep transition-smooth">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
