import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Parse connection string and modify if needed
let connectionString = process.env.DATABASE_URL || '';

// If using direct Supabase connection, try to convert to pooler format
// Supabase pooler uses port 6543 and pooler.supabase.com
if (connectionString.includes('db.') && connectionString.includes('.supabase.co:5432')) {
  console.log('⚠️  Using direct connection. Consider using connection pooler for better reliability.');
  console.log('💡 Pooler format: postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true');
}

// Create connection pool
const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false // Required for Supabase
  },
  // Force IPv4 if IPv6 is causing issues
  ...(process.env.FORCE_IPV4 === 'true' && {
    // This will be handled by the connection string format
  })
});

// Test connection
export const testConnection = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    console.log('✅ Database connected successfully!');
    console.log('Current time:', result.rows[0].now);
    client.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    return false;
  }
};

// Get database pool
export const getPool = () => pool;

// Execute query helper
export const query = async (text, params) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Query error:', error.message);
    throw error;
  }
};

export default pool;
