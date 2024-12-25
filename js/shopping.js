// function calculateTotalPrice(pricePerUnit, quantity) {
//     return pricePerUnit * quantity;
// }

// // Get input from the user
// let userPricePerUnit = Number(prompt("Enter the price per unit:"));
// let userQuantity = Number(prompt("Enter the quantity:"));

// // Call the function with user inputs
// let totalPrice = calculateTotalPrice(userPricePerUnit, userQuantity);
// console.log("Total Price: $" + totalPrice);



function sendMessage(toUser, messageContent, phoneNumber) {
    console.log(`Message to ${toUser}: "${messageContent}" sent to ${phoneNumber}`);
}

// Get input from the user
let recipient = prompt("Enter the recipient's name:");
let message = prompt("Enter your message:");
let phone = prompt("Enter the phone number");

// Call the function with user inputs
sendMessage(recipient, message, phone);


// Whatsapp functions

// user should be able to send a message to other person 
// collect the sender details
// collect the receipt details

let senderName = "PK";
const senderPhoneNumber = "9962472113";
let messageStatus = "";
function sendMessage(senderName, senderPhoneNumber, recipientName, recipientPhoneNumber, message, time, messageStatus) {
    if (!recipientName || !recipientPhoneNumber || !message) {
        console.log("Please enter the valid input");
        messageStatus = "failed"
        return;
    }
    if (!isNaN(recipientPhoneNumber) || (recipientPhoneNumber.length <= 10)) {
        console.log("Please enter a valid phone number");
        messageStatus = "failed";
        return;
    }
    if (message.length < 1) {
        console.log("Please enter minimum two characters..");
        messageStatus = "failed"
        return;
    }

    console.log(`Message to  + ${senderName} ${senderPhoneNumber} to ${recipientName} ${recipientPhoneNumber} ${message}`);
    console.log(`message is ${message}`);
}


let recipientName = String(prompt("To whom would you like to send a message?"));
let recipientPhoneNumber = String(prompt("Enter the phone numebr"));
let message = String(prompt("Enter the message"));

sendMessage(senderName, senderPhoneNumber, recipientName, recipientPhoneNumber, message);