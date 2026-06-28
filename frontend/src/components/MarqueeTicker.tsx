const items = [
  "Red Chilli Powder", "Haldi", "Goda Masala", "Jeera", "Makhana",
  "Moringa", "Pink Salt", "Ragi", "Kashmiri Mirchi", "Dalchini",
  "Ajwain", "Saunf", "Bajra", "Quinoa", "Chaat Masala", "Elaichi",
  "Chia Seeds", "Methi", "Black Pepper", "Garam Masala",
];

// Double the list so the seamless loop works
const doubled = [...items, ...items];

const MarqueeTicker = () => (
  <div style={{
    borderTop: "1px solid rgba(240,233,218,0.14)",
    borderBottom: "1px solid rgba(240,233,218,0.14)",
    overflow: "hidden",
    padding: "13px 0",
  }}>
    <div style={{
      display: "flex",
      gap: 0,
      animation: "marquee 32s linear infinite",
      whiteSpace: "nowrap",
      willChange: "transform",
    }}>
      {doubled.map((item, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: 15,
            color: "#A2917A",
            paddingRight: 32,
          }}>
            {item}
          </span>
          <span style={{
            display: "inline-block",
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#D69A2E",
            marginRight: 32,
            flexShrink: 0,
          }} />
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeTicker;
