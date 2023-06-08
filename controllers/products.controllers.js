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

//As a Admin, I want to be able to add a new product to the database
//As a Admin, I want to be able to view all products in the database
//As a Admin, I want to be able to view a single product in the database
//As a Admin, I want to be able to update a product in the database
//As a Admin, I want to be able to delete a product in the database
/* As a Admin, I want to be able to return product to the supplier 
    (Cambiar el estado del producto a "Devuelto")
    (Agregar un comentario de porque se devuelve el producto)
    (Agregar la fecha de devolucion del producto)
 */
//As a Admin, I want to be able to view all products that have been returned to the supplier
//As a admin i want to be able to view all the products according to their barcode label printing status
//As a admin i want to be able sent to print the qr labels of the products
//As a Admin, I want to be able to upate the quantity of a product in the database
//As a Admin, I want to be able to upate the price of a product in the database and
