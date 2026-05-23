import { Link } from "@tanstack/react-router";
import { Building2, Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="p-2 rounded-md bg-white/10">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display text-lg text-white font-semibold">Dileep</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Constructions</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Building landmark structures with precision, integrity, and craftsmanship since 1998.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-navy-deep flex items-center justify-center transition-smooth"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[var(--gold)] transition-smooth">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[var(--gold)] transition-smooth">Services</Link></li>
            <li><Link to="/projects" className="hover:text-[var(--gold)] transition-smooth">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)] transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>Residential Construction</li>
            <li>Commercial Projects</li>
            <li>Infrastructure</li>
            <li>Interior Design</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[var(--gold)] shrink-0" /> 1204 Skyline Tower, Banjara Hills, Hyderabad 500034</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-[var(--gold)] shrink-0" /> +91 96423 33337</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-[var(--gold)] shrink-0" /> dillu3051@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Dileep Construction. All rights reserved.</p>
          <p>Crafted with precision in India</p>
        </div>
      </div>
    </footer>
  );
}
