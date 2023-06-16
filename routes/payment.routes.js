const express = require("express");
const router = express.Router();
const {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require("../controllers/payment.controllers");

router.route("/").post(createPayment).get(getPayments);
/* 
POST /api/payments
Description: Create a new payment in the database.
Access: Admin
Request body: Payment information (e.g., date, concept, method, supplier, tax)
Response: Newly created payment object or success message

GET /api/payments
Description: Retrieve all payments from the database, optionally filtered by query parameters.
Access: Admin
Query parameters:
date: Filter payments by date (e.g., YYYY-MM-DD)
concept: Filter payments by concept
method: Filter payments by payment method
supplier: Filter payments by supplier
tax: Filter payments by tax amount
Response: Array of payment objects
*/

router
  .route("/:id")
  .get(getPaymentById)
  .put(updatePayment)
  .delete(deletePayment);
/*
GET /api/payments/:id
Description: Retrieve a single payment from the database by ID.
Access: Admin
Parameters: Payment ID
Response: Payment object

PUT /api/payments/:id
Description: Update a payment in the database.
Access: Admin
Parameters: Payment ID
Request body: Updated payment information
Response: Updated payment object or success message

DELETE /api/payments/:id
Description: Delete a payment from the database.
Access: Admin
Parameters: Payment ID
Response: Success message */

module.exports = router;
