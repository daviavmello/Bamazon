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
    else console.log ("You're connected!\n" + "_____________________________\n");
    displayProducts();
});

function welcome() {
inquirer.prompt ([ 
        {
        name: "welcome",
        type: "list",
        message: "\nWelcome to Bamazon Store! What would you like to do today?",
        choices: ["BUY", "EXIT"]
        }

    ]).then(function(answer) {
        connection.query("SELECT * FROM products", function (err,res) {
            if (answer.welcome === "EXIT") {
                console.log("\nSee you later!")
            }
            else {
                selectProduct();
            }
        })
    });

}
welcome();

function selectProduct() {
inquirer.prompt ([
    {
        name: "chooseProduct",
        type: "input",
        message: "\nAwesome! What product would you like to purchase today? Please type the id number.",
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
        message: "\nGreat choice! How many would you like to get?",
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
        var totalCost;
        for (var i = 0; i < res.length; i++) {
            if (res[i].id === parseInt(answer.chooseProduct)) {
                chosenItem = res[i];
                totalCost = chosenItem.price * answer.quantity;
                console.log("\nYou have chosen to purchase " + answer.quantity + " unit(s) of the " + chosenItem.product_name + ". Your total is $" + totalCost + ".");
                confirmation();
            }
        }   

    if (chosenItem.stock_quantity >= parseInt(answer.quantity)) {
        connection.query ("UPDATE products SET ? WHERE ?",
        [
            {
                id: chosenItem.id
            },
            {
                stock_quantity: (chosenItem.stock_quantity - parseInt(answer.quantity))
            }
        ],
        );
    }

    else {
        console.log("\nToo bad! The item you chose only has only " + chosenItem.stock_quantity + " units available.")
        welcome();
    }

});
    
});
}

// Display products available

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

function confirmation() {
    inquirer.prompt ([
        {
        name: "confirmation",
        type: "confirm",
        message: "Would you like to confirm your purchase?"
        }
    ])
    .then(function(answer) {
    if (answer.confirmation === true) {
        console.log("\nThank you for shopping with Bamazon! See you soon!\n")
        connection.end();
    }
    else {
        welcome();
    }
})
}