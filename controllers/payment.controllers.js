/*
payment_id serial PRIMARY KEY,
payment_date date NOT NULL default CURRENT_DATE,
payment_concept varchar(100) NOT NULL, [Supplier Commissions, Salaries,Miscellaneous Expenses, Office, Investment, Dress Maintenance, Operating System, Taxes, Website Development]
payment_detail varchar(100) NOT NULL,
payment_method varchar(100) NOT NULL, [Cash, Credit Card, Debit Card, Check, Transfer]
payment_comment varchar(255) NOT NULL,
payment_total integer NOT NULL,
payment_supplier_id integer NOT NULL REFERENCES supplier(supplier_id),
payment_tax boolean NOT NULL default false,
 */
const paymentModel = require("../models/payment.model");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("express-async-handler");

const createPayment = asyncHandler(async (req, res, next) => {
  /* 
POST /api/payments
Description: Create a new payment in the database.
Access: Admin
Request body: Payment information (e.g., date, concept, method, supplier, tax)
Response: Newly created payment object or success message
*/
});
const getPayments = asyncHandler(async (req, res, next) => {
  /*
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
});
const getPaymentById = asyncHandler(async (req, res, next) => {
  /*
GET /api/payments/:id
Description: Retrieve a single payment from the database by ID.
Access: Admin
Parameters: Payment ID
Response: Payment object
*/
});
const updatePayment = asyncHandler(async (req, res, next) => {
  /*
PUT /api/payments/:id
Description: Update a payment in the database.
Access: Admin
Parameters: Payment ID
Request body: Updated payment information
Response: Updated payment object or success message
*/
});
const deletePayment = asyncHandler(async (req, res, next) => {
  /*
DELETE /api/payments/:id
Description: Delete a payment from the database.
Access: Admin
Parameters: Payment ID
Response: Success message */
});

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
