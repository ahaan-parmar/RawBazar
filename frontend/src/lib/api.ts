// API Base URL - uses environment variable or defaults
// In development with Vite proxy: use relative path '/api' (proxy handles it)
// In production: set VITE_API_URL to your full backend URL (e.g., 'http://localhost:3001')
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
  // Inquiries
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
    // Build the correct URL
    // If API_BASE_URL is a full URL (http://...), add /api before endpoint
    // If API_BASE_URL is '/api' (relative), it already has /api
    const baseUrl = API_BASE_URL.startsWith('http') 
      ? `${API_BASE_URL}/api` 
      : API_BASE_URL;
    const url = `${baseUrl}/inquiries`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit inquiry');
    }

    return response.json();
  },

  // Products
  getProducts: async () => {
    // Build the correct URL
    const baseUrl = API_BASE_URL.startsWith('http') 
      ? `${API_BASE_URL}/api` 
      : API_BASE_URL;
    const url = `${baseUrl}/products`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return response.json();
  },
};
