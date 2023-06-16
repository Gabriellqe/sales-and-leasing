/*
order_id serial PRIMARY KEY,
client_id integer NOT NULL REFERENCES client(client_id),
order_date date NOT NULL default CURRENT_DATE,
order_reservation_date date NOT NULL default CURRENT_DATE + 15,
order_delivery_date date NOT NULL default CURRENT_DATE + 15,
order_payment_type varchar(50) NOT NULL, [Cash, Credit Card, Debit Card, Check, Transfer]   
order_total integer NOT NULL,
order_discount integer NOT NULL default 0,
order_note  varchar(255) NOT NULL,
order_comment varchar(255) NOT NULL,
order_status varchar(255) NOT NULL, [Active, Received, Laundry, Hanging in Store, Paid 50% Paid, Paid 100% Paid]
order_created_at date NOT NULL default CURRENT_DATE,
*/

const orderModel = require("../models/order.model");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("express-async-handler");

const createOrder = asyncHandler(async (req, res, next) => {
  /* 
POST /api/orders
Description: Create a new order in the database.
Access: Seller and Admin
Request body: Order information (e.g., client ID, products, quantity)
Response: Newly created order object or success message
*/
});
const getOrders = asyncHandler(async (req, res, next) => {
  /*
GET /api/orders
Description: Retrieve all orders from the database, optionally filtered by query parameters.
Access: Seller and Admin
Query parameters: 
date: Filter returns by date (e.g., YYYY-MM-DD)
client: Filter returns by client ID
status: Filter returns by status
Response: Array of order objects
*/
});
const getOrderById = asyncHandler(async (req, res, next) => {
  /*
GET /api/orders/:id
Description: Retrieve a single order from the database by ID.
Access: Seller and Admin
Parameters: Order ID
Response: Order object
*/
});
const updateOrder = asyncHandler(async (req, res, next) => {
  /*
PUT /api/orders/:id
Description: Update an order in the database.
Access: Seller and Admin
Parameters: Order ID
Request body: Updated order information
Response: Updated order object or success message
*/
});
const deleteOrder = asyncHandler(async (req, res, next) => {
  /*
PATCH /api/orders/:id/status
Description: Update the status of an order in the database.
Access: Seller and Admin
Parameters: Order ID
Request body: Updated status information
Response: Updated order object or success message
*/
});
const updateStatusOrder = asyncHandler(async (req, res, next) => {
  /*DELETE /api/orders/:id
Description: Delete an order from the database.
Access: Seller and Admin
Parameters: Order ID
Response: Success message
 */
});

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  updateStatusOrder,
};
