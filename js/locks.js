
// write a program to open or close the doors of a house 


let houseCode = 1234;
const kitchenLockcode = 9999;
const houseOwner = "Mike";
let userInputforBedRoomSecondattempt;
const Hint = "What is your mother's surname before her marriage";
const hintAnswer = "yeluchuri";


let visitorName = prompt("What is your name?")


let userInputforBedRoom = prompt("Please enter the Bed Room Lock code to open the door");
let firstAttempt;
userInputforBedRoom = firstAttempt;
if (userInputforBedRoom == houseCode && visitorName == houseOwner) {
    console.log(" Welcome Home", houseOwner);
}

if (userInputforBedRoom == houseCode && visitorName != houseOwner) {
    console.log(" Welcome visitor", visitorName)
}

if (userInputforBedRoom != houseCode) {
    console.log("Sorry wrong lock code entered!. Try again", visitorName)
}


// if the visitor enters the passcode three times wrong. Block him
if (userInputforBedRoom != houseCode) {
    let thirdAttempt;
    let secondAttempt = prompt("Enter the house code again( Second chance)");
    if (firstAttempt != houseCode && secondAttempt != houseCode) {
        console.log(" You entered the lock code wrong two times.");
        let thirdAttempt = prompt("Enter the house code. Last chance!");
        if (firstAttempt != houseCode && secondAttempt != houseCode && thirdAttempt != houseCode) {
            console.log(" You are blocked from entering the code...")
        }
    }

    // if the visitor enters the passcode three times wrong but the name is matched
    // with the owner name then ask him a hint question
    // if the answer to the hint question matches, then allow him inside the house
    // then allow him to reset the housecode



    if (firstAttempt != houseCode && secondAttempt != houseCode && thirdAttempt != houseCode && visitorName == houseOwner) {
        console.log(" you sound like a ower", visitorName);
        console.log(`Since we think you're the owner of this house
            we will allow you this time. But you need reset the code.
            You can reset it if you can answer the hint!`)
        let visitorPromotResponse = prompt(Hint);
        if (visitorPromotResponse === hintAnswer) {
            console.log("That is correct answer!", visitorName);
            let newHouseCode = prompt("Enter the new passcode")
            console.log("New passcode for the house is set!. Its ", newHouseCode);
            houseCode = newHouseCode;
        }
    }
    let newHouseCode;
    userInputforBedRoom = prompt("whats the passcode for the house?");
    if (userInputforBedRoom == newHouseCode && visitorName == houseOwner) {
        console.log(" Welcome visitor", visitorName);
    }
    if (userInputforBedRoom === houseCode) {
        console.log("You entered the old house code!");
    }
}









// allow the visitor to go the kitchen automaticaly if the visitor is a houseOnwer
// otherwise, the visitor is only allowed to the bed room

if (userInputforBedRoom == houseCode && visitorName == houseOwner) { // both must be true
    console.log(" You wanna eat some food? The kitche is unlocked for you!");
}


// ask the visitor to enter the code again
// if the user enters the code wrong even second time? then show a warning

