DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products (
  id INT(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(150) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(65,2) NOT NULL,
  stock_quantity INT(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone XS Max", "Electronics", 1000.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Holy Bible", "Books", 20.39, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("H&M Crewneck Sweatshirt", "Clothing", 19.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Classic Office Chair", "Home Office", 59.79, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nest Thermostat", "Smart Home", 120.19, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Starbucks Pike Place 20oz", "Grocery", 7.89, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pedigree Chicken Flavor 70oz", "Pet Supplies", 22.10, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Buzz Lightyear Original Size", "Toys", 60.90, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Barcelona Football Club Official Jersey", "Sports", 110.80, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vitamins Leave Cream 10oz", "Beauty & Health", 18.10, 5);