/*
supplier_id serial PRIMARY KEY 
supplier_ci integer NOT NULL
supplier_name varchar(50) NOT NULL
supplier_rut varchar(50) NOT NULL
supplier_phone varchar(50) NOT NULL
supplier_address varchar(50) NOT NULL
supplier_email varchar(50) NOT NULL
supplier_active_status boolean NOT NULL default true 
supplier_bank_name varchar(50) NOT NULL
supplier_account_bank_type varchar(50) NOT NULL
supplier_account_bank_name varchar(50) NOT NULL
supplier_account_instagram  varchar(50) NOT NULL
*/

const supplierModel = require("../models/supplier.model");
const { validationResult } = require("express-validator");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("express-async-handler");

const createSupplier = asyncHandler(async (req, res, next) => {
  /* 
POST /api/suppliers
Description: Create a new supplier in the database.
Access: Admin
Request body: Supplier information (e.g., name, contact details)
Response: Newly created supplier object or success message
*/
});
const getSuppliers = asyncHandler(async (req, res, next) => {
  /*
GET /api/suppliers
Description: Retrieve all suppliers from the database.
Access: Admin
Response: Array of supplier objects
*/
});
const getSupplierById = asyncHandler(async (req, res, next) => {
  /*
GET /api/suppliers/:id
Description: Retrieve a single supplier from the database by ID.
Access: Admin
Parameters: Supplier ID
Response: Supplier object
*/
});
const updateSupplier = asyncHandler(async (req, res, next) => {
  /*
PUT /api/suppliers/:id
Description: Update a supplier in the database.
Access: Admin
Parameters: Supplier ID
Request body: Updated supplier information
Response: Updated supplier object or success message
*/
});
const updateSupplierStatus = asyncHandler(async (req, res, next) => {
  /*
PATCH /api/suppliers/:id/status
Description: Update the status of a supplier in the database.
Access: Admin
Parameters: Supplier ID
Request body: Updated status information
Response: Updated supplier object or success message
*/
});
const deleteSupplier = asyncHandler(async (req, res, next) => {
  /*
DELETE /api/suppliers/:id
Description: Delete a supplier from the database.
Access: Admin
Parameters: Supplier ID
Response: Success message */
});

module.exports = {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  updateSupplierStatus,
  deleteSupplier,
};
