import express from 'express';
import { query } from '../db.js';

const router = express.Router();

// POST /api/inquiries - Create a new inquiry
router.post('/', async (req, res) => {
  try {
    const {
      company_name,
      contact_person,
      email,
      phone,
      country,
      product_required,
      quantity,
      additional_details
    } = req.body;

    // Validation
    if (!company_name || !contact_person || !email || !phone || !country || !quantity) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: company_name, contact_person, email, phone, country, and quantity are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Insert inquiry
    const result = await query(
      `INSERT INTO inquiries 
       (company_name, contact_person, email, phone, country, product_required, quantity, additional_details)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [company_name, contact_person, email, phone, country, product_required || null, quantity, additional_details || null]
    );

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting inquiry',
      error: error.message
    });
  }
});

// GET /api/inquiries - Get all inquiries (for admin)
router.get('/', async (req, res) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query;
    
    let queryText = 'SELECT * FROM inquiries';
    const params = [];
    
    if (status) {
      queryText += ' WHERE status = $1';
      params.push(status);
    }
    
    queryText += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
    params.push(parseInt(limit), parseInt(offset));
    
    const result = await query(queryText, params);
    
    // Get total count
    const countResult = await query(
      status ? 'SELECT COUNT(*) FROM inquiries WHERE status = $1' : 'SELECT COUNT(*) FROM inquiries',
      status ? [status] : []
    );
    
    res.json({
      success: true,
      data: result.rows,
      total: parseInt(countResult.rows[0].count),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiries',
      error: error.message
    });
  }
});

// GET /api/inquiries/:id - Get a specific inquiry
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await query('SELECT * FROM inquiries WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiry',
      error: error.message
    });
  }
});

// PATCH /api/inquiries/:id/status - Update inquiry status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status is required'
      });
    }
    
    const validStatuses = ['new', 'contacted', 'quoted', 'closed', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`
      });
    }
    
    const result = await query(
      'UPDATE inquiries SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Inquiry status updated',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating inquiry status',
      error: error.message
    });
  }
});

export default router;
