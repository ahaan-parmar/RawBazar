# RawBazaar API Documentation

## Base URL
```
http://localhost:3001
```

## Endpoints

### Health & Database

#### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

#### GET /api/test-db
Test database connection.

**Response:**
```json
{
  "success": true,
  "message": "Database connection successful",
  "timestamp": "2025-12-14T13:06:59.214Z"
}
```

#### GET /api/tables
Get all database tables.

**Response:**
```json
{
  "success": true,
  "tables": ["inquiries", "products"]
}
```

---

### Inquiries

#### POST /api/inquiries
Submit a new export inquiry.

**Request Body:**
```json
{
  "company_name": "ABC Trading Co.",
  "contact_person": "John Doe",
  "email": "john@abctrading.com",
  "phone": "+1 234 567 8900",
  "country": "United States",
  "product_required": "Turmeric, Cumin",
  "quantity": "500kg",
  "additional_details": "Need organic certification"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "data": {
    "id": 1,
    "company_name": "ABC Trading Co.",
    "contact_person": "John Doe",
    "email": "john@abctrading.com",
    "phone": "+1 234 567 8900",
    "country": "United States",
    "product_required": "Turmeric, Cumin",
    "quantity": "500kg",
    "additional_details": "Need organic certification",
    "status": "new",
    "created_at": "2025-12-14T13:00:00.000Z",
    "updated_at": "2025-12-14T13:00:00.000Z"
  }
}
```

#### GET /api/inquiries
Get all inquiries (for admin).

**Query Parameters:**
- `status` (optional): Filter by status (new, contacted, quoted, closed, rejected)
- `limit` (optional): Number of results (default: 50)
- `offset` (optional): Pagination offset (default: 0)

**Response:**
```json
{
  "success": true,
  "data": [...],
  "total": 100,
  "limit": 50,
  "offset": 0
}
```

#### GET /api/inquiries/:id
Get a specific inquiry.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    ...
  }
}
```

#### PATCH /api/inquiries/:id/status
Update inquiry status.

**Request Body:**
```json
{
  "status": "contacted"
}
```

**Valid statuses:** `new`, `contacted`, `quoted`, `closed`, `rejected`

---

### Products

#### GET /api/products
Get all products.

**Query Parameters:**
- `category` (optional): Filter by category
- `is_active` (optional): Filter by active status (default: true)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Turmeric Powder",
      "description": "Premium quality turmeric",
      "image_url": "...",
      "category": "Spices",
      "price_per_kg": 15.50,
      "min_order_quantity": "100kg",
      "origin": "India",
      "grade": "A",
      "is_active": true,
      "created_at": "...",
      "updated_at": "..."
    }
  ]
}
```

#### GET /api/products/:id
Get a specific product.

#### POST /api/products
Create a new product (admin).

#### PATCH /api/products/:id
Update a product (admin).

---

## Database Schema

### inquiries
- `id` (SERIAL PRIMARY KEY)
- `company_name` (VARCHAR(255))
- `contact_person` (VARCHAR(255))
- `email` (VARCHAR(255))
- `phone` (VARCHAR(50))
- `country` (VARCHAR(100))
- `product_required` (VARCHAR(255))
- `quantity` (VARCHAR(100))
- `additional_details` (TEXT)
- `status` (VARCHAR(50), default: 'new')
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### products
- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR(255))
- `description` (TEXT)
- `image_url` (VARCHAR(500))
- `category` (VARCHAR(100))
- `price_per_kg` (DECIMAL(10, 2))
- `min_order_quantity` (VARCHAR(100))
- `origin` (VARCHAR(100))
- `grade` (VARCHAR(50))
- `is_active` (BOOLEAN, default: true)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)
