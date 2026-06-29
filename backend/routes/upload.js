import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max
  fileFilter: (_, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only images allowed'));
  },
});

// POST /api/upload — proxies image to Supabase Storage, returns public URL
router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file provided' });

  const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    return res.status(500).json({ success: false, message: 'Storage not configured (missing SUPABASE_URL / SUPABASE_SERVICE_KEY)' });
  }

  const ext = req.file.originalname.split('.').pop()?.toLowerCase() ?? 'jpg';
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  try {
    const uploadRes = await fetch(
      `${SUPABASE_URL}/storage/v1/object/product-images/${filename}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          'Content-Type': req.file.mimetype,
        },
        body: req.file.buffer,
      }
    );

    if (!uploadRes.ok) {
      const err = await uploadRes.text();
      return res.status(500).json({ success: false, message: 'Upload failed', error: err });
    }

    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/product-images/${filename}`;
    res.json({ success: true, url: publicUrl });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Upload error', error: error.message });
  }
});

export default router;
