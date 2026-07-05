import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 gradient-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-[var(--gold)] text-xs uppercase tracking-[0.3em] mb-4 animate-fade-up">{eyebrow}</p>
        <h1 className="text-5xl md:text-6xl font-semibold animate-fade-up delay-100">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-white/70 text-lg animate-fade-up delay-200">{subtitle}</p>}
      </div>
    </section>
  );
}
