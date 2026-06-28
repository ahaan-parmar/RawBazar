import fssaiLogo from "@/assets/fssai.webp";

const certs = [
  { name: "FSSAI Certified",     desc: "License No. 1152699000163" },
  { name: "ISO 22000:2018",      desc: "Food Safety Management System" },
  { name: "Organic Certified",   desc: "USDA & EU organic standards" },
  { name: "APEDA Registered",    desc: "Agricultural & Processed Food Export Council" },
  { name: "Lab Tested",          desc: "Pesticide & heavy-metal screened — every batch" },
  { name: "HACCP Certified",     desc: "Hazard Analysis Critical Control Point" },
];

const QualitySection = () => (
  <section id="quality" style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(64px,9vw,140px) 32px" }}>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "clamp(40px,5vw,90px)",
    }}>
      {/* Left */}
      <div className="rb-rise" style={{ position: "relative" }}>
        <span aria-hidden="true" style={{
          position: "absolute", top: -32, left: -8,
          fontFamily: "'Instrument Serif', serif", fontSize: "clamp(100px,18vw,200px)",
          lineHeight: 1, color: "rgba(240,233,218,0.04)",
          letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
        }}>03</span>
        <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22, position: "relative" }}>
          <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>03 — Assurance</span>
        </div>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif", fontWeight: 500,
          fontSize: "clamp(34px,4.4vw,62px)", lineHeight: 1.02,
          letterSpacing: "-.01em", margin: 0, color: "#F0E9DA",
        }}>
          Certified to the core.
        </h2>
        <p style={{ color: "#A2917A", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: 1.62, margin: "24px 0 36px", maxWidth: "46ch" }}>
          Every batch is screened for pesticides and heavy metals, then packed to international food-safety standards — with documentation to match.
        </p>

        {/* FSSAI block */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "20px 22px", border: "1px solid rgba(240,233,218,0.14)", marginBottom: 24 }}>
          <img
            src={fssaiLogo}
            alt="FSSAI"
            style={{ width: 58, height: 58, objectFit: "contain", background: "#F0E9DA", padding: 6, borderRadius: 6, flexShrink: 0 }}
          />
          <div>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(17px,1.6vw,22px)", lineHeight: 1.3, color: "#F0E9DA", display: "block" }}>
              A 100% quality guarantee on every shipment we send.
            </span>
            <span style={{ fontSize: 11, letterSpacing: ".1em", color: "#A2917A", marginTop: 6, display: "block" }}>
              JRHP Export House Private Limited
            </span>
          </div>
        </div>

        {/* Packaging note */}
        <div style={{
          padding: "16px 20px",
          border: "1px solid rgba(240,233,218,0.14)",
          display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12,
        }}>
          <span style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>
            Pack sizes
          </span>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#F0E9DA" }}>
            50 g · 250 g · 500 g · 1 kg
          </span>
        </div>
      </div>

      {/* Right: certs list */}
      <div className="rb-rise" style={{ borderTop: "1px solid rgba(240,233,218,0.14)", animationDelay: "120ms" }}>
        {certs.map((c) => (
          <div key={c.name} style={{
            display: "flex", alignItems: "baseline", justifyContent: "space-between",
            gap: 20, padding: "22px 0", borderBottom: "1px solid rgba(240,233,218,0.14)",
          }}>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 500, fontSize: "clamp(20px,2vw,26px)", letterSpacing: "-.005em", color: "#F0E9DA" }}>
              {c.name}
            </span>
            <span style={{ textAlign: "right", fontSize: 12.5, color: "#A2917A", lineHeight: 1.45, maxWidth: "26ch" }}>
              {c.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QualitySection;
