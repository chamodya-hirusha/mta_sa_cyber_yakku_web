// login.js
import express from 'express';
import db from '../dbConnect.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
import { handleApiError } from '../lib/utils.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, error: 'Username and password required' });
    }
    
    // Query user by username using mysql2 promise-based API
    const [results] = await db.execute('SELECT * FROM profiles WHERE username = ? LIMIT 1', [username]);
    
    if (results.length === 0) {
      return res.status(401).json({ success: false, error: 'Invalid username or password' });
    }
    
    const user = results[0];
    const storedValue = user.password || '';
    
    // Compare password: support both bcrypt-hashed and legacy plaintext values
    let isValid = false;
    if (storedValue.startsWith('$2')) {
      isValid = await bcrypt.compare(password, storedValue);
    } else {
      isValid = password === storedValue;
    }
    if (!isValid) {
      return res.status(401).json({ success: false, error: 'Invalid username or password' });
    }
    
    // Remove password from response
    const { password: _omit, ...safeUser } = user;
    
    // Create and sign a JWT
    const token = jwt.sign(
      { id: safeUser.id, username: safeUser.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    return res.status(200).json({ 
      success: true, 
      user: safeUser, 
      token,
      message: 'Login successful'
    });
  } catch (err) {
    console.error('Login error:', err);
    const errorResponse = handleApiError(err);
    return res.status(errorResponse.statusCode).json(errorResponse);
  }
});

export default router;
