import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

const getCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/',
});

// Verify session from cookie
router.get('/', (req, res) => {
  try {
    const token = req.cookies?.session;
    if (!token) {
      return res.status(401).json({ authenticated: false });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-key');
    return res.status(200).json({ authenticated: true, user: { id: decoded.id, username: decoded.username } });
  } catch (e) {
    return res.status(401).json({ authenticated: false });
  }
});

// Logout: clear cookie
router.post('/logout', (req, res) => {
  res.clearCookie('session', getCookieOptions());
  return res.status(200).json({ success: true });
});

export default router;


