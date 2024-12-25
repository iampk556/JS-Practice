

// strings practice

const customerFirstName = "Bob";
const customer_dob = 1991;
const year = 2022;
let customerJob = "Programmer";

const customerProfile = `Customer name is ${customerFirstName}, and he is ${year - customer_dob} years old
and he is a ${customerJob}`;

// console.log(customerProfile);


// console.log(`nice strings...`, customerFirstName);

// console.log(" This is the first line \n next this will be the second line \n third line");

// console.log(`this will be the first line and
//            this will be the second line
//            and this will be the third line...`);






// 2. Constructing URLs (e.g., API Endpoints or Query Strings)
// When working with APIs, you frequently need to construct URLs with dynamic parameters. Template literals make this clean and readable.


// const baseUrl = "https://api.example.com/users";
// const userId = 123;
// const page = 2;
// const pageSize = 10;

// const url = `${baseUrl}/${userId}?page=${page}&pageSize=${pageSize}`;
// console.log(url);

// Output: 
// https://api.example.com/users/123?page=2&pageSize=10


// const baseUrl = "https://api.localfirst.com/users";
// const userId = 1234;
// const page = 10;
// const pageSize = 10;

// const Url = `${baseUrl}/${userId}?page=${page}&pageSize=${pageSize}`;

// console.log(Url);



// 3. Email Templates
// When sending out automated emails (e.g., welcome emails, password resets, etc.), you can use template literals to insert user-specific information dynamically.

// let userName = "Alice";
// let resetLink = "https://example.com/reset-password?token=abcd1234";

// let emailTemplate = `
//     Hi ${userName},

//     We received a request to reset your password. Please use the link below to reset it:

//     ${resetLink}

//     If you didn't request this, please ignore this email.

//     Thanks,
//     The Support Team
// `;

// console.log(emailTemplate);

// Output:
// Hi Alice,
//
// We received a request to reset your password. Please use the link below to reset it:
//
// https://example.com/reset-password?token=abcd1234
//
// If you didn't request this, please ignore this email.
//
// Thanks,
// The Support Team


let userName = "Bob";
let userEmail = "bob@gmail.com";
let resetLink = "https://example.com/reset-password?token=abcd1234";


let emailTemplate = "Password Reset Request Received!";


let passwordResetEmail =
    `Hi ${userName}
    We received an email to reset your password.
    Here is the link to reset your email password!
    Reset the password ${resetLink}

    Thanks
    LocalFirst
    ` ;
console.log(passwordResetEmail); 