import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Sourcing", href: "#sourcing" },
  { name: "Catalogue", href: "#catalogue" },
  { name: "Quality", href: "#quality" },
  { name: "Contact", href: "#contact" },
];

const S = {
  header: (scrolled: boolean): React.CSSProperties => ({
    position: "sticky",
    top: 0,
    zIndex: 80,
    background: scrolled
      ? "color-mix(in srgb, #14100B 90%, transparent)"
      : "color-mix(in srgb, #14100B 76%, transparent)",
    backdropFilter: "blur(12px) saturate(120%)",
    borderBottom: "1px solid rgba(240,233,218,0.14)",
    transition: "background 0.4s",
  }),
  nav: {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "17px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  } as React.CSSProperties,
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    textDecoration: "none",
    color: "#F0E9DA",
  } as React.CSSProperties,
  logoText: {
    fontWeight: 700,
    fontSize: 17,
    letterSpacing: ".34em",
    textTransform: "uppercase" as const,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "#D69A2E",
    flexShrink: 0,
  } as React.CSSProperties,
  desktopLinks: {
    display: "flex",
    alignItems: "center",
    gap: 34,
  } as React.CSSProperties,
  link: {
    color: "#A2917A",
    textDecoration: "none",
    fontSize: 12,
    letterSpacing: ".2em",
    textTransform: "uppercase" as const,
    fontWeight: 600,
    transition: "color .25s",
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    padding: "11px 20px",
    border: "1px solid rgba(240,233,218,0.14)",
    borderRadius: 2,
    color: "#F0E9DA",
    textDecoration: "none",
    fontSize: 11.5,
    letterSpacing: ".16em",
    textTransform: "uppercase" as const,
    fontWeight: 600,
    transition: "all .3s",
    background: "transparent",
    cursor: "pointer",
    fontFamily: "'Epilogue', sans-serif",
  } as React.CSSProperties,
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={S.header(scrolled)}>
      <nav style={S.nav}>
        {/* Logo */}
        <a href="#top" style={S.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={S.logoText}>Raw&nbsp;Bazar</span>
          <span style={S.dot} />
        </a>

        {/* Desktop links */}
        <div style={{ ...S.desktopLinks, display: "flex" }} className="hidden md:flex">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
              style={S.link}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0E9DA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A2917A")}
            >
              {l.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
          style={{
            ...S.cta,
            borderColor: ctaHover ? "#F0E9DA" : "rgba(240,233,218,0.14)",
            background: ctaHover ? "#F0E9DA" : "transparent",
            color: ctaHover ? "#14100B" : "#F0E9DA",
          }}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          className="hidden md:inline-flex"
        >
          Request a quote
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#F0E9DA", cursor: "pointer", padding: 4 }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          borderTop: "1px solid rgba(240,233,218,0.14)",
          background: "#1C1610",
          padding: "20px 32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}>
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
              style={{ ...S.link, color: "#F0E9DA", fontSize: 14 }}
            >
              {l.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            style={{ ...S.cta, alignSelf: "flex-start", marginTop: 8 }}
          >
            Request a quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
