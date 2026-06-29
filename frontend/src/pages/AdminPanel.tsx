import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";

const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY ?? "";

const CATEGORIES = ["Spices", "Powders", "Seeds", "Millets & Grains", "Salt & Minerals", "Seasonings"];

const STATUS_META: Record<string, { label: string; color: string }> = {
  new:       { label: "New",       color: "#D69A2E" },
  contacted: { label: "Contacted", color: "#60a5fa" },
  quoted:    { label: "Quoted",    color: "#a78bfa" },
  closed:    { label: "Closed",    color: "#4ade80" },
  rejected:  { label: "Rejected",  color: "#f87171" },
};

const s = {
  page:    { minHeight: "100vh", background: "#14100B", color: "#F0E9DA", fontFamily: "'Epilogue', sans-serif", padding: "0 0 80px" } as React.CSSProperties,
  header:  { borderBottom: "1px solid rgba(240,233,218,0.1)", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" } as React.CSSProperties,
  wrap:    { maxWidth: 1200, margin: "0 auto", padding: "0 32px" } as React.CSSProperties,
  tabs:    { display: "flex", gap: 0, borderBottom: "1px solid rgba(240,233,218,0.1)", marginBottom: 32 } as React.CSSProperties,
  table:   { width: "100%", borderCollapse: "collapse" as const, fontSize: 13 },
  th:      { textAlign: "left" as const, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#A2917A", fontWeight: 600, padding: "10px 12px", borderBottom: "1px solid rgba(240,233,218,0.1)" },
  td:      { padding: "12px 12px", borderBottom: "1px solid rgba(240,233,218,0.07)", verticalAlign: "top" as const },
  input:   { background: "rgba(240,233,218,0.05)", border: "1px solid rgba(240,233,218,0.14)", padding: "8px 10px", color: "#F0E9DA", fontFamily: "'Epilogue', sans-serif", fontSize: 13, outline: "none", borderRadius: 2, width: "100%" } as React.CSSProperties,
  select:  { background: "#1C1610", border: "1px solid rgba(240,233,218,0.14)", padding: "6px 8px", color: "#F0E9DA", fontFamily: "'Epilogue', sans-serif", fontSize: 12, outline: "none", borderRadius: 2 } as React.CSSProperties,
  btn:     (gold?: boolean) => ({ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 16px", border: `1px solid ${gold ? "#D69A2E" : "rgba(240,233,218,0.2)"}`, borderRadius: 2, background: "transparent", color: gold ? "#D69A2E" : "#F0E9DA", fontFamily: "'Epilogue', sans-serif", fontSize: 12, letterSpacing: ".08em", cursor: "pointer" } as React.CSSProperties),
  badge:   (status: string) => ({ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase" as const, fontWeight: 600, color: STATUS_META[status]?.color ?? "#A2917A", background: `${STATUS_META[status]?.color ?? "#A2917A"}18`, padding: "3px 8px", borderRadius: 2 }),
};

interface Inquiry {
  id: number; company_name: string; contact_person: string; email: string;
  phone: string; country: string; product_required: string | null;
  quantity: string; additional_details: string | null; status: string;
  created_at: string;
}

interface Product {
  id: number; name: string; hindi_name: string | null; category: string | null;
  grade: string | null; origin: string | null; image_url: string | null; is_active: boolean;
}

// ── Password Gate ────────────────────────────────────────────────────────────

const PasswordGate = ({ onAuth }: { onAuth: () => void }) => {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [focused, setFocused] = useState(false);

  const attempt = () => {
    if (pw === ADMIN_KEY && ADMIN_KEY !== "") {
      sessionStorage.setItem("rb_auth", pw);
      onAuth();
    } else {
      setErr(true);
      setPw("");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#14100B", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: "#F0E9DA", lineHeight: 1 }}>
          Raw<span style={{ fontStyle: "italic", color: "#D69A2E" }}>Bazar</span>
        </div>
        <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#A2917A" }}>Operations access</div>
        <input
          type="password"
          placeholder="Access key"
          value={pw}
          onChange={e => { setPw(e.target.value); setErr(false); }}
          onKeyDown={e => e.key === "Enter" && attempt()}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...s.input, borderColor: err ? "#f87171" : focused ? "#D69A2E" : "rgba(240,233,218,0.14)", padding: "10px 12px" }}
          autoFocus
        />
        {err && <div style={{ fontSize: 12, color: "#f87171" }}>Incorrect key.</div>}
        <button onClick={attempt} style={{ ...s.btn(true), justifyContent: "center", padding: "11px 0" }}>
          Enter →
        </button>
      </div>
    </div>
  );
};

// ── Inquiries Tab ────────────────────────────────────────────────────────────

const InquiriesTab = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [updating, setUpdating] = useState<number | null>(null);

  const load = useCallback(() => {
    setLoading(true);
    api.getInquiries().then(r => setInquiries(r.data ?? [])).finally(() => setLoading(false));
  }, []);

  useEffect(() => { load(); }, [load]);

  const changeStatus = async (id: number, status: string) => {
    setUpdating(id);
    try {
      await api.updateInquiryStatus(id, status);
      setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    } finally {
      setUpdating(null);
    }
  };

  if (loading) return <div style={{ color: "#A2917A", padding: "40px 0", fontSize: 13 }}>Loading…</div>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: "#A2917A", letterSpacing: ".1em" }}>{inquiries.length} total inquiries</span>
        <button onClick={load} style={s.btn()}>↻ Refresh</button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={s.table}>
          <thead>
            <tr>
              {["#", "Company", "Contact", "Country", "Product", "Qty", "Status", "Date", ""].map(h => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inquiries.map(inq => (
              <>
                <tr
                  key={inq.id}
                  style={{ cursor: "pointer", background: expanded === inq.id ? "rgba(214,154,46,0.04)" : "transparent" }}
                  onClick={() => setExpanded(expanded === inq.id ? null : inq.id)}
                >
                  <td style={{ ...s.td, color: "#A2917A", width: 32 }}>{inq.id}</td>
                  <td style={{ ...s.td, fontWeight: 500 }}>{inq.company_name}</td>
                  <td style={{ ...s.td, color: "#A2917A" }}>{inq.contact_person}</td>
                  <td style={s.td}>{inq.country}</td>
                  <td style={{ ...s.td, color: "#A2917A" }}>{inq.product_required ?? "—"}</td>
                  <td style={s.td}>{inq.quantity}</td>
                  <td style={s.td} onClick={e => e.stopPropagation()}>
                    <select
                      value={inq.status}
                      disabled={updating === inq.id}
                      onChange={e => changeStatus(inq.id, e.target.value)}
                      style={{ ...s.select, color: STATUS_META[inq.status]?.color ?? "#F0E9DA" }}
                    >
                      {Object.entries(STATUS_META).map(([v, m]) => (
                        <option key={v} value={v}>{m.label}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ ...s.td, color: "#A2917A", whiteSpace: "nowrap", fontSize: 11 }}>
                    {new Date(inq.created_at).toLocaleDateString("en-IN")}
                  </td>
                  <td style={{ ...s.td, color: "#A2917A" }}>{expanded === inq.id ? "▲" : "▼"}</td>
                </tr>
                {expanded === inq.id && (
                  <tr key={`${inq.id}-exp`}>
                    <td colSpan={9} style={{ ...s.td, background: "rgba(240,233,218,0.02)", padding: "14px 20px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 32px", fontSize: 12 }}>
                        <div><span style={{ color: "#A2917A" }}>Email: </span>{inq.email}</div>
                        <div><span style={{ color: "#A2917A" }}>Phone: </span>{inq.phone}</div>
                        <div><span style={{ color: "#A2917A" }}>Status: </span><span style={s.badge(inq.status)}>{STATUS_META[inq.status]?.label}</span></div>
                        {inq.additional_details && (
                          <div style={{ gridColumn: "1 / -1" }}>
                            <span style={{ color: "#A2917A" }}>Notes: </span>{inq.additional_details}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ── Products Tab ─────────────────────────────────────────────────────────────

const EMPTY_PRODUCT = { name: "", hindi_name: "", category: "", grade: "", origin: "", image_url: "", is_active: true };

const ProductsTab = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<number | null>(null);
  const [editBuf, setEditBuf] = useState<Record<string, unknown>>({});
  const [adding, setAdding] = useState(false);
  const [newBuf, setNewBuf] = useState({ ...EMPTY_PRODUCT });
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = useCallback(() => {
    setLoading(true);
    api.getAllProducts().then(r => setProducts(r.data ?? [])).finally(() => setLoading(false));
  }, []);

  useEffect(() => { load(); }, [load]);

  const startEdit = (p: Product) => {
    setEditing(p.id);
    setEditBuf({ name: p.name, hindi_name: p.hindi_name ?? "", category: p.category ?? "", grade: p.grade ?? "", origin: p.origin ?? "", image_url: p.image_url ?? "", is_active: p.is_active });
  };

  const saveEdit = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const res = await api.updateProduct(editing, editBuf);
      setProducts(prev => prev.map(p => p.id === editing ? res.data : p));
      setEditing(null);
    } finally { setSaving(false); }
  };

  const saveNew = async () => {
    setSaving(true);
    try {
      const res = await api.createProduct(newBuf);
      setProducts(prev => [...prev, res.data]);
      setAdding(false);
      setNewBuf({ ...EMPTY_PRODUCT });
    } finally { setSaving(false); }
  };

  const del = async (id: number) => {
    if (!confirm("Delete this product?")) return;
    setDeleting(id);
    try {
      await api.deleteProduct(id);
      setProducts(prev => prev.filter(p => p.id !== id));
    } finally { setDeleting(null); }
  };

  const EditRow = ({ buf, set }: { buf: Record<string, unknown>; set: (k: string, v: unknown) => void }) => (
    <tr style={{ background: "rgba(214,154,46,0.06)" }}>
      <td style={s.td}><input style={s.input} value={buf.name as string} onChange={e => set("name", e.target.value)} placeholder="Name *" /></td>
      <td style={s.td}><input style={s.input} value={buf.hindi_name as string} onChange={e => set("hindi_name", e.target.value)} placeholder="Hindi name" /></td>
      <td style={s.td}>
        <select style={s.select} value={buf.category as string} onChange={e => set("category", e.target.value)}>
          <option value="">— Category —</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </td>
      <td style={s.td}><input style={s.input} value={buf.grade as string} onChange={e => set("grade", e.target.value)} placeholder="Grade" /></td>
      <td style={s.td}><input style={s.input} value={buf.origin as string} onChange={e => set("origin", e.target.value)} placeholder="Origin" /></td>
      <td style={s.td}>
        <select style={s.select} value={String(buf.is_active)} onChange={e => set("is_active", e.target.value === "true")}>
          <option value="true">Active</option>
          <option value="false">Hidden</option>
        </select>
      </td>
      <td style={s.td} />
    </tr>
  );

  if (loading) return <div style={{ color: "#A2917A", padding: "40px 0", fontSize: 13 }}>Loading…</div>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: "#A2917A", letterSpacing: ".1em" }}>{products.length} products</span>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={load} style={s.btn()}>↻ Refresh</button>
          <button onClick={() => { setAdding(true); setEditing(null); }} style={s.btn(true)}>+ Add product</button>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={s.table}>
          <thead>
            <tr>
              {["Name", "Hindi", "Category", "Grade", "Origin", "Status", "Actions"].map(h => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {adding && (
              <>
                <EditRow buf={newBuf as unknown as Record<string, unknown>} set={(k, v) => setNewBuf(b => ({ ...b, [k]: v }))} />
                <tr>
                  <td colSpan={7} style={{ ...s.td, paddingTop: 4 }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={saveNew} disabled={saving} style={s.btn(true)}>{saving ? "Saving…" : "Save"}</button>
                      <button onClick={() => setAdding(false)} style={s.btn()}>Cancel</button>
                    </div>
                  </td>
                </tr>
              </>
            )}
            {products.map(p => editing === p.id ? (
              <>
                <EditRow key={`${p.id}-edit`} buf={editBuf} set={(k, v) => setEditBuf(b => ({ ...b, [k]: v }))} />
                <tr key={`${p.id}-save`}>
                  <td colSpan={7} style={{ ...s.td, paddingTop: 4 }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={saveEdit} disabled={saving} style={s.btn(true)}>{saving ? "Saving…" : "Save"}</button>
                      <button onClick={() => setEditing(null)} style={s.btn()}>Cancel</button>
                    </div>
                  </td>
                </tr>
              </>
            ) : (
              <tr key={p.id} style={{ opacity: p.is_active ? 1 : 0.45 }}>
                <td style={{ ...s.td, fontWeight: 500 }}>{p.name}</td>
                <td style={{ ...s.td, color: "#A2917A", fontStyle: "italic" }}>{p.hindi_name ?? "—"}</td>
                <td style={{ ...s.td, color: "#A2917A" }}>{p.category ?? "—"}</td>
                <td style={{ ...s.td, color: "#A2917A", fontSize: 11 }}>{p.grade ?? "—"}</td>
                <td style={{ ...s.td, color: "#A2917A" }}>{p.origin ?? "—"}</td>
                <td style={s.td}>
                  <span style={s.badge(p.is_active ? "closed" : "rejected")}>
                    {p.is_active ? "Active" : "Hidden"}
                  </span>
                </td>
                <td style={s.td}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => startEdit(p)} style={s.btn()}>Edit</button>
                    <button onClick={() => del(p.id)} disabled={deleting === p.id} style={{ ...s.btn(), color: "#f87171", borderColor: "rgba(248,113,113,0.3)" }}>
                      {deleting === p.id ? "…" : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ── Main Panel ───────────────────────────────────────────────────────────────

const AdminPanel = () => {
  const [authed, setAuthed] = useState(() => {
    const stored = sessionStorage.getItem("rb_auth");
    return stored !== null && stored === ADMIN_KEY && ADMIN_KEY !== "";
  });
  const [tab, setTab] = useState<"inquiries" | "products">("inquiries");

  if (!authed) return <PasswordGate onAuth={() => setAuthed(true)} />;

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: "14px 24px",
    fontSize: 11,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    fontWeight: 600,
    color: active ? "#F0E9DA" : "#A2917A",
    background: "transparent",
    border: "none",
    borderBottom: `2px solid ${active ? "#D69A2E" : "transparent"}`,
    cursor: "pointer",
    fontFamily: "'Epilogue', sans-serif",
  });

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, letterSpacing: "-.01em" }}>
          Raw<span style={{ fontStyle: "italic", color: "#D69A2E" }}>Bazar</span>
          <span style={{ fontSize: 11, color: "#A2917A", letterSpacing: ".2em", textTransform: "uppercase", marginLeft: 16, fontFamily: "'Epilogue', sans-serif" }}>Ops</span>
        </div>
        <button
          onClick={() => { sessionStorage.removeItem("rb_auth"); setAuthed(false); }}
          style={{ ...s.btn(), fontSize: 11, color: "#A2917A" }}
        >
          Sign out
        </button>
      </div>

      <div style={{ ...s.wrap, paddingTop: 32 }}>
        <div style={s.tabs}>
          <button style={tabStyle(tab === "inquiries")} onClick={() => setTab("inquiries")}>Inquiries</button>
          <button style={tabStyle(tab === "products")} onClick={() => setTab("products")}>Products</button>
        </div>
        {tab === "inquiries" ? <InquiriesTab /> : <ProductsTab />}
      </div>
    </div>
  );
};

export default AdminPanel;
