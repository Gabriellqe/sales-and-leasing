/* 
POST /api/order_products
Description: Create a new order_product in the database.
Access: Seller and Admin
Request body: order_product information (e.g., order ID, product ID, quantity)
Response: Newly created order_product object or success message

GET /api/order_products
Description: Retrieve all order_products from the database, optionally filtered by query parameters.
Access: Seller and Admin
Query parameters:
order: Filter returns by order ID
product: Filter returns by product ID
packaging status: Filter returns by packaging status
Response: Array of order_product objects

GET /api/order_products/:id
Description: Retrieve a single order_product from the database by ID.
Access: Seller and Admin
Parameters: order_product ID
Response: order_product object

PUT /api/order_products/:id
Description: Update an order_product in the database.
Access: Seller and Admin
Parameters: order_product ID
Request body: Updated order_product information
Response: Updated order_product object or success message

PATCH /api/order_products/:id/status
Description: Update the status of an order_product in the database.
Access: Seller and Admin
Parameters: order_product ID
Request body: Updated status information
Response: Updated order_product object or success message

DELETE /api/order_products/:id
Description: Delete an order_product from the database.
Access: Seller and Admin
Parameters: order_product ID
Response: Success message
*/
