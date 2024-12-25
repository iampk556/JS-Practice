// const inputYear = "1991";
// console.log(inputYear);


//convert the input type string to a number


// const birthYear = "1991";
// console.log(Number(birthYear));
// console.log(birthYear + 2); // it wont work

// console.log(Number(birthYear) + 2);



// examples


// let senderName = "PK";
// let receiverName = "James";
// let trnsAmount = Number(prompt("How much money you want to send to " + receiverName));


// if (isNaN(Number(trnsAmount))) {
//     alert(" Please enter amount in numbers. Not in text")
// }

// if (trnsAmount <= 100) {
//     alert("The mininum is 100. Please enter more than 100");
// }
// // if (!Number(trnsAmount)) {
// //     alert(" Please enter amount in numbers. Not in text")
// // }
// else {
//     console.log("Amount you want to send is", trnsAmount);
//     alert(" The amount of " + trnsAmount + " is sent to " + receiverName);
// }



// Challenge 1: E-Commerce Quantity Validation


const price = 10;
const minQty = 1;
const productName = "Books";
let userShoppingQty = Number(prompt("Select how many quantities you to buy " + productName));

if (!Number(userShoppingQty)) {
    alert(" Please enter the quantity in numbers")
}
if (userShoppingQty <= 1) {
    alert("Please enter minimum quantity of ", minQty);
}

else {
    console.log(+ userShoppingQty + " " + productName + " will be delivered to you");
    let totalCost = userShoppingQty * price;
    console.log("total amount paid is: ", totalCost);
}


// Challenge 2: Age Verification for a Sign-Up Form
/*Requirements:
Prompt the user to enter their age.
If the input is not a valid number or less than 18, display an error message.
If the age is valid and 18 or older, allow them to proceed */


const MinAge = 18;

let userInputAge = Number(prompt("How old are you?"));
if (isNaN(userInputAge)) {
    alert("Invalid age. Please enter age in number")
}
if (isNaN(userInputAge) || userInputAge < 18) {
    alert(" You must be 18 years old to sign up.");
}



// Challenge 3: Tip Calculator
/*
Requirements:
Prompt the user for the bill amount and tip percentage.
Validate that both inputs are valid numbers.
Calculate the tip amount and display the total bill (bill amount + tip). */


let billBeforeTip = Number(prompt(" Enter the bill amount"));
let tip = Number(prompt("what percentage of tip you want to give?"));

if (isNaN(billBeforeTip) || isNaN(tip)) {
    alert("Please enter the valid bill and tip information")
}

// calculate the tip

let tipAmount = billBeforeTip * tip / 100;
console.log(tipAmount);

let billAfterTip = billBeforeTip + tipAmount;
console.log(" Your total bill is " + billAfterTip);


/* 

Challenge 5: Loan Eligibility Checker
Suppose you’re creating a loan eligibility calculator for a bank. The user must enter their annual income and credit score. The bank has the following conditions:

Income must be a valid number above $20,000.
Credit score must be a number between 300 and 850.
Requirements:
Prompt the user to enter their annual income and credit score.
Check that both inputs are valid numbers and meet the specified conditions.
Display a message if the user is eligible or show an error if they are not. */


const minIncomeReq = 20000;
const minCreditScore = 300;
const MaxCreditScore = 850;

let userAnnualIncome = Number(prompt("What is your annual income?"));
let userCreditScore = Number(prompt("What is your credit score"));

if (isNaN(userAnnualIncome) || isNaN(userCreditScore)) {
    alert("Please enter valid inputs");
}

if (!(userAnnualIncome > minIncomeReq) || !(userCreditScore > minCreditScore)) {
    alert(" Sorry you are not eligibel for the loan");
}
else {
    alert("Great, you are eligible for the loan")
}