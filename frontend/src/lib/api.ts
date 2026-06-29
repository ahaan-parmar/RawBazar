const ORIGIN = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");
const base = `${ORIGIN}/api`;

export const api = {
  // ── Public ────────────────────────────────────────────────────────────────
  submitInquiry: async (data: {
    company_name: string; contact_person: string; email: string; phone: string;
    country: string; product_required?: string; quantity: string; additional_details?: string;
  }) => {
    const r = await fetch(`${base}/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error((e as { message?: string }).message || "Failed"); }
    return r.json();
  },

  getProducts: async () => {
    const r = await fetch(`${base}/products`);
    if (!r.ok) throw new Error("Failed to fetch products");
    return r.json();
  },

  // ── Admin: Inquiries ──────────────────────────────────────────────────────
  getInquiries: async (status?: string) => {
    const url = status ? `${base}/inquiries?status=${status}` : `${base}/inquiries`;
    const r = await fetch(url);
    if (!r.ok) throw new Error("Failed to fetch inquiries");
    return r.json();
  },

  updateInquiryStatus: async (id: number, status: string) => {
    const r = await fetch(`${base}/inquiries/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!r.ok) throw new Error("Failed to update status");
    return r.json();
  },

  // ── Admin: Products ───────────────────────────────────────────────────────
  getAllProducts: async () => {
    const r = await fetch(`${base}/products?is_active=all`);
    if (!r.ok) throw new Error("Failed to fetch products");
    return r.json();
  },

  createProduct: async (data: Record<string, unknown>) => {
    const r = await fetch(`${base}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!r.ok) throw new Error("Failed to create product");
    return r.json();
  },

  updateProduct: async (id: number, data: Record<string, unknown>) => {
    const r = await fetch(`${base}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!r.ok) throw new Error("Failed to update product");
    return r.json();
  },

  deleteProduct: async (id: number) => {
    const r = await fetch(`${base}/products/${id}`, { method: "DELETE" });
    if (!r.ok) throw new Error("Failed to delete product");
    return r.json();
  },

  seedProducts: async () => {
    const r = await fetch(`${base}/products/seed`, { method: "POST" });
    if (!r.ok) throw new Error("Seed failed");
    return r.json();
  },
};
