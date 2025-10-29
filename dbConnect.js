import mysql from 'mysql2/promise';

// Use a pool to avoid single-connection fatal errors and auto-manage reconnects
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '142.91.102.23',
  port: 3306,
  user: 'imesh',
  password: 'Imesh2001@',
  database: 'mta_db',
  waitForConnections: true,
  queueLimit: 0,
  multipleStatements: false,
  acquireTimeout: 60000,
  timeout: 60000,
  // Add connection retry and keep-alive settings
  reconnect: true,
  keepAliveInitialDelay: 0,
  enableKeepAlive: true,
  // Add connection validation
  validateConnection: true,
  // Add retry settings
  retryDelay: 2000,
  maxReconnects: 3,
  // Add connection timeout settings
  connectTimeout: 60000,
  acquireTimeout: 60000,
  timeout: 60000,
  // Add SSL settings if needed
  ssl: false,
});

// Enhanced connection testing with retry logic
const testConnection = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const conn = await pool.getConnection();
      console.log('MySQL pool established. Connection id ' + conn.threadId);
      conn.release();
      return true;
    } catch (err) {
      console.error(`MySQL connection attempt ${i + 1} failed:`, err.message);
      if (i === retries - 1) {
        console.error('All MySQL connection attempts failed');
        return false;
      }
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  return false;
};

// Test the connection
testConnection();

// Handle pool errors
pool.on('connection', (connection) => {
  console.log('New MySQL connection established as id ' + connection.threadId);
});

pool.on('error', (err) => {
  console.error('MySQL pool error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('MySQL connection lost, pool will handle reconnection');
  }
});

export default pool;
