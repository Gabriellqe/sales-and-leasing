/*
order_product_order_id REFERENCES order(order_id),
order_product_product_id REFERENCES product(product_id), 
order_product_quantity integer NOT NULL default 1,
order_product_commission_payment_status boolean NOT NULL default false,
order_product_packaging boolean NOT NULL default false,
order_product_withdrawn boolean NOT NULL default false,
order_product_created_at date NOT NULL default CURRENT_DATE
*/

// As a Admin, I want to be able to add a new order_product to the database
// As a Admin, I want to be able to view all order_products in the database [by order, by product, by status]
// As a Admin, I want to be able to view a single order_product in the database
// As a Admin, I want to be able to update a order_product in the database
// As a Admin, I want to be able to update a status order_product in the database
// As a Admin, I want to be able to delete a order_product in the database
