var prompt = require('prompt-sync')();
var balance = 1000;
while(balance > 0){
    var spent = prompt("How much do you want to spend? ");
    while(spent > balance){
        spent = prompt("that's too much money. your balance is " + balance + ". how much do you want to spend?");
    }
    balance -= spent;
    console.log("Your remaining Balance is " + balance);
}