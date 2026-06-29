import { useRef, useState, useEffect } from "react";
import { api } from "@/lib/api";
import turmericImg from "@/assets/turmeric.jpg";
import redChiliImg from "@/assets/red-chili.jpg";
import blackPepperImg from "@/assets/black-pepper.jpg";
import cardamomImg from "@/assets/cardamom.jpg";
import cuminImg from "@/assets/cumin.jpg";
import corianderImg from "@/assets/coriander.jpg";
import cinnamonImg from "@/assets/cinnamon.jpg";
import saffronImg from "@/assets/saffron.jpg";
import spicesImg from "@/assets/spices.jpg";

// Map DB image_url filenames → local bundled assets
const IMAGE_MAP: Record<string, string> = {
  "turmeric.jpg":     turmericImg,
  "red-chili.jpg":    redChiliImg,
  "black-pepper.jpg": blackPepperImg,
  "cardamom.jpg":     cardamomImg,
  "cumin.jpg":        cuminImg,
  "coriander.jpg":    corianderImg,
  "cinnamon.jpg":     cinnamonImg,
  "saffron.jpg":      saffronImg,
};

const CATEGORY_ORDER = [
  "Spices", "Powders", "Seeds", "Millets & Grains", "Salt & Minerals", "Seasonings",
];

interface Product {
  id: number;
  name: string;
  hindi_name: string | null;
  category: string | null;
  grade: string | null;
  image_url: string | null;
  origin: string | null;
  is_active: boolean;
}

const ProductsShowcase = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProducts()
      .then((res) => setProducts(res.data ?? []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const onListMove = (e: React.MouseEvent) => {
    if (previewRef.current)
      previewRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  };
  const resolveImg = (imgFile: string | null) =>
    imgFile ? (imgFile.startsWith("http") ? imgFile : IMAGE_MAP[imgFile] ?? null) : null;

  const onRowEnter = (imgFile: string | null, idx: number) => {
    const img = resolveImg(imgFile);
    if (!img) return;
    setHoveredIdx(idx);
    if (previewImgRef.current) previewImgRef.current.src = img;
    if (previewRef.current) previewRef.current.style.opacity = "1";
  };
  const onListLeave = () => {
    setHoveredIdx(null);
    if (previewRef.current) previewRef.current.style.opacity = "0";
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Group products by category, preserving order
  const grouped = CATEGORY_ORDER.reduce<Record<string, Product[]>>((acc, cat) => {
    acc[cat] = products.filter((p) => p.category === cat);
    return acc;
  }, {});

  // Featured = products that have a resolvable image
  const featured = products.filter((p) => resolveImg(p.image_url));

  return (
    <section
      id="catalogue"
      onMouseMove={onListMove}
      onMouseLeave={onListLeave}
      style={{ borderTop: "1px solid rgba(240,233,218,0.14)", background: "#1C1610" }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(64px,9vw,130px) 32px" }}>

        {/* Section header */}
        <div className="rb-rise" style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: 24, flexWrap: "wrap", marginBottom: "clamp(34px,4vw,56px)",
          position: "relative",
        }}>
          <span aria-hidden="true" style={{
            position: "absolute", top: -40, left: -8,
            fontFamily: "'Instrument Serif', serif", fontSize: "clamp(100px,18vw,200px)",
            lineHeight: 1, color: "rgba(240,233,218,0.04)",
            letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
          }}>02</span>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 20 }}>
              <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>02 — The catalogue</span>
            </div>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif", fontWeight: 400,
              fontSize: "clamp(34px,4.4vw,62px)", lineHeight: 1.0,
              letterSpacing: "-.01em", margin: 0, color: "#F0E9DA",
            }}>
              Spices. Grains.<br />Salts. Seasonings.
            </h2>
          </div>
          <span style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>
            Bulk · Private label · Custom milling
          </span>
        </div>

        {/* Loading state */}
        {loading && (
          <div style={{ borderTop: "1px solid rgba(240,233,218,0.14)", padding: "48px 0", color: "#A2917A", fontSize: 13, letterSpacing: ".1em" }}>
            Loading catalogue…
          </div>
        )}

        {/* Featured row-list with cursor preview */}
        {!loading && featured.length > 0 && (
          <div className="rb-rise" style={{ borderTop: "1px solid rgba(240,233,218,0.14)", marginBottom: "clamp(40px,5vw,64px)", animationDelay: "80ms" }}>
            {featured.map((item, i) => (
              <a
                key={item.id}
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToContact(); }}
                onMouseEnter={() => onRowEnter(item.image_url, i)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "54px 1.5fr 1fr 1.1fr 30px",
                  alignItems: "center",
                  gap: 18,
                  padding: hoveredIdx === i ? "24px 18px 24px 22px" : "24px 10px",
                  borderBottom: "1px solid rgba(240,233,218,0.14)",
                  textDecoration: "none",
                  color: "#F0E9DA",
                  transition: "background .35s ease, padding .35s ease",
                  background: hoveredIdx === i ? "rgba(214,154,46,0.07)" : "transparent",
                }}
              >
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#D69A2E" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(22px,2.4vw,34px)", lineHeight: 1, letterSpacing: "-.01em" }}>
                  {item.name}
                </span>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, color: "#A2917A" }}>
                  {item.hindi_name ?? ""}
                </span>
                <span style={{ fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>
                  {item.grade ?? ""}
                </span>
                <span style={{ textAlign: "right", color: "#D69A2E", fontSize: 16 }}>→</span>
              </a>
            ))}
          </div>
        )}

        {/* Full catalogue by category */}
        {!loading && products.length > 0 && (
          <div className="rb-rise" style={{ animationDelay: "160ms" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 14, marginBottom: 32,
              borderTop: "1px solid rgba(240,233,218,0.14)", paddingTop: 32,
            }}>
              <span style={{ width: 28, height: 1, background: "#D69A2E" }} />
              <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>
                Full range — {CATEGORY_ORDER.length} categories · {products.length} products
              </span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "clamp(28px,4vw,48px)",
            }}>
              {CATEGORY_ORDER.map((cat) => {
                const items = grouped[cat];
                if (!items?.length) return null;
                return (
                  <div key={cat}>
                    <div style={{
                      display: "flex", alignItems: "baseline", gap: 10,
                      marginBottom: 16, paddingBottom: 10,
                      borderBottom: "1px solid rgba(240,233,218,0.14)",
                    }}>
                      <span style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 18, color: "#D69A2E" }}>
                        {cat}
                      </span>
                    </div>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                      {items.map((item) => (
                        <li key={item.id} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 17, color: "#F0E9DA", lineHeight: 1.2 }}>
                            {item.name}
                          </span>
                          {item.hindi_name && (
                            <span style={{ fontSize: 12, color: "#A2917A", flexShrink: 0 }}>{item.hindi_name}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Sizes */}
            <div style={{
              marginTop: "clamp(36px,4vw,52px)",
              padding: "20px 24px",
              border: "1px solid rgba(240,233,218,0.14)",
              display: "flex", alignItems: "center", gap: "clamp(20px,3vw,40px)", flexWrap: "wrap",
            }}>
              <span style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>
                Pack sizes
              </span>
              {["50 g", "250 g", "500 g", "1 kg"].map((s, i) => (
                <>
                  {i > 0 && <span key={`dot-${s}`} style={{ width: 3, height: 3, borderRadius: "50%", background: "#D69A2E", display: "inline-block" }} />}
                  <span key={s} style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#F0E9DA" }}>{s}</span>
                </>
              ))}
              <span style={{ fontSize: 12, color: "#A2917A", marginLeft: "auto" }}>All sizes customisable</span>
            </div>
          </div>
        )}

        {/* Empty state — DB seeded but no products */}
        {!loading && products.length === 0 && (
          <div style={{ padding: "48px 0", color: "#A2917A", fontSize: 14 }}>
            No products found. Run <code style={{ color: "#D69A2E" }}>node seed-products.js</code> in the backend folder to populate the catalogue.
          </div>
        )}

        <p style={{ margin: "24px 0 0", color: "#A2917A", fontSize: 14 }}>
          Custom milling, private label & bulk export available —{" "}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToContact(); }}
            style={{ color: "#F0E9DA", borderBottom: "1px solid #D69A2E", textDecoration: "none", paddingBottom: 1 }}
          >
            request the full price list
          </a>.
        </p>
      </div>

      {/* Cursor preview */}
      <div
        ref={previewRef}
        aria-hidden="true"
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 90,
          pointerEvents: "none", opacity: 0,
          transition: "opacity .3s ease", willChange: "transform, opacity",
        }}
      >
        <img
          ref={previewImgRef}
          src={spicesImg}
          alt=""
          style={{
            width: 230, height: 300, objectFit: "cover", display: "block",
            marginLeft: -115, marginTop: -164,
            border: "1px solid rgba(240,233,218,0.14)",
            boxShadow: "0 34px 70px rgba(0,0,0,.55)",
          }}
        />
      </div>
    </section>
  );
};

export default ProductsShowcase;
