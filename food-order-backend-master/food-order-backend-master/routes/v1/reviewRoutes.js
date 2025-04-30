const express = require("express");
const router = express.Router();



// 1.Get all review
router.get('/');

// 2. Create new restaurant
router.post('/');

// 3. Delete restaurant
router.delete('/:restId');



module.exports = { reviewRouter: router }; 