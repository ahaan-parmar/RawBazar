import express from 'express';
import { query } from '../db.js';

const router = express.Router();

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const { category, is_active } = req.query;

    let queryText = 'SELECT * FROM products';
    const params = [];
    const conditions = [];

    // is_active=all → no filter; default → active only
    if (is_active !== 'all') {
      conditions.push(`is_active = $${params.length + 1}`);
      params.push(is_active === 'false' ? false : true);
    }

    if (category) {
      conditions.push(`category = $${params.length + 1}`);
      params.push(category);
    }

    if (conditions.length) queryText += ' WHERE ' + conditions.join(' AND ');
    queryText += ' ORDER BY category ASC, name ASC';

    const result = await query(queryText, params);
    res.json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching products', error: error.message });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const result = await query('SELECT * FROM products WHERE id = $1', [req.params.id]);
    if (!result.rows.length) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching product', error: error.message });
  }
});

// POST /api/products
router.post('/', async (req, res) => {
  try {
    const { name, hindi_name, description, image_url, category, origin, grade, is_active = true } = req.body;
    if (!name) return res.status(400).json({ success: false, message: 'Product name is required' });

    const result = await query(
      `INSERT INTO products (name, hindi_name, description, image_url, category, origin, grade, is_active)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [name, hindi_name || null, description || null, image_url || null,
       category || null, origin || null, grade || null, is_active]
    );
    res.status(201).json({ success: true, message: 'Product created', data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating product', error: error.message });
  }
});

// PATCH /api/products/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const allowed = ['name', 'hindi_name', 'description', 'image_url', 'category', 'origin', 'grade', 'is_active'];
    const fields = Object.keys(req.body).filter(k => allowed.includes(k));
    if (!fields.length) return res.status(400).json({ success: false, message: 'No valid fields to update' });

    const set = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
    const values = [...fields.map(f => req.body[f]), id];

    const result = await query(
      `UPDATE products SET ${set}, updated_at = CURRENT_TIMESTAMP WHERE id = $${values.length} RETURNING *`,
      values
    );
    if (!result.rows.length) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, message: 'Product updated', data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating product', error: error.message });
  }
});

// DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await query('DELETE FROM products WHERE id = $1 RETURNING id', [req.params.id]);
    if (!result.rows.length) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting product', error: error.message });
  }
});

export default router;
