/*
payment_id serial PRIMARY KEY,
payment_date date NOT NULL default CURRENT_DATE,
payment_concept varchar(100) NOT NULL, [Supplier Commissions, Salaries,Miscellaneous Expenses, Office, Investment, Dress Maintenance, Operating System, Taxes, Website Development]
payment_detail varchar(100) NOT NULL,
payment_method varchar(100) NOT NULL, [Cash, Credit Card, Debit Card, Check, Transfer]
payment_comment varchar(255) NOT NULL,
payment_total integer NOT NULL,
payment_supplier_id integer NOT NULL REFERENCES supplier(supplier_id),
payment_tax boolean NOT NULL default false,
 */

//As a Admin, I want to be able to add a new payment to the database
//As a Admin, I want to be able to view all payments in the database [by date, by concept, by method, by supplier, by tax]
//As a Admin, I want to be able to view a single payment in the database
//As a Admin, I want to be able to update a payment in the database
//As a Admin, I want to be able to delete a payment in the database
