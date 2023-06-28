const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  /*   if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  //- Duplicate key error
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }

  //- Wrong mongodb ID error
  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  } */

  //- Wrong jwt error
  if (err.name === "JsonWebTokenError") {
    customError.msg = `Your url is invalid please try again letter: ${err.value}`;
    customError.statusCode = 401;
  }
  //- Jwt expired error
  if (err.name === "TokenExpiredError") {
    customError.msg = `Your Url is expired please try again letter!: ${err.value}`;
    customError.statusCode = 401;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;

/* 
Route: Client Routes
When adding a new client:
Missing required fields (e.g., name, email) -> Return 400 Bad Request
Duplicate email address -> Return 409 Conflict
When viewing all clients or a single client:
Database connection error -> Return 500 Internal Server Error
When updating a client:
Client not found -> Return 404 Not Found
When deleting a client:
Client not found -> Return 404 Not Found

Route: Order_Product Routes
When adding a new order_product:
Missing required fields (e.g., order ID, product ID) -> Return 400 Bad Request
When viewing all order_products or a single order_product:
Database connection error -> Return 500 Internal Server Error
When updating an order_product:
Order_Product not found -> Return 404 Not Found
When deleting an order_product:
Order_Product not found -> Return 404 Not Found

Route: Order Routes
When adding a new order:
Missing required fields (e.g., client ID, order date) -> Return 400 Bad Request
When viewing all orders or a single order:
Database connection error -> Return 500 Internal Server Error
When updating an order:
Order not found -> Return 404 Not Found
When deleting an order:
Order not found -> Return 404 Not Found

Route: Payment Routes
When adding a new payment:
Missing required fields (e.g., date, amount) -> Return 400 Bad Request
When viewing all payments or a single payment:
Database connection error -> Return 500 Internal Server Error
When updating a payment:
Payment not found -> Return 404 Not Found
When deleting a payment:
Payment not found -> Return 404 Not Found

Route: Product Routes
When adding a new product:
Missing required fields (e.g., name, price) -> Return 400 Bad Request
When viewing all products or a single product:
Database connection error -> Return 500 Internal Server Error
When updating a product:
Product not found -> Return 404 Not Found
When deleting a product:
Product not found -> Return 404 Not Found

Route: Return Routes
When adding a new return:
Missing required fields (e.g., date, product ID) -> Return 400 Bad Request
When viewing all returns or a single return:
Database connection error -> Return 500 Internal Server Error
When updating a return:
Return not found -> Return 404 Not Found
When deleting a return:
Return not found -> Return 404 Not Found

Route: Supplier Routes
When adding a new supplier:
Missing required fields (e.g., name, contact details) -> Return 400 Bad Request
When viewing all suppliers or a single supplier:
Database connection error -> Return 500 Internal Server Error
When updating a supplier:
Supplier not found -> Return 404 Not Found
When deleting a supplier:
Supplier not found -> Return 404 Not Found

General Error Handling
Invalid JSON in request body -> Return 400 Bad Request
Unauthorized access (e.g., invalid or expired access token) -> Return 401 Unauthorized
Unsupported routes or methods -> Return 404 Not Found
Server-side errors (e.g., unhandled exceptions) -> Return 500 Internal Server Error */
