#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.white.bold("***************************************************"))
console.log(chalk.blue.bold  ("\n \t Welcome to 'Kinza'- Currency Convertor \n"));
console.log(chalk.white.bold("***************************************************"))

// Define the list of currenices and their exchange rates
let  exchange_rates: any = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currebcy (Euro)
    "JYP": 113, // Japenesse Currency (Yen)
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR" : 280, // Pakistani Rupees
    // add more currencies and their exchange rates 
}

// Promt the user to select currencies to convert from amd to
let user_answer = await inquirer.prompt([
    {
        name : "from_currency",
        type : "list",
        message : chalk.yellow ("Select the currency to convert from:"),
        choices :["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name :"to_currency",
        type : "list",
        message : chalk.magenta("Select the currency to convert into:"),
        choices :["USD", "EUR", "JYP", "CAD", "AUD", "PKR" ]
    },
    {
        name: "amount",
        type : "input",
        message : ("Enter the amount you convert:")
    }
]);
// Perform currency conversion by using formula
let from_amount = exchange_rates[ user_answer.from_currency];
let to_amount =  exchange_rates[user_answer.to_currency];
let amount = user_answer.amount

// Formula of Conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
