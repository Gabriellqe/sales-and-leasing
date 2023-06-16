const express = require("express");
const router = express.Router();
const {
  createReturn,
  getReturns,
  getReturnById,
  updateReturn,
  deleteReturn,
  getReturnByStatus,
} = require("../controllers/return.controllers");

router.route("/").post(createReturn).get(getReturns);
/* 
POST /api/returns
Description: Create a new return in the database.
Access: Admin
Request body: Return information (e.g., date, product ID, status)
Response: Newly created return object or success message

GET /api/returns
Description: Retrieve all returns from the database, optionally filtered by query parameters.
Access: Admin
Query parameters:
date: Filter returns by date (e.g., YYYY-MM-DD)
product: Filter returns by product ID
status: Filter returns by status
Response: Array of return objects
*/

router.route("/:id").get(getReturnById).put(updateReturn).delete(deleteReturn);
/*
GET /api/returns/:id
Description: Retrieve a single return from the database by ID.
Access: Admin
Parameters: Return ID
Response: Return object

PUT /api/returns/:id
Description: Update a return in the database.
Access: Admin
Parameters: Return ID
Request body: Updated return information
Response: Updated return object or success message

DELETE /api/returns/:id
Description: Delete a return from the database.
Access: Admin
Parameters: Return ID
Response: Success message */

router.route("/:id/status").get(getReturnByStatus);
/* PATCH /api/returns/:id/status
Description: Update the status of a return in the database.
Access: Admin
Parameters: Return ID
Request body: Updated status information
Response: Updated return object or success message
 */

module.exports = router;
