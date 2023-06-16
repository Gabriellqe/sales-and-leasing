/* 
return_id serial PRIMARY KEY
return_date date NOT NULL default CURRENT_DATE
return_product_id integer NOT NULL
return_comment varchar(50) NOT NULL
return_status varchar(50) NOT NULL
foreign key (return_product_id) references product(product_id)
 */

const returnModel = require("../models/return.model");
const productModel = require("../models/product.model");
const { validationResult } = require("express-validator");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("express-async-handler");

const createReturn = asyncHandler(async (req, res, next) => {
  /* 
POST /api/returns
Description: Create a new return in the database.
Access: Admin
Request body: Return information (e.g., date, product ID, status)
Response: Newly created return object or success message
*/
});
const getReturns = asyncHandler(async (req, res, next) => {
  /*
GET /api/returns
Description: Retrieve all returns from the database, optionally filtered by query parameters.
Access: Admin
Query parameters:
date: Filter returns by date (e.g., YYYY-MM-DD)
product: Filter returns by product ID
status: Filter returns by status
Response: Array of return objects
*/
});
const getReturnById = asyncHandler(async (req, res, next) => {
  /*
GET /api/returns/:id
Description: Retrieve a single return from the database by ID.
Access: Admin
Parameters: Return ID
Response: Return object
*/
});
const updateReturn = asyncHandler(async (req, res, next) => {
  /*
PUT /api/returns/:id
Description: Update a return in the database.
Access: Admin
Parameters: Return ID
Request body: Updated return information
Response: Updated return object or success message
*/
});
const updateReturnStatus = asyncHandler(async (req, res, next) => {
  /*
PATCH /api/returns/:id/status
Description: Update the status of a return in the database.
Access: Admin
Parameters: Return ID
Request body: Updated status information
Response: Updated return object or success message
*/
});
const deleteReturn = asyncHandler(async (req, res, next) => {
  /*
DELETE /api/returns/:id
Description: Delete a return from the database.
Access: Admin
Parameters: Return ID
Response: Success message */
});

module.exports = {
  createReturn,
  getReturns,
  getReturnById,
  updateReturn,
  deleteReturn,
  getReturnByStatus,
};
