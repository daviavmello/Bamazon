var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '050994.Dm',
    port: 3306,
    database: 'bamazon_DB'
});

// Arrow function that holds errors

connection.connect(err => {
    if (err) throw err;
    else console.log ("You're connected!" + "\n" + "_____________________________" + "\n");
});

displayProducts();

inquirer.prompt ([ 
        {
        name: "welcome",
        type: "list",
        message: "Welcome to Bamazon Store! What would you like to do today?",
        choices: ["BUY", "EXIT"]
        }

    ]).then(function (answer) {
        connection.query("SELECT * FROM products", function (err,res) {
            if (answer.welcome === "EXIT") {
                console.log("\nSee you later!")
            }
            else {
                selectProduct();
            }
        })
    });

function selectProduct() {

inquirer.prompt ([
    {
        name: "chooseProduct",
        type: "input",
        message: "Awesome! What product would you like to purchase today? Please type the id number.",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },

        {
        name: "quantity",
        type: "input",
        message: "Great choice! How many would you like to get?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
    ]).then(function(answer) {
        connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
            if (res[i].id === parseInt(answer.chooseProduct)) {
                chosenItem = res[i];
            }
        }   
            console.log("\nYou have chosen to purchase " + answer.quantity + " unit(s) of the " + chosenItem.product_name);       
});

    if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
        connection.query ("UPDATE products SET ? WHERE ?")
        [
            {
                id: chosenItem.id
            },
            {
                stock_quantity: chosenItem.stock_quantity - parseInt(answer.quantity)
            }
        ]
    }

    else {
        console.log("Too bad! The item you chose only has " + chosenItem.stock_quantity + " availabe")
    }
    
});
}

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
        console.log("Item #" + res[i].id + " | " +
                    "Name: " + res[i].product_name + "\n" +
                    "Department: " + res[i].department_name + "\n" +
                    "Price: " + res[i].price + "\n" + 
                    "Quantity: " + res[i].stock_quantity + "\n");

        }
    })
}
