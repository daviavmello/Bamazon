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
    else console.log ("Connected to Bamazon Store!" + "\n" + "_____________________________" + "\n");
    displayProducts();
});

function welcome() {
    inquirer.prompt ({
        name: "welcome",
        type: "list",
        message: "Welcome to Bamazon Store! What would you like to do today?",
        choices: ["BUY", "EXIT"]
    });

    .then.
}

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++){
        console.log("Item #" + res[i].id + " | " +
                    "Name: " + res[i].product_name + "\n" +
                    "Department: " + res[i].department_name + "\n" +
                    "Price: " + res[i].price + "\n" + 
                    "Quantity: " + res[i].stock_quantity + "\n");

        }
    })
}

// function checkout() {
// inquirer.prompt ({
//     name: "question",
//     type: "list",
//     message: "What product would you like to purchase?",
//     choices: res[i].id
// })
// }
// checkout()