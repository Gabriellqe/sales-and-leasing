const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  updateStatusOrder,
} = require("../controllers/order.controller");

router.route("/").post(createOrder).get(getOrders);
/* 
POST /api/orders
Description: Create a new order in the database.
Access: Seller and Admin
Request body: Order information (e.g., client ID, products, quantity)
Response: Newly created order object or success message

GET /api/orders
Description: Retrieve all orders from the database, optionally filtered by query parameters.
Access: Seller and Admin
Query parameters: 
date: Filter returns by date (e.g., YYYY-MM-DD)
client: Filter returns by client ID
status: Filter returns by status
Response: Array of order objects
*/

router.route("/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);
/*
GET /api/orders/:id
Description: Retrieve a single order from the database by ID.
Access: Seller and Admin
Parameters: Order ID
Response: Order object

PUT /api/orders/:id
Description: Update an order in the database.
Access: Seller and Admin
Parameters: Order ID
Request body: Updated order information
Response: Updated order object or success message

DELETE /api/orders/:id
Description: Delete an order from the database.
Access: Seller and Admin
Parameters: Order ID
Response: Success message
*/

router.route("/:id/status").patch(updateStatusOrder);
/*
PATCH /api/orders/:id/status
Description: Update the status of an order in the database.
Access: Seller and Admin
Parameters: Order ID
Request body: Updated status information
Response: Updated order object or success message
*/

module.exports = router;
