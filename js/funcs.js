


// declare some variables to store the admin name and password
const adminName = "pk123";
const adminPassword = "1234";
const secretCode = 556;

// declare some arrays to store various types of information such as songs and users etc...
let premiumSongs = [];
let freeSongs = [];
let songsLibrary = [];
let users = [];
let songs = [];


// ask the prompt to answer one question. If the answer is correct, then the admin is logged in

let maxAttempts = 3;
for (let i = 0; i < maxAttempts; i++) {
    let adminPrompt = prompt("What is the value of total milk sold today?");
    if (!adminPrompt) {
        console.log("Please enter a value");
    } else if (adminPrompt == secretCode) {
        console.log("Hello Admin, Welcome to the music dashboard");
        // allow the admin to do certain actions which often are restricted for other users
        break;
    } else {
        console.log("Invalid admin credentials. Please try again.");
    }
    if (i === maxAttempts - 1)
        console.log("Sorry, you have exceeded the number of attempts. Please try again later.");
}


// create a function to add new songs 

function addSongs() {
    let songTitle = "";
    let readyToAddSongs = prompt("Do you want to add new songs to the library? if ready type yes or no");
    if (readyToAddSongs === "no") {
        console.log("Okay, whenever you're ready you can add songs");
    } else if (readyToAddSongs === "yes") {
        console.log("Great, add new songs!");

        while (songTitle !== "exit") {
            songTitle = String(prompt("Enter the song title"));
            if (songTitle === "exit") break;
            let songType = String(prompt(`Is ${songTitle} a free song or Premium?. type premium/free`).toLocaleLowerCase());
            songsLibrary.push(songTitle);
            if (songType === "premium") {
                premiumSongs.push(songTitle);
            } else {
                freeSongs.push(songTitle)
            }
            console.log("Total songs are:", songsLibrary.length);
            console.log("Total premium songs are:", premiumSongs.length);
            console.log("Total free songs are:", freeSongs.length);
        }
    }
}

addSongs();


// lets create users

function createUsers() {
    let userName;
    let password;
    let email;
    let accountType;

    let signupRes = prompt("Would you like to join Spotify? yes/no");
    if (signupRes === "no") {
        console.log("Okay, whenever you're ready you can sign up");
    } else if (signupRes === "yes") {
        userName = String(prompt("Enter the user name"));
        if (!userName) {
            console.log("User name cannot be empty. Please enter an input");
            return; // Exit the function if userName is empty
        }
        if (userName.length < 3) {
            console.log("User name cannot be less than 3 characters.");
            return; // Exit the function if userName is too short
        }

        password = prompt(`Hello ${userName}, please create a password`);
        if (!password) {
            console.log("Password cannot be empty");
            return; // Exit the function if password is empty
        }
        if (password.length < 5) {
            console.log("Password must be at least five characters");
            return; // Exit the function if password is too short
        }

        email = prompt("Please enter the email address");
        let emailExists = users.some(user => user.email === email);
        if (emailExists) {
            console.log(`This email ${email} already exists. Choose a different email`);
            return; // Exit the function if email already exists
        }

        accountType = prompt("Enter account type (free/premium)");
        // Add the new user to the users array
        users.push({ userName, password, email, accountType });
        console.log(`Account created successfully for ${email}`);
    }
}

createUsers();

// user login feature

function userLogin() {
    let loginEmail = prompt("Please enter your login email");
    if (!loginEmail) {
        console.log("Enter the email address");
        return;
    }
    let user = users.find(user => user.email === loginEmail);
    if (user) {
        console.log(`Welcome ${user.userName}`);
        addSongs(); // let the user add songs
    }
    else {
        console.log("Sorry this email does not exist!");
    }
}
