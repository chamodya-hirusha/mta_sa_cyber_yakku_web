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
});

// Test the connection
pool.getConnection()
  .then(conn => {
    console.log('MySQL pool established. Connection id ' + conn.threadId);
    conn.release();
  })
  .catch(err => {
    console.error('MySQL pool connection error:', err);
  });

export default pool;
