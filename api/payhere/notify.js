// PayHere Payment Notification Handler
import express from 'express';
import crypto from 'crypto';
import db from '../../dbConnect.js';

const router = express.Router();

// PayHere Merchant Secret
const MERCHANT_SECRET = 'MTYxMzAwODk1MTI3Njg1MzkzMTE4MzA0NTM3NjIxNDkyMzE3OTMx';

// Verify PayHere hash
const verifyHash = (params) => {
  const { merchant_id, order_id, payhere_amount, payhere_currency, status_code, md5sig } = params;

  // Create the hash string
  const hashString = merchant_id + order_id + payhere_amount + payhere_currency + 
                     status_code + crypto.createHash('md5').update(MERCHANT_SECRET).digest('hex').toUpperCase();
  
  // Create MD5 hash
  const calculatedHash = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

  return calculatedHash === md5sig;
};

// Handle PayHere IPN (Instant Payment Notification)
router.post('/notify', async (req, res) => {
  let connection;
  try {
    const params = req.body;

    // Verify the hash
    if (!verifyHash(params)) {
      console.error('Invalid hash signature');
      return res.status(400).send('Invalid hash');
    }

    const {
      merchant_id,
      order_id,
      payhere_amount,
      payhere_currency,
      status_code,
      md5sig,
      custom_1,
      custom_2
    } = params;

    // Status codes:
    // 2 = Success
    // 0 = Pending
    // -1 = Failed
    // -2 = Cancelled

    console.log('PayHere Notification:', {
      order_id,
      status_code,
      amount: payhere_amount,
      currency: payhere_currency
    });

    // Get database connection
    connection = await db.getConnection();

    // Check if order exists
    const [existingOrders] = await connection.execute(
      'SELECT * FROM orders WHERE order_id = ?',
      [order_id]
    );

    let orderRecord;
    if (existingOrders.length === 0) {
      // Get user_id from custom_1 if available
      let userId = null;
      if (custom_1) {
        try {
          const customData = JSON.parse(custom_1);
          userId = customData.userId || null;
        } catch (e) {
          userId = custom_1; // If not JSON, use as user_id directly
        }
      }

      // Create new order record
      const [insertResult] = await connection.execute(
        `INSERT INTO orders (order_id, merchant_id, amount, currency, status_code, payment_status, customer_email, user_id, created_at) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
        [
          order_id,
          merchant_id,
          payhere_amount,
          payhere_currency,
          status_code,
          status_code === '2' ? 'completed' : status_code === '0' ? 'pending' : 'failed',
          params.payhere_email || null,
          userId
        ]
      );
      orderRecord = { order_id, user_id: userId, products: [] };
    } else {
      // Update existing order
      await connection.execute(
        `UPDATE orders 
         SET status_code = ?, 
             payment_status = ?,
             amount = ?,
             updated_at = NOW()
         WHERE order_id = ?`,
        [
          status_code,
          status_code === '2' ? 'completed' : status_code === '0' ? 'pending' : 'failed',
          payhere_amount,
          order_id
        ]
      );
      orderRecord = existingOrders[0];
    }

    // If payment is successful (status_code = '2'), assign products to user
    if (status_code === '2') {
      // Get user_id and productIds from custom_1 or from orderRecord
      let userId = orderRecord.user_id || null;
      let productIds = [];

      // Try to get productIds from custom fields
      if (custom_1) {
        try {
          const customData = JSON.parse(custom_1);
          userId = userId || customData.userId || null;
          productIds = customData.productIds || [];
        } catch (e) {
          // If custom_1 is not JSON, use as user_id if not already set
          userId = userId || custom_1;
        }
      }

      // If we have userId and productIds, assign products to user
      if (userId && productIds.length > 0) {
        for (const productId of productIds) {
          try {
            // Insert user-product relationship (ignore if duplicate)
            await connection.execute(
              `INSERT IGNORE INTO user_products (user_id, product_id, order_id) 
               VALUES (?, ?, ?)`,
              [userId, productId, order_id]
            );
          } catch (err) {
            console.error(`Error assigning product ${productId} to user ${userId}:`, err);
          }
        }
        console.log(`Assigned ${productIds.length} products to user ${userId}`);
      } else {
        // Try to get order data from database order metadata if stored
        // This is a fallback - ideally we should pass user_id and product_ids in custom fields
        console.log('User ID or product IDs not found in payment notification');
      }
    }

    connection.release();

    // Return success to PayHere
    res.status(200).send('OK');
  } catch (error) {
    console.error('PayHere notification error:', error);
    if (connection) {
      connection.release();
    }
    res.status(500).send('Error processing notification');
  }
});

// Get order status
router.get('/status/:orderId', async (req, res) => {
  let connection;
  try {
    const { orderId } = req.params;
    connection = await db.getConnection();

    const [orders] = await connection.execute(
      'SELECT * FROM orders WHERE order_id = ?',
      [orderId]
    );

    connection.release();

    if (orders.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(orders[0]);
  } catch (error) {
    console.error('Get order status error:', error);
    if (connection) {
      connection.release();
    }
    res.status(500).json({ error: 'Error fetching order status' });
  }
});

export default router;

