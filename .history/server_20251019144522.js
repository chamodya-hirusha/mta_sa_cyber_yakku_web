import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';
import dotenv from 'dotenv';
import loginRouter from './api/login.js';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
let PORT = process.env.PORT || 4000;

// Middleware
app.use(helmet());
app.use(cors({ 
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true 
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/login', loginRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'Route not found' 
  });
});

// Error handling middleware (should be last)
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    success: false, 
    error: 'Internal server error' 
  });
});

const server = http.createServer(app);

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is in use, trying another port...`);
    setTimeout(() => {
      server.close();
      PORT++;
      server.listen(PORT);
    }, 100);
  } else {
    console.error('Server error:', e);
    process.exit(1);
  }
});

// Start server
server.listen(PORT, () => {
  // Update PORT to the actual listening port
  PORT = server.address().port;
  console.log(`Server running on port ${PORT}`);
  console.log(` Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});


