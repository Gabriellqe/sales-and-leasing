/*
product_id serial PRIMARY KEY,
product_ci integer NOT NULL,
product_name varchar(100) NOT NULL,
product_category varchar(50) NOT NULL,
product_supplier_id integer NOT NULL REFERENCES supplier(supplier_id),
product_price integer NOT NULL,
product_warranty integer NOT NULL,
product_status varchar(50) NOT NULL,
product_label_barcode boolean NOT NULL default false,
product_printed_label boolean NOT NULL default false,
product_qty integer NOT NULL default 1,, 
product_image varchar(50) NOT NULL,
 */

const productModel = require("../models/product.model");
const supplierModel = require("../models/supplier.model");
const returnModel = require("../models/return.model");
const { validationResult } = require("express-validator");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req, res, next) => {
  /* 
POST /api/products
Description: Create a new product in the database.
Access: Admin
Request body: Product information (e.g., name, price, quantity)
Response: Newly created product object or success message
*/
});
const getProducts = asyncHandler(async (req, res, next) => {
  /* 
GET /api/products
Description: Retrieve all products from the database.
Access: Admin
Query parameters:
- name: Filter products by name
- price: Filter products by range price
- category: Filter products by category
- supplier: Filter products by supplier
- status: Filter products by returned status 
Response: Array of product objects */
});
const getProductById = asyncHandler(async (req, res, next) => {
  /*
GET /api/products/:id
Description: Retrieve a single product from the database by ID.
Access: Admin
Parameters: Product ID
Response: Product object
*/
});
const updateProduct = asyncHandler(async (req, res, next) => {
  /*
PUT /api/products/:id
Description: Update a product in the database.
Access: Admin
Parameters: Product ID
Request body: Updated product information
Response: Updated product object or success message
*/
});
const updateProductQuantity = asyncHandler(async (req, res, next) => {
  /* 
PATCH /api/products/:id/quantity
Description: Update the quantity of a product in the database.
Access: Admin
Parameters: Product ID
Request body: Updated quantity information
Response: Updated product object or success message
*/
});
const updateProductPrice = asyncHandler(async (req, res, next) => {
  /*
PATCH /api/products/:id/price
Description: Update the price of a product in the database.
Access: Admin
Parameters: Product ID
Request body: Updated price information
Response: Updated product object or success message */
});
const deleteProduct = asyncHandler(async (req, res, next) => {
  /*
DELETE /api/products/:id
Description: Delete a product from the database.
Access: Admin
Parameters: Product ID
Response: Success message
*/
});
const returnProduct = asyncHandler(async (req, res, next) => {
  /* As a Admin, I want to be able to return product to the supplier, 
    (Change the status of the product to "Returned"), 
    (Add a record in the return table with a comment and add the return date)

PATCH /api/products/:id/return
Description: Return a product to the supplier.
Access: Admin
Parameters: Product ID
Request body: Return information (e.g., return comment, return date)
Response: Updated product object or success message
*/
});
const getProductsByLabelStatus = asyncHandler(async (req, res, next) => {
  /*
GET /api/products/by_label_status/:status
Description: Retrieve all products according to their barcode label printing status.
Access: Admin
Parameters: Status (e.g., "printed", "not printed")
Response: Array of product objects
*/
});
const printLabels = asyncHandler(async (req, res, next) => {
  /*
POST /api/products/print_labels
Description: Send a request to print the QR labels of the products.
Access: Admin
Response: Success message or information about the print request */
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateProductQuantity,
  updateProductPrice,
  deleteProduct,
  returnProduct,
  getProductsByLabelStatus,
  printLabels,
};
