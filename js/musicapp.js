/* 
Restructured Program Steps
Admin Song Listing Creation

Only Admin users can add songs to the app's library.
Admin enters the song name.
Admin specifies the song type (either “free” or “premium”).
Each song is added to a library that will later be accessed by users.?
*/

const adminUserName = "admin123";
const adminPassword = "1234";
let premiumSongs = [];
let freeSongs = [];
let songsLibrary = [];
let premiumUsers = [];

// first ask the user to login and see if they are the admin or not


alert("Please login to the admin account");

let loggedinAdminName = String(prompt("What is your Admin user name"));
let loggedinAdminPassword = prompt("What is the password");

if (loggedinAdminName === adminUserName && loggedinAdminPassword == adminPassword) {
    console.log("Hello, Admin-- Welcome to the music dashboard");
    console.log(` You have the rights to do the following:
        1. upload new songs
        2. Set the price for songs
        3. Publish the songs`);
} else {
    console.log("Invalid credentials, please try agian");
}

let action = String(prompt("Would you like to create new songs? yes/no").toLocaleLowerCase());
if (action === "yes") {
    console.log("Great, add new songs!");
}
else {
    console.log("Okay, whenever you're ready")
}


// allow the admin to create the songs


for (song = 0; song <= 3; song++) {
    let songTitle = String(prompt("Enter the song title"));
    let songType = String(prompt("Is it a free song or Premium?. type premium/free").toLocaleLowerCase());
    songsLibrary.push(songTitle);

    if (songType === "premium") {
        premiumSongs.push(songTitle);
    } else {
        freeSongs.push(songTitle)
    }
}

console.log("All premium songs list", premiumSongs);
console.log("All free songs", freeSongs);


// create user accounts

let users = [];
let password;
let userName;
for (i = 0; i < 2; i++) {
    userName = String(prompt("Enter the user name"));
    password = prompt("Create the password");
    accountType = String(prompt("Is this user" + userName + "premium user? yes/no"));
    let user = { userName: userName, password: password, accountType: accountType === "yes" ? "premium" : "free" };

    // push each user

    users.push(user);

    if (user.accountType === "premium") {
        premiumUsers.push(user);
    }
}


console.log("All premium users list:", premiumUsers);

// ask the user to login to the app
// if they are authorized? then, show all the free songs and premium songs

alert("Would you like to listen to music? yes/no");
let loggedInUserName = String(prompt("Enter the user name"));
let loggedInPassword = prompt("Enter the password");

let isAuthenticated = false;

// check each user with provided details to see if it matches with provided login details

let user;
for (user of users) {
    if (user.userName === loggedInUserName && user.password === loggedInPassword) {
        isAuthenticated = true;
        break;
    }
}

if (isAuthenticated) {
    console.log("Welcome to the music app")
    console.log(" Here all the free songs", freeSongs);
    console.log("Here are all the premium songs", premiumSongs);
} else {
    console.log("Invlaid login details...");
}

// display all songs

let allSongs = [...premiumSongs, ...freeSongs];
let songAction;

if (allSongs.length > 0 && isAuthenticated) {
    for (let i = 0; i < allSongs.length; i++) {
        let songType = premiumSongs.includes(allSongs[i]) ? "premium" : "free";
        songAction = String(prompt("Select your action for " + allSongs[i] + ": play/add").toLowerCase());

        if (songAction === "play") {
            if (songType === "premium" && accountType === "premium") {
                console.log("Enjoy the song:", allSongs[i]);
            } else if (songType === "free") {
                console.log("Enjoy the free song:", allSongs[i]);
            } else {
                console.log("Oops, this is a premium song. Please upgrade to play.");
            }
        } else if (songAction === "add") {
            console.log("Song added to your library:", allSongs[i]);
        } else {
            console.log("Invalid action. Please choose 'play' or 'add'.");
        }
    }
} else {
    console.log("No songs available to play or user is not authenticated.");
}



//
// WITH FUNCTIONS


const adminUserName = "admin123";
const adminPassword = "1234";
let premiumSongs = [];
let freeSongs = [];
let songsLibrary = [];
let premiumUsers = [];
let users = [];

// Function to handle admin login
function adminLogin() {
    let loggedinAdminName = String(prompt("What is your Admin user name"));
    let loggedinAdminPassword = prompt("What is the password");

    if (loggedinAdminName === adminUserName && loggedinAdminPassword === adminPassword) {
        console.log("Hello, Admin-- Welcome to the music dashboard");
        return true;
    } else {
        console.log("Invalid admin credentials. Please try again.");
        return false;
    }
}

// Function to add songs by admin
function addSongs() {
    for (let song = 0; song < 3; song++) {
        let songTitle = String(prompt("Enter the song title"));
        let songType = String(prompt("Is it a free song or Premium? Type 'premium' or 'free'").toLowerCase());

        // Validate song type
        if (songType === "premium") {
            premiumSongs.push(songTitle);
        } else if (songType === "free") {
            freeSongs.push(songTitle);
        } else {
            console.log("Invalid song type. Please enter 'premium' or 'free'.");
            song--; // Repeat this iteration for correct input
            continue;
        }
        songsLibrary.push(songTitle);
    }
}


// delete song
function deleteSongs() {
    let deleteAction = String(prompt("Would you like to delete the song").toLocaleLowerCase().trim());
    if (deleteAction === "delete") {
        console.log("Available songs to delete:", songsLibrary.join(","));
        let songTobeDeleted = String(prompt("Enter the song title").toLocaleLowerCase().trim());
        if (!songsLibrary.includes(songTobeDeleted)) {
            console.log("No song found with that title");
            return;
        }
        console.log("Deleting the song..");
        let songIndex = songsLibrary.indexOf(songTobeDeleted);
        songsLibrary.splice(songIndex, 1);
        console.log("Song is deleted");

    }
}

// Admin process
if (adminLogin()) {
    let action = String(prompt("Would you like to create new songs? yes/no").toLowerCase());
    if (action === "yes") {
        addSongs();
    } else {
        console.log("Admin chose not to add new songs.");
    }
}

console.log("All premium songs list:", premiumSongs);
console.log("All free songs list:", freeSongs);

// Function to create user accounts
function createUserAccounts() {
    for (let i = 0; i < 2; i++) {
        let userName = String(prompt("Enter the user name"));
        let password = prompt("Create the password");
        let accountType = String(prompt("Is this user " + userName + " a premium user? yes/no")).toLowerCase();
        let user = {
            userName: userName,
            password: password,
            accountType: accountType === "yes" ? "premium" : "free"
        };

        users.push(user);
        if (user.accountType === "premium") {
            premiumUsers.push(user.userName);
        }
    }
}

createUserAccounts();
console.log("All premium users list:", premiumUsers);

// User login function
function userLogin() {
    let loggedInUserName = String(prompt("Enter your user name"));
    let loggedInPassword = prompt("Enter your password");

    for (let user of users) {
        if (user.userName === loggedInUserName && user.password === loggedInPassword) {
            console.log("Welcome to the music app, " + user.userName + "!");
            return user;
        }
    }
    console.log("Invalid login credentials.");
    return null;
}

let authenticatedUser = userLogin();
if (authenticatedUser) {
    let userAccountType = authenticatedUser.accountType; // Store the logged-in user's account type

    console.log("Here are all the free songs:", freeSongs);
    console.log("Here are all the premium songs:", premiumSongs);

    // Display all songs and allow actions
    let allSongs = [...premiumSongs, ...freeSongs];
    for (let song of allSongs) {
        let songType = premiumSongs.includes(song) ? "premium" : "free";
        let songAction = String(prompt("Select your action for " + song + ": play/add").toLowerCase());

        if (songAction === "play") {
            if (songType === "premium" && userAccountType === "premium") {
                console.log("Enjoy the premium song:", song);
            } else if (songType === "free") {
                console.log("Enjoy the free song:", song);
            } else {
                console.log("Oops, this is a premium song. Please upgrade to play.");
            }
        } else if (songAction === "add") {
            console.log("Song added to your library:", song);
        } else {
            console.log("Invalid action. Please choose 'play' or 'add'.");
        }
    }
} else {
    console.log("No songs available to play or user is not authenticated.");
}




// arrays


var artistsList = [];
