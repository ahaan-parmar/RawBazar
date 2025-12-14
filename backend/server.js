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

// Middleware
// CORS configuration - allow all origins in development, specific in production
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [
      process.env.FRONTEND_URL,
      process.env.FRONTEND_URL?.replace(/\/$/, ''), // Remove trailing slash
      process.env.FRONTEND_URL?.replace(/\/$/, '') + '/', // Add trailing slash
    ].filter(Boolean)
  : true; // Allow all origins in development

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins === true) {
      return callback(null, true);
    }
    
    // Normalize origin by removing trailing slash for comparison
    const normalizedOrigin = origin.replace(/\/$/, '');
    const normalizedAllowed = Array.isArray(allowedOrigins) 
      ? allowedOrigins.map(url => url?.replace(/\/$/, ''))
      : [];
    
    if (normalizedAllowed.includes(normalizedOrigin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
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
