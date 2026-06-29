import { query, testConnection } from './db.js';
import { products } from './products-data.js';
import dotenv from 'dotenv';
dotenv.config();

const seed = async () => {
  console.log('Connecting to database...');
  const connected = await testConnection();
  if (!connected) { console.error('Could not connect. Check DATABASE_URL in backend/.env'); process.exit(1); }

  console.log(`Seeding ${products.length} products...`);
  let inserted = 0, skipped = 0;

  for (const p of products) {
    try {
      const res = await query(
        `INSERT INTO products (name, hindi_name, category, grade, image_url, origin, is_active)
         VALUES ($1,$2,$3,$4,$5,$6,true) ON CONFLICT (name) DO NOTHING`,
        [p.name, p.hindi_name || null, p.category, p.grade, p.image_url || null, p.origin]
      );
      if (res.rowCount > 0) { inserted++; console.log(`  + ${p.name}`); }
      else                   { skipped++;  console.log(`  ~ ${p.name} (exists)`); }
    } catch (err) {
      console.error(`  ! ${p.name}: ${err.message}`);
    }
  }

  console.log(`\nDone — ${inserted} inserted, ${skipped} skipped.`);
  process.exit(0);
};

seed();
