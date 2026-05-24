import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Layout, PageHero } from "@/components/Layout";
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageCircle } from "lucide-react";

const COMPANY_EMAIL = "radhikaconstructions@gmail.com";
const COMPANY_WHATSAPP = "919642333337";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Radhika Constructions" },
      { name: "description", content: "Get in touch with Radhika Constructions to start your next residential, commercial or infrastructure project." },
      { property: "og:title", content: "Contact Radhika Constructions" },
      { property: "og:description", content: "Start a conversation about your next project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const type = String(fd.get("type") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const subject = `New project enquiry from ${name}`;
    const body =
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${type}\n\nDetails:\n${message}`;
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const onWhatsApp = () => {
    const form = document.querySelector("form") as HTMLFormElement | null;
    const fd = form ? new FormData(form) : new FormData();
    const name = String(fd.get("name") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const text = `Hi Radhika Constructions, I'm ${name || "(name)"}.\n\n${message || "I'd like to discuss a project."}`;
    window.open(`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's start a conversation."
        subtitle="Share your brief and our partners will respond within 24 hours with next steps."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: MapPin, label: "Head Office", value: "1204 Skyline Tower, Banjara Hills, Hyderabad 500034" },
              { icon: Phone, label: "Phone", value: "+91 96423 33337" },
              { icon: Mail, label: "Email", value: "radhikaconstructions@gmail.com" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-12 h-12 rounded-md bg-navy text-white flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
                  <div className="font-medium">{value}</div>
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Office hours: Monday – Saturday, 9:00 AM – 6:30 PM IST
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 bg-card p-8 md:p-10 rounded-lg border border-border shadow-card space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone" name="phone" />
              <Field label="Project Type" name="type" placeholder="Residential, Commercial…" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Project Details</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-navy resize-none"
                placeholder="Tell us about your project, location and timeline…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white rounded-md font-semibold hover:bg-navy-deep transition-smooth"
            >
              Send Message <Send className="w-4 h-4" />
            </button>

            {submitted && (
              <div className="flex items-center gap-2 text-sm text-navy bg-secondary p-4 rounded-md animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-[var(--gold)]" />
                Thank you — we'll be in touch within 24 hours.
              </div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
      />
    </div>
  );
}
