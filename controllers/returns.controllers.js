//As a Admin, I want to be able to add a new return to the database
//As a Admin, I want to be able to view all returns in the database [by date, by product, by status]
//As a Admin, I want to be able to view a single return in the database
//As a Admin, I want to be able to update a return in the database
//As a Admin, I want to be able to update a status return in the database
//As a Admin, I want to be able to delete a return in the database

/* 
return_id serial PRIMARY KEY
return_date date NOT NULL default CURRENT_DATE
return_product_id integer NOT NULL
return_comment varchar(50) NOT NULL
return_status varchar(50) NOT NULL

foreign key (return_product_id) references product(product_id)
 */
