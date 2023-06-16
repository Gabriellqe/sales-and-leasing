/* 
POST /api/clients
Description: Create a new client in the database.
Access: Seller and Admin
Request body: Client information (e.g., name, contact details)
Response: Newly created client object or success message

GET /api/clients
Description: Retrieve all clients from the database.
Access: Seller and Admin
Response: Array of client objects

GET /api/clients/:id
Description: Retrieve a single client from the database by ID.
Access: Seller and Admin
Parameters: client ID
Response: Client object

PUT /api/clients/:id
Description: Update a client in the database.
Access: Seller and Admin
Parameters: client ID
Request body: Updated client information
Response: Updated client object or success message

DELETE /api/clients/:id
Description: Delete a client from the database.
Access: Seller and Admin
Parameters: client ID
Response: Success message

PATCH /api/clients/:id/status
Description: Update the status of a client in the database.
Access: Seller and Admin
Parameters: client ID
Request body: Updated status information
Response: Updated client object or success message */
