const express = require("express");
const { userRouter } = require('./userRoutes');
const { restaurantRouter } = require("./restaurantRoutes");
const { menuitemRouter } = require("./menuitemRoutes");
const { orderRouter } = require("./orderRoutes");
const { cartRouter } = require("./cartRoutes");
const { reviewRouter } = require("./reviewRoutes");

const v1Router = express.Router();

v1Router.use("/user", userRouter)
v1Router.use("/restaurant", restaurantRouter)
v1Router.use|("/menuitem", menuitemRouter)
v1Router.use("/order", orderRouter)
v1Router.use("/cart", cartRouter)
v1Router.use("/review", reviewRouter)


module.exports = { v1Router }
