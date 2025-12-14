import { query } from './db.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and execute schema.sql
const initDatabase = async () => {
  try {
    console.log('📊 Initializing database schema...');
    
    const schemaPath = path.join(__dirname, 'schema.sql');
    let schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Remove comments
    schema = schema.replace(/--.*$/gm, '');
    
    // Split by semicolons and execute each statement
    const statements = schema
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0);
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      try {
        const result = await query(statement);
        const preview = statement.replace(/\s+/g, ' ').substring(0, 60);
        console.log(`✅ [${i + 1}/${statements.length}] Executed:`, preview + '...');
      } catch (error) {
        // Ignore "already exists" errors
        if (error.message.includes('already exists') || error.message.includes('duplicate')) {
          const preview = statement.replace(/\s+/g, ' ').substring(0, 60);
          console.log(`ℹ️  [${i + 1}/${statements.length}] Already exists:`, preview + '...');
        } else {
          const preview = statement.replace(/\s+/g, ' ').substring(0, 100);
          console.error(`❌ [${i + 1}/${statements.length}] Error:`, preview);
          console.error('   Message:', error.message);
          // Don't throw, continue with other statements
        }
      }
    }
    
    console.log('✅ Database schema initialization completed!');
    return true;
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
    return false;
  }
};

// Run if called directly
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/'))) {
  initDatabase().then(() => {
    process.exit(0);
  }).catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
}

export default initDatabase;
