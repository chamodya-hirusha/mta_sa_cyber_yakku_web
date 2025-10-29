// login.js
import express from 'express';
import db from '../dbConnect.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { handleApiError } from '../lib/utils.js';

const router = express.Router();

router.post('/', async (req, res) => {
  let connection;
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, error: 'Username and password required' });
    }

    // Get a connection from the pool
    connection = await db.getConnection();
    
    const [results] = await connection.execute('SELECT * FROM profiles WHERE username = ? LIMIT 1', [username]);
    if (results.length === 0) {
      return res.status(401).json({ success: false, error: 'Invalid username or password' });
    }

    const user = results[0];
    const storedValue = user.password || '';

    // 👇 NEW: check if password is "unknown"
    if (storedValue === 'unknown') {
      return res.status(200).json({
        success: true,
        user: { id: user.id, username: user.username },
        requiresPasswordSetup: true,
        message: 'You need to set your password before logging in.',
      });
    }

    // Password comparison
    let isValid = false;
    if (storedValue.startsWith('$2')) {
      isValid = await bcrypt.compare(password, storedValue);
    } else {
      isValid = password === storedValue;
    }

    if (!isValid) {
      return res.status(401).json({ success: false, error: 'Invalid username or password' });
    }

    const { password: _omit, ...safeUser } = user;
    const token = jwt.sign(
      { id: safeUser.id, username: safeUser.username },
      process.env.JWT_SECRET || 'fallback-secret-key',
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      success: true,
      user: safeUser,
      token,
      message: 'Login successful',
    });
  } catch (err) {
    console.error('Login error:', err);
    
    // Handle specific database connection errors
    if (err.code === 'ECONNRESET' || err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('Database connection lost, attempting to reconnect...');
      return res.status(503).json({ 
        success: false, 
        error: 'Database connection lost. Please try again.' 
      });
    }
    
    const errorResponse = handleApiError(err);
    return res.status(errorResponse.statusCode).json(errorResponse);
  } finally {
    // Always release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
});

export default router;
