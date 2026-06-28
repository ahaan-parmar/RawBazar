const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Sourcing", id: "sourcing" },
    { label: "Catalogue", id: "catalogue" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer style={{ borderTop: "1px solid rgba(240,233,218,0.14)", overflow: "hidden" }}>
      {/* Top bar */}
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "40px 32px 0",
        display: "flex", flexWrap: "wrap", gap: 22,
        justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>
          Family-run spice exporters · Pune, India
        </span>
        <div style={{ display: "flex", gap: 26 }}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}
              style={{ color: "#A2917A", textDecoration: "none", fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, transition: "color .25s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0E9DA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A2917A")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Large wordmark */}
      <div className="rb-rise" style={{ padding: "clamp(20px,3vw,40px) 0 clamp(8px,1.5vw,20px)", textAlign: "center" }}>
        <div style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 500,
          fontSize: "clamp(72px,19vw,280px)",
          lineHeight: 0.82,
          letterSpacing: "-.02em",
          color: "#F0E9DA",
          whiteSpace: "nowrap",
        }}>
          Raw <span style={{ fontStyle: "italic", color: "#D69A2E" }}>Bazar</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "18px 32px 34px",
        display: "flex", flexWrap: "wrap", gap: 16,
        justifyContent: "space-between", alignItems: "center",
        borderTop: "1px solid rgba(240,233,218,0.14)",
      }}>
        <span style={{ fontSize: 11.5, letterSpacing: ".06em", color: "#A2917A" }}>
          United States · United Kingdom · Germany · UAE · Singapore · Japan · +44 more
        </span>
        <span style={{ fontSize: 11.5, letterSpacing: ".06em", color: "#A2917A" }}>
          © Raw Bazar · All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
