import { useState } from "react";
import { api } from "@/lib/api";

interface FormState {
  company: string;
  contact: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  details: string;
}

const inputStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(240,233,218,0.14)",
  padding: "8px 0",
  color: "#F0E9DA",
  fontFamily: "'Epilogue', sans-serif",
  fontSize: 15,
  outline: "none",
  transition: "border-color .25s",
  width: "100%",
};

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 9,
};

const labelTextStyle: React.CSSProperties = {
  fontSize: 10.5,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "#A2917A",
  fontWeight: 600,
};

const ContactInput = ({
  label, type = "text", placeholder, required, value, onChange,
}: {
  label: string; type?: string; placeholder?: string;
  required?: boolean; value: string; onChange: (v: string) => void;
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <label style={labelStyle}>
      <span style={labelTextStyle}>{label}{required ? " *" : ""}</span>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...inputStyle, borderBottomColor: focused ? "#D69A2E" : "rgba(240,233,218,0.14)" }}
      />
    </label>
  );
};

const ContactSection = () => {
  const [form, setForm] = useState<FormState>({
    company: "", contact: "", email: "", phone: "",
    country: "", product: "", quantity: "", details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detailsFocused, setDetailsFocused] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [waHover, setWaHover] = useState(false);

  const set = (key: keyof FormState) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.submitInquiry({
        company_name: form.company,
        contact_person: form.contact,
        email: form.email,
        phone: form.phone,
        country: form.country,
        product_required: form.product,
        quantity: form.quantity,
        additional_details: form.details,
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong — please email us directly at rawbazarofficial@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ borderTop: "1px solid rgba(240,233,218,0.14)", background: "#1C1610" }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "clamp(64px,9vw,130px) 32px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "clamp(40px,5vw,84px)",
      }}>
        {/* Left: contact info */}
        <div className="rb-rise" style={{ position: "relative" }}>
          <span aria-hidden="true" style={{
            position: "absolute", top: -32, left: -8,
            fontFamily: "'Instrument Serif', serif", fontSize: "clamp(100px,18vw,200px)",
            lineHeight: 1, color: "rgba(240,233,218,0.04)",
            letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
          }}>04</span>
          <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22, position: "relative" }}>
            <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>04 — Inquiries</span>
          </div>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif", fontWeight: 500,
            fontSize: "clamp(36px,4.8vw,68px)", lineHeight: 1.0,
            letterSpacing: "-.012em", margin: 0, color: "#F0E9DA",
          }}>
            Let's talk shipments.
          </h2>
          <p style={{ color: "#A2917A", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: 1.62, margin: "24px 0 36px", maxWidth: "42ch" }}>
            Bulk exports, custom packing or private label — tell us what you need and we'll reply within 24 hours.
          </p>

          <div style={{ borderTop: "1px solid rgba(240,233,218,0.14)" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "18px 0", borderBottom: "1px solid rgba(240,233,218,0.14)" }}>
              <span style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>Visit</span>
              <span style={{ textAlign: "right", fontSize: 14, color: "#F0E9DA", lineHeight: 1.5, maxWidth: "34ch" }}>
                Karvenagar, Pune-52,<br />Maharashtra, India
              </span>
            </div>
            <a href="tel:+917517692934" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "18px 0", borderBottom: "1px solid rgba(240,233,218,0.14)", textDecoration: "none" }}>
              <span style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>Call</span>
              <span style={{ fontSize: 14, color: "#F0E9DA" }}>+91 75176 92934</span>
            </a>
            <a href="mailto:rawbazarofficial@gmail.com" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "18px 0", borderBottom: "1px solid rgba(240,233,218,0.14)", textDecoration: "none" }}>
              <span style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "#A2917A", fontWeight: 600 }}>Email</span>
              <span style={{ fontSize: 14, color: "#F0E9DA" }}>rawbazarofficial@gmail.com</span>
            </a>
          </div>

          <a
            href="https://wa.me/919890661550"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              marginTop: 28, color: "#D69A2E", textDecoration: "none",
              fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600,
              borderBottom: `1px solid ${waHover ? "#D69A2E" : "transparent"}`,
              paddingBottom: 2, transition: "border-color .25s",
            }}
            onMouseEnter={() => setWaHover(true)}
            onMouseLeave={() => setWaHover(false)}
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* Right: form */}
        <div className="rb-rise" style={{ animationDelay: "120ms" }}>
          {submitted ? (
            <div style={{ border: "1px solid rgba(240,233,218,0.14)", padding: "48px 32px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 34, color: "#D69A2E", marginBottom: 12 }}>
                Inquiry received.
              </div>
              <p style={{ color: "#A2917A", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                Thank you — our export team will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
                <ContactInput label="Company" required value={form.company} onChange={set("company")} />
                <ContactInput label="Contact name" required value={form.contact} onChange={set("contact")} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
                <ContactInput label="Email" type="email" required value={form.email} onChange={set("email")} />
                <ContactInput label="Phone" type="tel" required placeholder="+91 …" value={form.phone} onChange={set("phone")} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
                <ContactInput label="Country" required value={form.country} onChange={set("country")} />
                <ContactInput label="Product" placeholder="e.g. Turmeric" value={form.product} onChange={set("product")} />
              </div>
              <ContactInput label="Quantity" required placeholder="e.g. 500 kg / month" value={form.quantity} onChange={set("quantity")} />
              <label style={labelStyle}>
                <span style={labelTextStyle}>Details</span>
                <textarea
                  rows={2}
                  value={form.details}
                  onChange={(e) => set("details")(e.target.value)}
                  onFocus={() => setDetailsFocused(true)}
                  onBlur={() => setDetailsFocused(false)}
                  style={{
                    ...inputStyle,
                    resize: "none",
                    borderBottomColor: detailsFocused ? "#D69A2E" : "rgba(240,233,218,0.14)",
                  }}
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: 8, alignSelf: "flex-start",
                  display: "inline-flex", alignItems: "center", gap: 12,
                  padding: "16px 34px",
                  border: "1px solid #F0E9DA",
                  borderRadius: 2,
                  background: btnHover ? "#F0E9DA" : "transparent",
                  color: btnHover ? "#14100B" : "#F0E9DA",
                  fontFamily: "'Epilogue', sans-serif",
                  fontSize: 12.5, letterSpacing: ".14em",
                  textTransform: "uppercase", fontWeight: 600,
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all .3s",
                  opacity: loading ? 0.6 : 1,
                }}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                {loading ? "Sending…" : <>Submit inquiry <span style={{ fontSize: 15 }}>→</span></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
