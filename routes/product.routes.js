/* 
POST /api/products
Description: Create a new product in the database.
Access: Admin
Request body: Product information (e.g., name, price, quantity)
Response: Newly created product object or success message

GET /api/products
Description: Retrieve all products from the database.
Access: Admin
Query parameters:
- name: Filter products by name
- price: Filter products by range price
- category: Filter products by category
- supplier: Filter products by supplier
- status: Filter products by returned status 
Response: Array of product objects

GET /api/products/:id
Description: Retrieve a single product from the database by ID.
Access: Admin
Parameters: Product ID
Response: Product object

PUT /api/products/:id
Description: Update a product in the database.
Access: Admin
Parameters: Product ID
Request body: Updated product information
Response: Updated product object or success message

PATCH /api/products/:id/quantity
Description: Update the quantity of a product in the database.
Access: Admin
Parameters: Product ID
Request body: Updated quantity information
Response: Updated product object or success message

PATCH /api/products/:id/price
Description: Update the price of a product in the database.
Access: Admin
Parameters: Product ID
Request body: Updated price information
Response: Updated product object or success message 

DELETE /api/products/:id
Description: Delete a product from the database.
Access: Admin
Parameters: Product ID
Response: Success message

PATCH /api/products/:id/return
As a Admin, I want to be able to return product to the supplier, (Change the status of the product to "Returned"), (Add a record in the return table with a comment and add the return date)
Description: Return a product to the supplier.
Access: Admin
Parameters: Product ID
Request body: Return information (e.g., return comment, return date)
Response: Updated product object or success message

GET /api/products/by_label_status/:status
Description: Retrieve all products according to their barcode label printing status.
Access: Admin
Parameters: Status (e.g., "printed", "not printed")
Response: Array of product objects

POST /api/products/print_labels
Description: Send a request to print the QR labels of the products.
Access: Admin
Response: Success message or information about the print request 
*/
