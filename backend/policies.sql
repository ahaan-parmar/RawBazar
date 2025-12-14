-- Row Level Security (RLS) Policies for Supabase
-- Enable RLS on tables
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- ============================================
-- INQUIRIES TABLE POLICIES
-- ============================================

-- Policy: Anyone can insert (submit) inquiries
CREATE POLICY "Allow public to insert inquiries"
ON inquiries
FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Anyone can read their own inquiries (by email)
-- Note: This requires authentication. For anonymous access, use the second policy below.
CREATE POLICY "Users can read their own inquiries"
ON inquiries
FOR SELECT
TO authenticated
USING (email = (SELECT email FROM auth.users WHERE id = auth.uid()));

-- Policy: Allow public read access (if you want to show inquiries publicly)
-- Uncomment if you want anonymous users to read inquiries
-- CREATE POLICY "Allow public to read inquiries"
-- ON inquiries
-- FOR SELECT
-- TO public
-- USING (true);

-- Policy: Admin can read all inquiries
-- Replace 'your-admin-email@example.com' with your actual admin email
CREATE POLICY "Admin can read all inquiries"
ON inquiries
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
);

-- Policy: Admin can update inquiry status
CREATE POLICY "Admin can update inquiry status"
ON inquiries
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
);

-- Policy: Admin can delete inquiries
CREATE POLICY "Admin can delete inquiries"
ON inquiries
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
);

-- ============================================
-- PRODUCTS TABLE POLICIES
-- ============================================

-- Policy: Anyone can read active products
CREATE POLICY "Allow public to read active products"
ON products
FOR SELECT
TO public
USING (is_active = true);

-- Policy: Anyone can read all products (including inactive)
-- Uncomment if you want public access to all products
-- CREATE POLICY "Allow public to read all products"
-- ON products
-- FOR SELECT
-- TO public
-- USING (true);

-- Policy: Admin can read all products
CREATE POLICY "Admin can read all products"
ON products
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
);

-- Policy: Admin can insert products
CREATE POLICY "Admin can insert products"
ON products
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
);

-- Policy: Admin can update products
CREATE POLICY "Admin can update products"
ON products
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
);

-- Policy: Admin can delete products
CREATE POLICY "Admin can delete products"
ON products
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'rawbazarofficial@gmail.com'
  )
);
