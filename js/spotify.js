// create a default admin credentials and let them login
const adminUserLogin = "pk123";
const adminLoginPassword = "12345";

let adminLoginAttempted = String(prompt("Enter the login name").toLocaleLowerCase());
if (!adminLoginAttempted) {
    console.log("Please enter a valid login name");
} else if (adminLoginAttempted === adminUserLogin) {
    console.log("Welcome, admin! Please enter the password to login");
    let adminPasswordAttempted = prompt("Enter the password");
    if (adminPasswordAttempted === adminLoginPassword) {
        console.log("Welcome, Admin! You are logged in");
    } else {
        console.log("Invalid password, please try again");
    }
} else {
    console.log("Invalid login name, please try again");
}

// ask the admin if he would like to add songs
let premiumSongs = [];
let freeSongs = [];

let adminAction = String(prompt("Would you like to add songs? yes/no").toLocaleLowerCase());
if (adminAction === "yes") {
    console.log("Great, add new songs!");
    addSongs();
} else {
    console.log("Okay, whenever you're ready");
}

// create a function that allows the admin to add songs to the library



function addSongs() {
    let songTitle, songType;
    let songsLibrary = [];
    while (true) {
        songTitle = String(prompt("Enter the song title (or type 'Exit' to end)"));
        // q: add the logic if the song title is empty throw an error message
        if (!songTitle) {
            console.log("Please enter a valid song title");
            continue;
        }

        if (songTitle.toLowerCase() === "exit") {
            break;
        }

        songType = String(prompt("Is this a premium song or a free song? (Enter 'premium' or 'free')")).toLowerCase();
        if (songType !== "premium" && songType !== "free") {
            console.log("Invalid song type. Please enter 'premium' or 'free'.");
            continue;
        }

        songsLibrary.push({ title: songTitle, type: songType });
    }

    console.log("Songs in your library:", songsLibrary);
}


// create user accounts by allowing users to enter their email and password
// q: keep all the users account types as free 
// q: create a new array called users and push each user into the array
let users = [];
let premiumUsers = [];
let userName, password, accountType;
for (i = 0; i < 2; i++) {
    userName = String(prompt("Enter the user name"));
    password = prompt("Create the password");
    let user = { userName: userName, password: password, accountType: "free" };

    // push each user
    users.push(user);
    // q:update the users count
    if (user.accountType === "free") {
        users.push(user);
    }
}

console.log("All users list:", users);
console.log("All premium users list:", premiumUsers);


let users = [];
let premiumUsers = [];
let freeUsers = [];
let userName, password, accountType;

for (let i = 0; i < 2; i++) {
    userName = String(prompt("Enter the user name"));
    password = prompt("Create the password");
    accountType = String(prompt("Enter the account type (free/premium)")).toLowerCase();

    if (accountType !== "free" && accountType !== "premium") {
        console.log("Invalid account type. Please enter 'free' or 'premium'.");
        i--; // Decrement the counter to retry the current iteration
        continue;
    }

    let user = { userName: userName, password: password, accountType: accountType };

    // Push each user to the users array
    users.push(user);

    // Categorize users based on account type
    if (accountType === "premium") {
        premiumUsers.push(user);
    } else {
        freeUsers.push(user);
    }
}

console.log("All users list:", users);
console.log("All premium users list:", premiumUsers);
console.log("All free users list:", freeUsers);
