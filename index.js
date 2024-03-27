#! /usr/bin/evn node
import inquirer from "inquirer";
let myBalance = 20000; // Dollar
let pinCode = 2244;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === pinCode) {
    console.log("Correct pin code !!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "Fast Cash", "check balance"],
    },
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        },
    ]);
    // = -= +=
    myBalance -= amountAns.amount;
    console.log("your remaining balance is:" + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
}
else if (operationAns.operation === "Fast Cash") {
    let FastCash = await inquirer.prompt([
        {
            name: "Cash",
            message: "please select anyOne option",
            type: "list",
            choices: ["1000", "5000", "10000", "15000", "20000"],
        },
    ]);
    myBalance -= FastCash.Cash;
    console.log("your remaining balance is:" + myBalance);
}
else {
    console.log("Incorrect pin number");
}
