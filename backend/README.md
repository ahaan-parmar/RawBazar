# RawBazaar Backend

Backend API server for RawBazaar with PostgreSQL database connection.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update the `.env` file with your database credentials if needed.

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/test-db` - Test database connection
- `GET /api/tables` - List all database tables

## Database Connection

The server connects to a Supabase PostgreSQL database. Make sure your connection string in `.env` is correct and URL-encoded if it contains special characters.
