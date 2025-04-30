const express = require("express");
const router = express.Router();



// 1.Get all menuItem
router.get('/');

// 2. Get menuItemById
router.get('/:menuId');

// 3. Create new menuItem
router.post('/');

// 4. Update menuItem
router.patch('/:menuId');

// 5. Delete menuItem
router.delete('/:menuId');




module.exports = { menuItemtRouter: router }; 