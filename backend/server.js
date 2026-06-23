import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection, query } from './db.js';
import initDatabase from './init-db.js';
import inquiriesRouter from './routes/inquiries.js';
import productsRouter from './routes/products.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Build the allowlist: for each FRONTEND_URL, include both apex and www variants.
const expandOrigins = (url) => {
  if (!url) return [];
  try {
    const u = new URL(url.replace(/\/$/, ''));
    const apex = u.hostname.replace(/^www\./, '');
    return [`${u.protocol}//${apex}`, `${u.protocol}//www.${apex}`];
  } catch {
    return [];
  }
};

const allowedOrigins = process.env.NODE_ENV === 'production'
  ? expandOrigins(process.env.FRONTEND_URL)
  : true;

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins === true) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Database connection test endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    const isConnected = await testConnection();
    if (isConnected) {
      res.json({ 
        success: true, 
        message: 'Database connection successful',
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Database connection failed' 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Database connection error',
      error: error.message 
    });
  }
});

// Example: Get all tables
app.get('/api/tables', async (req, res) => {
  try {
    const result = await query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    res.json({ 
      success: true, 
      tables: result.rows.map(row => row.table_name) 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching tables',
      error: error.message 
    });
  }
});

// API Routes
app.use('/api/inquiries', inquiriesRouter);
app.use('/api/products', productsRouter);

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('📡 Testing database connection...');
  
  // Test connection on startup
  const isConnected = await testConnection();
  
  if (isConnected) {
    // Initialize database schema
    console.log('📊 Initializing database schema...');
    await initDatabase();
  }
});

export default app;
