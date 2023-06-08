CREATE TABLE client (
    client_id serial PRIMARY KEY,
    client_ci integer NOT NULL,
    client_name varchar(50) NOT NULL,
    client_phone varchar(50) NOT NULL,
    client_address varchar(50) NOT NULL,
    client_email varchar(50) NOT NULL,
    client_active_status boolean NOT NULL default true,
    client_instagram varchar(50) NOT NULL
);
CREATE TABLE supplier (
    supplier_id serial PRIMARY KEY,
    supplier_ci integer NOT NULL,
    supplier_name varchar(50) NOT NULL,
    supplier_rut varchar(50) NOT NULL,
    supplier_phone varchar(50) NOT NULL,
    supplier_address varchar(50) NOT NULL,
    supplier_email varchar(50) NOT NULL,
    supplier_active_status boolean NOT NULL default true,
    supplier_bank_name varchar(50) NOT NULL,
    supplier_account_bank_type varchar(50) NOT NULL,
    supplier_account_bank_name varchar(50) NOT NULL,
    supplier_account_instagram varchar(50) NOT NULL
);
CREATE TABLE product (
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
    product_qty integer NOT NULL default 1,
    product_image varchar(50) NOT NULL
);
CREATE TABLE payment (
    payment_id serial PRIMARY KEY,
    payment_date date NOT NULL default CURRENT_DATE,
    payment_concept varchar(100) NOT NULL,
    payment_detail varchar(100) NOT NULL,
    payment_method varchar(100) NOT NULL,
    payment_comment varchar(255) NOT NULL,
    payment_total integer NOT NULL,
    payment_supplier_id integer NOT NULL REFERENCES supplier(supplier_id),
    payment_tax boolean NOT NULL default false
);
CREATE TABLE order(
    order_id serial PRIMARY KEY,
    client_id integer NOT NULL REFERENCES client(client_id),
    order_date date NOT NULL default CURRENT_DATE,
    order_reservation_date date NOT NULL default CURRENT_DATE + 15,
    order_delivery_date date NOT NULL default CURRENT_DATE + 15,
    order_payment_type varchar(50) NOT NULL,
    order_total integer NOT NULL,
    order_discount integer NOT NULL default 0,
    order_note  varchar(255) NOT NULL,
    order_comment varchar(255) NOT NULL,
    order_status varchar(255) NOT NULL,
    order_created_at date NOT NULL default CURRENT_DATE
)
CREATE TABLE order_product (
    order_product_order_id integer NOT NULL REFERENCES order(order_id),
    order_product_product_id integer NOT NULL REFERENCES product(product_id), 
    order_product_quantity integer NOT NULL default 1,
    order_product_commission_payment_status boolean NOT NULL default false,
    order_product_packaging boolean NOT NULL default false,
    order_product_withdrawn boolean NOT NULL default false,
    order_product_created_at date NOT NULL default CURRENT_DATE,
    PRIMARY KEY (order_product_order_id, order_product_product_id)
);
CREATE TABLE return (
    return_id serial PRIMARY KEY,
    return_date date NOT NULL default CURRENT_DATE,
    return_product_id integer NOT NULL REFERENCES product(product_id),
    return_comment varchar(50) NOT NULL,
    return_status varchar(50) NOT NULL
);






