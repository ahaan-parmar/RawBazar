import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ProductsShowcase from "@/components/ProductsShowcase";
import QualitySection from "@/components/QualitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MarqueeTicker from "@/components/MarqueeTicker";

const certStrip = [
  "FSSAI Certified",
  "ISO 22000:2018",
  "USDA & EU Organic",
  "APEDA Registered",
  "HACCP",
];

const Index = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!barRef.current) return;
      const h = document.documentElement;
      const max = (h.scrollHeight - h.clientHeight) || 1;
      barRef.current.style.width = Math.min(100, Math.max(0, (h.scrollTop / max) * 100)) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>(".rb-rise"));
    items.forEach((el) => {
      const d = parseInt(el.dataset.delay || "0", 10);
      el.style.animation = `rb-rise 0.9s cubic-bezier(0.2,0.7,0.2,1) ${d}ms both`;
      el.style.willChange = "opacity, transform";
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>RawBazar — Premium Indian Spice Exporter</title>
        <meta name="description" content="RawBazar is India's trusted premium spice exporter. Authentic turmeric, cumin, cardamom, red chili & more. 25+ years of excellence, 50+ countries served." />
        <meta name="keywords" content="Indian spice exporter, premium spices, turmeric exporter, cumin seeds, cardamom export, wholesale spices, bulk spice supplier" />
        <link rel="canonical" href="https://rawbazar.com" />
        <meta property="og:title" content="RawBazar — Premium Indian Spice Exporter" />
        <meta property="og:description" content="Authentic Indian spices from farm to world. 25+ years of export excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rawbazar.com" />
        <meta property="og:image" content="https://rawbazar.com/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://rawbazar.com/favicon.png" />
      </Helmet>

      <div style={{ minHeight: "100vh", background: "#14100B", color: "#F0E9DA", overflowX: "hidden" }}>
        {/* Scroll progress bar */}
        <div aria-hidden="true" style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 100 }}>
          <div ref={barRef} style={{ height: "100%", width: 0, background: "#D69A2E" }} />
        </div>

        <Navbar />

        <main>
          <HeroSection />

          {/* Certification strip */}
          <div style={{ borderTop: "1px solid rgba(240,233,218,0.14)", borderBottom: "1px solid rgba(240,233,218,0.14)" }}>
            <div style={{
              maxWidth: 1320, margin: "0 auto",
              padding: "18px 32px",
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "clamp(18px,3vw,44px)", flexWrap: "wrap",
            }}>
              {certStrip.map((cert, i) => (
                <>
                  {i > 0 && (
                    <span key={`dot-${i}`} style={{ width: 4, height: 4, borderRadius: "50%", background: "#D69A2E", display: "inline-block", flexShrink: 0 }} />
                  )}
                  <span key={cert} style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>
                    {cert}
                  </span>
                </>
              ))}
            </div>
          </div>

          <AboutPreview />

          {/* Marquee between sourcing and catalogue */}
          <MarqueeTicker />

          <ProductsShowcase />
          <QualitySection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
