// create an array that holds the users information
// then ask the users to enter their information for sign up
// then allow the users to login to their account using the same login details


const websiteName = "Facebook";
let users = [];
let minAge = 15;


// validate the user input details

function userSignUp() {
    for (; ;) {
        let userName = String(prompt("Enter your name"));
        let userEmail = String(prompt("enter the email address"));
        let userAge = Number(prompt("What is your age?"));
        let displayName = prompt("Enter a unique display name...");
        let userPassword = prompt("Create a password");

        if (!userName || !userEmail || !userAge || !displayName || !userPassword) {
            alert("Field can not be empty. Please enter your details");
            continue;
        }
        if (!userEmail.includes("@")) {
            alert("Please enter a valid email address");
            continue;
        }
        if (isNaN(userAge)) {
            alert("Please enter age in numbers.. between 13- 99");
            continue;
        }

        if (userAge < minAge) {
            alert("Sorry, you can not create an account");
        }

        // if all validations are pass? then add those user details to the users array
        // create a user object

        let user = {
            userName: userName, userAge: Number(userAge), userEmail: userEmail, displayName: displayName, userPassword: userPassword, statusUpdate: []
        };

        // now push these objects to the users array

        users.push(user);
        console.log("A new user has been created... on", websiteName);
        break;

    }

}


// allow the user to login

authenticatedUser = null; // global variable can be accessed in any function
function userLogin() {
    let btnClickLogin = String(prompt("Do you want to login? login"));
    if (btnClickLogin.toLocaleLowerCase() === "yes") {
        let email = String(prompt("Enter your login email"));
        let password = prompt("Enter your password");

        // user has provide the email and password
        // now cross check if those details match with any user detais in the users array
        // where we stored all users details in an object

        if (!email || !password) {
            console.log("Login details can not be empty. Please enter...")
            return;
        }


        for (let i = 0; i < users[i].length; i++) {
            if (email == users[i].userEmail) {
                // email matched    
                if (password == users[i].userPassword) {
                    console.log("Welcome to your account,", users[i].userName);
                    authenticatedUser = users[i];
                    return true;
                }
                else {
                    console.log("Invalid password");
                }
                return;
            }
        }

        if (!loginSuccessful) {
            console.log("there is no account with your email...");
        }

    }
}



/*
3. Adding Friends 
Purpose: Enable users to connect with others by "adding" them as friends or following them.
Implementation:
Add a friends array  to each user.
Write functions to:
Send Friend Request : Allow one user to add another user by username.
Confirm Friend Request: Automatically confirm for simplicity, or add a manual step if you want.
Display Friends List: Show a list of the user’s friends.

*/


let receivedFriendRequests = [];
function sendFriendRequest() {
    // display list of users
    console.log("List of people on", websiteName);
    console.log("Choose peron to send friend request");
    let selectedUser = String(prompt("Enter the email address of the friend you want to send request to... email"));

    // check if that entered email address is actually registered with website
    let foundUser = false;
    for (i = 0; i < users.length; i++) {
        if (users[i].userEmail === selectedUser) {
            foundUser = true;
            console.log("Great, we found your friend. ", users[i].userName)

            // prompt the action
            let action = String(prompt("Do you wanna a friend request? yes/no"));
            if (action === "yes") {

                // Initialize receivedFriendRequests if it doesn't already exist
                users[i].receivedFriendRequests = users[i].receivedFriendRequests || [];
                console.log("Request sent");
                // Add the sender's email or username to the friend's received requests
                users[i].receivedFriendRequests.push("You have a new friend request!");
                console.log("Friend request sent to", users[i].userName);
                break;
            }
            console.log("Friend Request did not attempted"); // just for a note
        }
        else {
            console.log("We did not find anyone with that email address")
        }
    }
    if (!foundUser) {
        console.log("No user found ")
    }

}


// allow the user to post a status
// make sure the user is logged in



let statusUpdates = [];
function updateStatus() {
    isAuthenticated = false;
    if (!userLogin()) {
        console.log("Please login to update the status");
        return; // if return is not used, then user will be asked to post a status without login
    }
    let status = String(post("Whats the status...").toLocaleLowerCase());
    if (status === "") {
        console.log("Please say something...");
    }
    else {
        console.log("You status posted", status);
        authenticatedUser.statusUpdates.push(status);

    }

}

// based on the user selection allow the user to post
// status, photo, video,

function userPosts() {
    authenticatedUser = false;

    if (!userLogin()) {
        console.log("Please login to post");
        return;
    }
    else {
        authenticatedUser = true;
        let userSelectedPostOption = String(prompt("What do you want to post status/photo/video").toLocaleLowerCase());
        if (userSelectedPostOption !== "") {
            // do something
            switch (userSelectedPostOption) {
                case "status":
                    console.log("post/status/create");
                    break;
                case "photo":
                    console.log("post/photo/create");
                    break;
                case "video":
                    console.log("post/video/create");
                    break;
                default:
                    console.log("see the feed..")
            }
        }
        else {
            console.log("Please select your choice")
        }
    }
}


//  allow the user to perform various events on the post.

let userPosts = [];

function updatePost() {
    authenticatedUser = false;
    // do something
    if (userLogin()) {
        authenticatedUser = true;
        for (i = 0; i < userPosts.length; i++) {
            let userPostClick = String(prompt("What would you want to do?"))
            // edit, delete, archive, hide
            switch (userPostClick) {
                case "edit":
                    editPost();
                    console.log("Edit the post");
                    break;
                case "delete":
                    deletePost();
                    console.log("delete the post")
                    break;
                case "archive":
                    archivePost();
                    console.log("Post archieved");
                    break;
                case "hide":
                    hidePost();
                    console.log("Post is hidden");
                    break;
                default:
                    showPost();
                    console.log("See the post");

            }
        }

    }

}

function editPost() {
    console.log("Editing post...");
    // Code to edit the post
}

function deletePost() {
    console.log("Deleting post...");
    // Code to delete the post
}

function archivePost() {
    console.log("Archiving post...");
    // Code to archive the post
}

function hidePost() {
    console.log("Hiding post...");
    // Code to hide the post
}

function showPost() {
    console.log("Showing post...");
    // Code to show the post
}



let isOnline = true;
let userStatus = isOnline ? "Active Now" : "Last seen yesterday";
console.log(userStatus); // Outputs: "Active Now" if true, otherwise "Last seen yesterday"


let userAge = 16;
let registrationMessage = userAge >= 18 ? "Welcome to the event!" : "Sorry, you must be 18 or older to register.";
console.log(registrationMessage); // Outputs message based on age
