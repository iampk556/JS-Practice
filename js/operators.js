
// practicing some operators

const currentYear = 2024;
const yearOfBirth = 1991;
const yearWhenIgetMarried = 2026;

console.log(" I will get married at", yearWhenIgetMarried - yearOfBirth);
console.log(" my current age is ", currentYear - yearOfBirth);

// calculate loans

const loanOne = 100;
const loanTwo = 200;
const loanThree = 300;


let downPaymentforPaidforLoanOne = 20;

// outstanding loanone = 80

let loanOneOutstanding = loanOne - downPaymentforPaidforLoanOne;
console.log(loanOneOutstanding);

console.log("Total debt I have is before making downpayment ", loanOne + loanTwo + loanThree);
console.log("Total debt I have is after making downpayment ", loanOneOutstanding + loanTwo + loanThree);

// total debt of self is 

let totalDebtofOnePerson = loanOneOutstanding + loanTwo + loanThree;

// loan of two people

let twoPeopleLoans = totalDebtofOnePerson * 2;

console.log("total family debt is ", twoPeopleLoans);

// operators

let interestPerYearonLoan = twoPeopleLoans + 1;
console.log(interestPerYearonLoan);

// after one year

interestPerYearonLoan += 2;
console.log(interestPerYearonLoan); 