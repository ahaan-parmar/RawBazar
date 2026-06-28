// VITE_API_URL = full backend origin, e.g. https://rawbazar-backend.onrender.com
// Defaults to empty string so relative /api/* hits Vite's dev-proxy
const ORIGIN = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

const base = `${ORIGIN}/api`;

export const api = {
  submitInquiry: async (data: {
    company_name: string;
    contact_person: string;
    email: string;
    phone: string;
    country: string;
    product_required?: string;
    quantity: string;
    additional_details?: string;
  }) => {
    const response = await fetch(`${base}/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error((error as { message?: string }).message || "Failed to submit inquiry");
    }
    return response.json();
  },

  getProducts: async () => {
    const response = await fetch(`${base}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },
};
