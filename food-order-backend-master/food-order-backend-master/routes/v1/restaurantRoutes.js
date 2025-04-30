const express = require("express");
const { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require("../../controllers/restaurantControllers");
const router = express.Router();



// 1.Get all restaurants
router.get('/', getAllRestaurants);

// 2. Get restaurantById
router.get('/:restId', getRestaurantById);

// 3. Create new restaurant
router.post('/', createRestaurant);

// 4. Update restaurant
router.patch('/:restId', updateRestaurant);

// 5. Delete restaurant
router.delete('/:restId', deleteRestaurant);




module.exports = { restaurantRouter: router }; 