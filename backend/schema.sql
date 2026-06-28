-- Create inquiries table for contact form submissions
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  country VARCHAR(100) NOT NULL,
  product_required VARCHAR(255),
  quantity VARCHAR(100) NOT NULL,
  additional_details TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  hindi_name VARCHAR(100),
  description TEXT,
  image_url VARCHAR(500),
  category VARCHAR(100),
  price_per_kg DECIMAL(10, 2),
  min_order_quantity VARCHAR(100),
  origin VARCHAR(100),
  grade VARCHAR(50),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add hindi_name to existing tables (safe to run multiple times)
ALTER TABLE products ADD COLUMN IF NOT EXISTS hindi_name VARCHAR(100);

-- Unique constraint so seed is idempotent
ALTER TABLE products ADD CONSTRAINT IF NOT EXISTS products_name_unique UNIQUE (name);

-- Create index on inquiries email for faster lookups
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at);

-- Create index on products
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON products(is_active);
