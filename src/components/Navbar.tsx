import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Building2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-md transition-smooth ${scrolled ? "bg-navy text-primary-foreground" : "bg-white/10 text-white backdrop-blur"}`}>
            <Building2 className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className={`font-display text-lg font-semibold ${scrolled ? "text-foreground" : "text-white"}`}>
              Dileep
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Constructions
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-medium tracking-wide transition-smooth relative py-2 ${
                  scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
                activeProps={{
                  className: `text-sm font-medium tracking-wide py-2 relative ${scrolled ? "text-foreground" : "text-white"} after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[var(--gold)]`,
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[var(--gold)] text-navy-deep font-semibold text-sm hover:brightness-110 transition-smooth"
        >
          Get a Quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground font-medium"
                  activeProps={{ className: "block py-3 text-navy font-semibold" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-[var(--gold)] text-navy-deep font-semibold"
            >
              Get a Quote
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
