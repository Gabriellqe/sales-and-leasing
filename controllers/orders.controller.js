/*
order_id serial PRIMARY KEY,
client_id integer NOT NULL REFERENCES client(client_id),
order_date date NOT NULL default CURRENT_DATE,
order_reservation_date date NOT NULL default CURRENT_DATE + 15,
order_delivery_date date NOT NULL default CURRENT_DATE + 15,
order_payment_type varchar(50) NOT NULL, [Cash, Credit Card, Debit Card, Check, Transfer]   
order_total integer NOT NULL,
order_discount integer NOT NULL default 0,
order_note  varchar(255) NOT NULL,
order_comment varchar(255) NOT NULL,
order_status varchar(255) NOT NULL, [Active, Received, Laundry, Hanging in Store, Paid 50% Paid, Paid 100% Paid]
order_created_at date NOT NULL default CURRENT_DATE,
*/

// As a Admin, I want to be able to add a new order to the database
// As a Admin, I want to be able to view all orders in the database [by date, by client, by status]
// As a Admin, I want to be able to view a single order in the database
// As a Admin, I want to be able to update a order in the database
// As a Admin, I want to be able to update a status order in the database
// As a Admin, I want to be able to delete a order in the database
