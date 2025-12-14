import express from 'express';
import { query } from '../db.js';

const router = express.Router();

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    const { category, is_active = 'true' } = req.query;
    
    let queryText = 'SELECT * FROM products WHERE is_active = $1';
    const params = [is_active === 'true'];
    
    if (category) {
      queryText += ' AND category = $2';
      params.push(category);
    }
    
    queryText += ' ORDER BY name ASC';
    
    const result = await query(queryText, params);
    
    res.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching products',
      error: error.message
    });
  }
});

// GET /api/products/:id - Get a specific product
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await query('SELECT * FROM products WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching product',
      error: error.message
    });
  }
});

// POST /api/products - Create a new product (admin)
router.post('/', async (req, res) => {
  try {
    const {
      name,
      description,
      image_url,
      category,
      price_per_kg,
      min_order_quantity,
      origin,
      grade,
      is_active = true
    } = req.body;
    
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Product name is required'
      });
    }
    
    const result = await query(
      `INSERT INTO products 
       (name, description, image_url, category, price_per_kg, min_order_quantity, origin, grade, is_active)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [name, description || null, image_url || null, category || null, price_per_kg || null, 
       min_order_quantity || null, origin || null, grade || null, is_active]
    );
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating product',
      error: error.message
    });
  }
});

// PATCH /api/products/:id - Update a product (admin)
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;
    
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No fields to update'
      });
    }
    
    const allowedFields = ['name', 'description', 'image_url', 'category', 'price_per_kg', 
                          'min_order_quantity', 'origin', 'grade', 'is_active'];
    const fieldsToUpdate = Object.keys(updateFields).filter(field => allowedFields.includes(field));
    
    if (fieldsToUpdate.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No valid fields to update'
      });
    }
    
    const setClause = fieldsToUpdate.map((field, index) => `${field} = $${index + 1}`).join(', ');
    const values = fieldsToUpdate.map(field => updateFields[field]);
    values.push(id);
    
    const result = await query(
      `UPDATE products SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = $${values.length} RETURNING *`,
      values
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Product updated successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating product',
      error: error.message
    });
  }
});

export default router;
