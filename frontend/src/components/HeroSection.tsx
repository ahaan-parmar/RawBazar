import { useState } from "react";
import heroImage from "@/assets/hero-spices.jpg";

const HeroSection = () => {
  const [catalogueHover, setCatalogueHover] = useState(false);
  const [waHover, setWaHover] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" style={{ position: "relative" }}>
      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
      }}>
        {/* Left: text */}
        <div className="rb-rise" style={{
          padding: "clamp(48px,7vw,104px) clamp(28px,4vw,56px) clamp(44px,5vw,72px) 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "clamp(520px,80vh,860px)",
        }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
            <span style={{ width: 36, height: 1, background: "#D69A2E" }} />
            <span style={{ fontSize: 11.5, letterSpacing: ".32em", textTransform: "uppercase", color: "#D69A2E", fontWeight: 600 }}>
              Spice exporters · Est. Pune, India
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 500,
            fontSize: "clamp(46px,6.2vw,102px)",
            lineHeight: 0.96,
            letterSpacing: "-.014em",
            margin: 0,
            color: "#F0E9DA",
          }}>
            India's finest spices,<br />
            <span style={{ fontStyle: "italic", color: "#D69A2E" }}>delivered to the world.</span>
          </h1>

          {/* Sub */}
          <p style={{
            maxWidth: "46ch",
            margin: "30px 0 0",
            color: "#A2917A",
            fontSize: "clamp(15px,1.2vw,18px)",
            lineHeight: 1.62,
            fontWeight: 400,
          }}>
            A family-run export house sourcing single-origin spices straight from Indian farms — milled to order, lab-tested, and shipped to fifty-plus countries under one seal of trust.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: 26, marginTop: 40, flexWrap: "wrap" }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "15px 28px",
                border: `1px solid ${catalogueHover ? "transparent" : "#F0E9DA"}`,
                borderRadius: 2,
                color: catalogueHover ? "#14100B" : "#F0E9DA",
                textDecoration: "none",
                fontSize: 12.5,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                fontWeight: 600,
                transition: "all .3s",
                background: catalogueHover ? "#F0E9DA" : "transparent",
              }}
              onMouseEnter={() => setCatalogueHover(true)}
              onMouseLeave={() => setCatalogueHover(false)}
            >
              Request the catalogue <span style={{ fontSize: 15 }}>→</span>
            </a>
            <a
              href="https://wa.me/919890661550"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#D69A2E",
                textDecoration: "none",
                fontSize: 12.5,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                fontWeight: 600,
                borderBottom: `1px solid ${waHover ? "#D69A2E" : "transparent"}`,
                paddingBottom: 2,
                transition: "border-color .25s",
              }}
              onMouseEnter={() => setWaHover(true)}
              onMouseLeave={() => setWaHover(false)}
            >
              WhatsApp us
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "clamp(24px,3vw,46px)",
            marginTop: "clamp(44px,5vw,64px)",
            borderTop: "1px solid rgba(240,233,218,0.14)",
            paddingTop: 24,
          }}>
            {[
              { num: "25", label: "Years exporting" },
              { num: "50+", label: "Countries served", gold: true },
              { num: "100%", label: "Lab-tested lots" },
            ].map((stat, i) => (
              <>
                {i > 0 && <div key={`div-${i}`} style={{ width: 1, alignSelf: "stretch", background: "rgba(240,233,218,0.14)" }} />}
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px,4vw,52px)", lineHeight: 1, color: "#F0E9DA" }}>
                    {stat.gold
                      ? <>{stat.num.replace("+", "")}<span style={{ color: "#D69A2E" }}>+</span></>
                      : stat.num}
                  </span>
                  <span style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>
                    {stat.label}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "clamp(360px,52vh,860px)" }}>
          <img
            src={heroImage}
            alt="Indian spices"
            className="rb-kb"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div aria-hidden="true" style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #14100B 0%, transparent 30%), linear-gradient(0deg, rgba(20,16,11,.55), transparent 46%)",
          }} />
          <div style={{ position: "absolute", left: 30, bottom: 26, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D69A2E" }} />
            <span style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "#F0E9DA", fontWeight: 600 }}>
              Single-origin · Milled to order
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
