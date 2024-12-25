// create application to determine the eligiblity of a personal loan


// define the bank criterias
const BANKNAME = "SBI";
const BankCity = "Hyderabad"; // loans only given to customers who live Hyderabad
let loansGivenToOutsideSBICustomers = false;
const loanType = "personal";
const minimumIncomeRequired = 30000;
const jobTypeRequirement = ["Government ", "private", "SelfEmployed"];
const minAgeforLoan = 22;
let mincreditScoreRequired = 700;
const loanTenureMax = 36;
let loanTenure;

// collect the customer details first


// let customerCity = prompt("Where do you live?");
// const customerAge = prompt("What is your age");
// const customerJobType = prompt("What is your job?");
let customerOneName = prompt("What is your name");
let customerSalary = parseInt(prompt("What is your salary"));


let customerCreditScore = parseInt(prompt("what is your credit score"));
// print the customer details

console.log(" ***** Loan Application Details ******")
console.log(`Customer Name: ${customerOneName},   
    customer Salary is: ${customerSalary}`);


// if minimum requirements are not met, just reject the loan

let userType = null;
if (customerSalary <= minimumIncomeRequired || customerCreditScore <= mincreditScoreRequired) {
    console.log(" You're not eligible", loanType, "loan");
} else {
    console.log(" You are eligible for the loan")
    userType = 1;
}


if ((customerSalary >= minimumIncomeRequired && customerSalary <= 60000 && customerCreditScore <= 750)) {
    console.log(" loan upto, six lakhs");
    //userTypeTwo = (customerSalary >= minimumIncomeRequired && customerSalary <= 60000) && (customerCreditScore >= mincreditScoreRequired && customerCreditScore <= 750);
    userType = 2;
}

if ((customerSalary > 60000 && customerSalary <= 100000) && (customerCreditScore >= mincreditScoreRequired && customerCreditScore <= 800)) {
    console.log(" You are eligible for loan upto ten lakhs!");
    //userTypeThree = (customerSalary >= minimumIncomeRequired && customerSalary <= 100000) && (customerCreditScore >= mincreditScoreRequired && customerCreditScore <= 800);
    userType = 3;
}

if ((customerSalary > 100000 && customerSalary <= 200000) && (customerCreditScore >= mincreditScoreRequired && customerCreditScore <= 850)) {
    console.log("You are eligble for the loan upto twenty lakhs");
    //userTypeFour = (customerSalary >= mincreditScoreRequired && customerSalary <= 200000) && (customerCreditScore >= mincreditScoreRequired && customerCreditScore <= 850);
    userType = 4;
}



// now ask the user how much loan they want
// then ask for how many years they want the loan repayment structure to be
// then based on credit score determine the interest rate
// then display the interest rate
// then display instalment amount for each month


// handle usertype 

let loanAmountRequired;
loanAmountRequired = parseInt(prompt(" Since, you're eligible how much loan you want?"));
if ((userType == 2 && loanAmountRequired <= 600000) ||
    (userType == 3 && loanAmountRequired <= 1000000) ||
    (userType == 4 && loanAmountRequired <= 2000000)) {
    console.log(loanAmountRequired);

    loanTenure = parseInt(prompt("For the loan amount of ", loanAmountRequired, " Choose the tenrue"));
    console.log(" You have selected tenure as ", loanTenure, " years");

}

// calculate the interest rate per year first with dynamic credit score


let loanInterestRate;
if (customerCreditScore >= 700 && customerCreditScore <= 750) {
    loanInterestRate = 12;
}
if (customerCreditScore > 750 && customerCreditScore <= 800) {
    loanInterestRate = 10;
}
if (customerCreditScore >= 800 && customerCreditScore <= 850) {
    loanInterestRate = 8;
}


let totalLoanTobePaid;

let totalInterestPerYear = (loanAmountRequired * loanInterestRate) / 100;
let totalInterestForTenure = totalInterestPerYear * loanTenure;
totalLoanTobePaid = loanAmountRequired + totalInterestForTenure;
console.log(" Here is your total loan amount to be paid with interest for ", loanTenure, " years!");
console.log(totalLoanTobePaid);


// display the monthly EMI

const totalEmiMonths = loanTenure * 12
console.log(" Total EMIs are ", totalEmiMonths);


// calculate the EMI per month

let emiPerMonth = totalLoanTobePaid / totalEmiMonths;
console.log(`You need to pay  ${emiPerMonth} Each month upto ${totalEmiMonths} months`);
console.log("The total interest rate is", loanInterestRate);


// Dynamic Interest Rate Based on Credit Score
// Add logic to change the interest rate based on the customer's credit score.
// Example interest rate scheme:
// Credit score 700-750: 12% interest rate
// Credit score 751-800: 10% interest rate
// Credit score 801-850: 8% interest rate

