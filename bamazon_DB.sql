DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT default 50 NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone XS Max", "Electronics", "1000.99", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Holy Bible", "Books", "20.39", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("H&M Crewneck Sweatshirt", "Clothing", "19.99", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Classic Office Chair", "Home Office", "59.79", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nest Thermostat", "Smart Home", "120.10", "75");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Starbucks Pike Place 20oz", "Grocery", "7.89", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pedigree - Roasted Chicken Flavor 70oz", "Pet Supplies", "22.10", "25");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Buzz Lightyear Original Size", "Toys", "60.90", "70");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Barcelona Football Club Official Jersey", "Sports", "110.80", "30");

SELECT * FROM products;

SHOW TABLES;