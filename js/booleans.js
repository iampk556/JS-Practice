/*

Challenge 1: VIP Event Access
Imagine a ticketing system for a VIP event, where a user can only enter if:

They are over 21 years old.
They have a valid VIP pass.
Write a program that prompts the user to enter their age and asks if they have a VIP pass (yes or no). Only allow access if both conditions are met.

*/


const eventName = "Couple event";
let minAge = 21;
let guestName;
const priceForEvent = 1000;
let guestCount = 0;
const maxGuests = 3;
let guestAge;
let genderAllowed = "female";

// ask the user to provide their details
// then validate the details


// display who is allowed for the event and who are not allowed

for (guestCount = 0; guestCount <= maxGuests; guestCount++) {
    guestName = String(prompt("What is your name?"));
    guestAge = Number(prompt("Please enter your age"));
    guestGender = String(prompt("Whats your gender"));
    console.log("Guest Name:" + guestName + "Age: " + guestAge + " Gender: " + guestGender + " ");
}



// apply the restriction
for (guestCount = 1; guestCount <= maxGuests; guestCount++) {
    if (guestAge <= minAge && guestGender === "female") {
        console.log("Your entry to the event" + eventName + "is confirmed");
    } else {
        console.log("Sorry, you're not allowed for the event");
    }
}