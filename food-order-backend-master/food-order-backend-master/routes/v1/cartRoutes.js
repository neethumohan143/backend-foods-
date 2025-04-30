const express = require("express");
const router = express.Router();



// 1.Get all restaurants
router.get('/');

// 2. Get restaurantById
router.get('/:restId');

// 3. Create new restaurant
router.post('/');

// 4. Update restaurant
router.patch('/:restId');

// 5. Delete restaurant
router.delete('/:restId');




module.exports = { cartRouter: router }; 