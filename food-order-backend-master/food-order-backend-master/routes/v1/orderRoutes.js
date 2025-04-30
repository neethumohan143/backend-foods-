const express = require("express");
const router = express.Router();



// 1.Get all orders
router.get('/');

// 2. Get orderById
router.get('/:orderId',);

// 3. Create new order
router.post('/');

// 4. Update order
router.patch('/:orderId');

// 5. Delete order
router.delete('/:orderId');




module.exports = { orderRouter: router }; 