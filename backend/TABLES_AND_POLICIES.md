# Database Tables and Policies

## Tables

### 1. `inquiries` Table
Stores contact form submissions and export inquiries.

**Schema:**
```sql
CREATE TABLE inquiries (
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
```

**Indexes:**
- `idx_inquiries_email` - On `email` column
- `idx_inquiries_status` - On `status` column
- `idx_inquiries_created_at` - On `created_at` column

**Status Values:**
- `new` - New inquiry (default)
- `contacted` - Customer has been contacted
- `quoted` - Quote has been sent
- `closed` - Inquiry closed/deal completed
- `rejected` - Inquiry rejected

---

### 2. `products` Table
Stores product information for spices.

**Schema:**
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
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
```

**Indexes:**
- `idx_products_category` - On `category` column
- `idx_products_is_active` - On `is_active` column

---

## Row Level Security (RLS) Policies

### Inquiries Table Policies

1. **Allow public to insert inquiries**
   - **Action:** INSERT
   - **Target:** public (anonymous users)
   - **Description:** Anyone can submit an inquiry through the contact form
   - **Policy:** `Allow public to insert inquiries`

2. **Users can read their own inquiries**
   - **Action:** SELECT
   - **Target:** authenticated users
   - **Description:** Users can only see inquiries submitted with their email
   - **Policy:** `Users can read their own inquiries`
   - **Note:** Requires Supabase authentication

3. **Admin can read all inquiries**
   - **Action:** SELECT
   - **Target:** authenticated admin (rawbazarofficial@gmail.com)
   - **Description:** Admin can view all inquiries
   - **Policy:** `Admin can read all inquiries`

4. **Admin can update inquiry status**
   - **Action:** UPDATE
   - **Target:** authenticated admin
   - **Description:** Admin can update inquiry status
   - **Policy:** `Admin can update inquiry status`

5. **Admin can delete inquiries**
   - **Action:** DELETE
   - **Target:** authenticated admin
   - **Description:** Admin can delete inquiries
   - **Policy:** `Admin can delete inquiries`

---

### Products Table Policies

1. **Allow public to read active products**
   - **Action:** SELECT
   - **Target:** public (anonymous users)
   - **Description:** Anyone can view active products
   - **Policy:** `Allow public to read active products`
   - **Filter:** Only shows products where `is_active = true`

2. **Admin can read all products**
   - **Action:** SELECT
   - **Target:** authenticated admin
   - **Description:** Admin can view all products (active and inactive)
   - **Policy:** `Admin can read all products`

3. **Admin can insert products**
   - **Action:** INSERT
   - **Target:** authenticated admin
   - **Description:** Admin can create new products
   - **Policy:** `Admin can insert products`

4. **Admin can update products**
   - **Action:** UPDATE
   - **Target:** authenticated admin
   - **Description:** Admin can update product information
   - **Policy:** `Admin can update products`

5. **Admin can delete products**
   - **Action:** DELETE
   - **Target:** authenticated admin
   - **Description:** Admin can delete products
   - **Policy:** `Admin can delete products`

---

## Setup Instructions

### 1. Apply Policies to Supabase

Run the policies SQL file in your Supabase SQL Editor:

```bash
# Copy the contents of policies.sql and run in Supabase Dashboard
# Or use Supabase CLI:
supabase db push
```

### 2. Configure Admin Email

Update the admin email in `policies.sql`:
- Replace `'rawbazarofficial@gmail.com'` with your actual admin email
- Or create a separate admin users table for more flexibility

### 3. Enable Authentication (Optional)

If you want users to read their own inquiries:
1. Enable Supabase Authentication
2. Set up email authentication
3. Users must sign in to view their inquiries

### 4. Alternative: Disable RLS for Backend API

If you're using a backend API (not Supabase client directly):
- You can disable RLS and handle authentication in your backend
- Or keep RLS enabled and use service role key in backend

---

## Policy Modifications

### To Allow Public Read Access to All Inquiries:
Uncomment this policy in `policies.sql`:
```sql
CREATE POLICY "Allow public to read inquiries"
ON inquiries
FOR SELECT
TO public
USING (true);
```

### To Allow Public Read Access to All Products (including inactive):
Uncomment this policy in `policies.sql`:
```sql
CREATE POLICY "Allow public to read all products"
ON products
FOR SELECT
TO public
USING (true);
```

---

## Security Notes

1. **Public INSERT on inquiries** - This is safe as it only allows creating new records
2. **Admin-only UPDATE/DELETE** - Prevents unauthorized modifications
3. **Email-based admin check** - Simple but effective. Consider using a roles table for production
4. **Active products filter** - Public users only see active products by default

---

## Testing Policies

### Test Public Insert (Inquiries):
```sql
-- Should work (public can insert)
INSERT INTO inquiries (company_name, contact_person, email, phone, country, quantity)
VALUES ('Test Co', 'Test User', 'test@example.com', '+1234567890', 'USA', '100kg');
```

### Test Admin Access:
```sql
-- Must be authenticated as admin
SELECT * FROM inquiries; -- Should see all
UPDATE inquiries SET status = 'contacted' WHERE id = 1; -- Should work
```

---

## Quick Reference

| Table | Public Read | Public Insert | Admin Read | Admin Update | Admin Delete |
|-------|-------------|---------------|------------|-------------|-------------|
| inquiries | ❌ (or optional) | ✅ | ✅ | ✅ | ✅ |
| products | ✅ (active only) | ❌ | ✅ (all) | ✅ | ✅ |
