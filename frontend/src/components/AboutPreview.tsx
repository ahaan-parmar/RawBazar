import farmImage from "@/assets/farm.jpg";

const facts = [
  {
    n: "01",
    t: "Quality, Non-Negotiable",
    d: "Every batch tested and graded before it's packed — no shortcuts, no fillers, no compromises hidden behind a label.",
  },
  {
    n: "02",
    t: "Transparent by Design",
    d: "What's on the label is what's in the pack. Single-origin spices milled to order to lock in essential oils, colour and aroma.",
  },
  {
    n: "03",
    t: "Consistent Supply",
    d: "Reliable quality, batch after batch — from farming co-ops in Maharashtra, Kerala & Kashmir straight to your port.",
  },
];

const AboutPreview = () => (
  <section id="sourcing" style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(64px,9vw,140px) 32px" }}>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
      gap: "clamp(36px,5vw,80px)",
      alignItems: "center",
    }}>
      {/* Image */}
      <div className="rb-rise" style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(240,233,218,0.14)" }}>
        <img
          src={farmImage}
          alt="Turmeric harvest at golden hour"
          className="rb-kb"
          style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block", animationDuration: "28s" }}
        />
        <div style={{
          position: "absolute", left: 20, bottom: 18,
          fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase",
          color: "#F0E9DA", fontWeight: 600, textShadow: "0 1px 8px rgba(0,0,0,.6)",
        }}>
          Turmeric harvest · Western Ghats
        </div>
      </div>

      {/* Text */}
      <div className="rb-rise" style={{ animationDelay: "120ms", position: "relative" }}>
        {/* Watermark numeral */}
        <span aria-hidden="true" style={{
          position: "absolute", top: -32, left: -8,
          fontFamily: "'Instrument Serif', serif", fontSize: "clamp(100px,18vw,200px)",
          lineHeight: 1, color: "rgba(240,233,218,0.04)",
          letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
        }}>01</span>
        <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22, position: "relative" }}>
          <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>01 — Our Story</span>
        </div>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif", fontWeight: 500,
          fontSize: "clamp(34px,4.4vw,62px)", lineHeight: 1.02,
          letterSpacing: "-.01em", margin: 0, color: "#F0E9DA",
        }}>
          Why partner with Raw Bazar.
        </h2>
        <p style={{ color: "#A2917A", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: 1.62, margin: "24px 0 0", maxWidth: "50ch" }}>
          Born in Pune, at the heart of Maharashtra — built for chefs, retailers, and customers who know the difference. We obsess over the finest spices India has to offer and hold every batch to a standard that simply doesn't bend.
        </p>

        {/* Brand tagline */}
        <div style={{
          margin: "26px 0 0",
          padding: "18px 0",
          borderTop: "1px solid rgba(240,233,218,0.14)",
        }}>
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(18px,1.8vw,22px)",
            color: "#D69A2E",
            lineHeight: 1.4,
          }}>
            "The right spice, sourced right, changes everything."
          </span>
        </div>

        <div style={{ marginTop: 28, borderTop: "1px solid rgba(240,233,218,0.14)" }}>
          {facts.map((f) => (
            <div key={f.n} style={{
              display: "grid", gridTemplateColumns: "54px 1fr",
              gap: 18, alignItems: "baseline",
              padding: "22px 0", borderBottom: "1px solid rgba(240,233,218,0.14)",
            }}>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: "#D69A2E" }}>{f.n}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 16, letterSpacing: ".01em", marginBottom: 5, color: "#F0E9DA" }}>{f.t}</div>
                <div style={{ color: "#A2917A", fontSize: 14, lineHeight: 1.5 }}>{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
