const express = require("express");
const router = express.Router();
const {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  updateSupplierStatus,
  deleteSupplier,
} = require("../controllers/supplier.controllers");

router.route("/").post(createSupplier).get(getSuppliers);
/* 
POST /api/suppliers
Description: Create a new supplier in the database.
Access: Admin
Request body: Supplier information (e.g., name, contact details)
Response: Newly created supplier object or success message

GET /api/suppliers
Description: Retrieve all suppliers from the database.
Access: Admin
Response: Array of supplier objects
*/

router
  .route("/:id")
  .get(getSupplierById)
  .put(updateSupplier)
  .delete(deleteSupplier);
/*
GET /api/suppliers/:id
Description: Retrieve a single supplier from the database by ID.
Access: Admin
Parameters: Supplier ID
Response: Supplier object

PUT /api/suppliers/:id
Description: Update a supplier in the database.
Access: Admin
Parameters: Supplier ID
Request body: Updated supplier information
Response: Updated supplier object or success message

DELETE /api/suppliers/:id
Description: Delete a supplier from the database.
Access: Admin
Parameters: Supplier ID
Response: Success message 
*/

router.route("/:id/status").patch(updateSupplierStatus);
/*
PATCH /api/suppliers/:id/status
Description: Update the status of a supplier in the database.
Access: Admin
Parameters: Supplier ID
Request body: Updated status information
Response: Updated supplier object or success message
*/

module.exports = router;
