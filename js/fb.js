/*
1. User Registration and Authentication
Purpose: Allow users to create an account and log in.

Key Information:

username
password
email (optional for now)
status (e.g., "online" or "offline")
Implementation:

Create a users array to hold all registered users.
Write functions for:
Registering a New User: Prompt for username, password, and other details.
Login: Prompt for username and password, then check against the users array for matching credentials.
*/


let registeredUsers = ["pk", "pk2", "pk3"]
let status;

let userChoice = prompt("Welcome to facebook. Enter 'Login' or 'Sign up'");
if (userChoice.includes("Login")) {
    console.log("Login flow");
    userLogin();
} else if (userChoice.includes("Sign up")) {
    console.log("Sign up flow")
    createAccount();
}



function createAccount() {
    let userName = String(prompt("What is your name").toLocaleLowerCase().trim());
    let password = String(prompt("Enter the password").toLocaleLowerCase().trim());
    if (!userName || !password) {
        console.log("User name and password are required")
        return; // block further execution and keep the user at this state
    }

    if (userName.length < 2) {
        console.log("user name must be minimum of two chars");
        return;
    }
    else {
        registeredUsers.push(userName);
        console.log("Great, your account has been created for the user name", userName);
    }

}


function userLogin() {
    let userLoginName = String(prompt("Enter the user name").toLocaleLowerCase().trim());
    if (userLoginName === "") {
        console.log("Please enter the valid user name")
        return; // block the further execution and keep the user at this state
    }
    if (!registeredUsers.includes(userLoginName)) {
        console.log("the user name is not found")
    }
    else {
        status = "online";
        console.log("Welcome", userLoginName, "and You are", status);
    }
    deleteUser();
}

function deleteUser() {
    let userAction = String(prompt("Do you want to delete account? then type Delete").toLocaleLowerCase().trim());
    if (userAction === "delete") {
        console.log("Registered users are:", registeredUsers.join(", "));
        let searchName = String(prompt("Select the name you want to delete.."), registeredUsers);
        if (!registeredUsers.includes(searchName)) {
            console.log("there is no account found. Please try again");
            return;
        }
        else {
            console.log("We found the user name", searchName);
            let finalDesicion = String(prompt(`Are you sure, you want to delete  ${searchName}`).toLocaleLowerCase().trim());
            if (finalDesicion === "yes") {
                // Find the index of the user and remove them using splice
                let userIndex = registeredUsers.indexOf(searchName);
                registeredUsers.splice(userIndex, 1);
                console.log("Account deleted. Remaing users are", registeredUsers.join(", "));
            }
            else {
                console.log("Account deletetion cancelled.")
            }
        }
    }
}
