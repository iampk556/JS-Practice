


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
            let song = {
                title: songTitle,
                artist: songArtist,
                isPremium: songType === "premium"
            };

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

        let user = {
            userName: userName,
            userEmail: email,
            userPass: password,
            userType: accountType
        };
    }
}

createUsers();

// user login feature

function userLogin() {
    let loginEmail = prompt("Please enter your login email");
    if (!loginEmail) {
        console.log("Enter the email address");
        return null;
    }
    let user = users.find(user => user.email === loginEmail);
    if (user) {
        console.log(`Welcome ${user.userName}`);
        addSongs(); // let the user add songs
        return user;
    }
    else {
        console.log("Sorry this email does not exist!");
        return null;
    }
}

// once the user has logged in, allow the user to play the songs
// first fetch all the songs in the songsLibrabry
// then let the user play


let currentUser = userLogin();
if (currentUser) {
    let playedSongs = [];
    if (!currentUser.playedSongs) {
        currentUser.playedSongs = [];

    }

    songsLibrary.forEach(song => {
        console.log(song);
        let songAction = prompt(`Would you like to play this song? ${song}`);
        if (songAction && songAction.toLocaleLowerCase() === "play") {
            // check if the selected song is premium
            // then see whether the user has access to premium songs or not
            // if not then display a error message
            if (songAction === "play" && song.isPremium && currentUser.accountType !== "premium") {
                console.log("you don't have access to premium songs.");
            } else {
                console.log(`playing ${song}`);
                playedSongs.push(song);
                currentUser.playedSongs.push(song);
            }

        } else if (songAction === null) {
            console.log("Prompt cancelled")
        } else {
            console.log(`song ${song} skipped `);
        }
    });
}


// allow the user to manage playlists

function createPlaylist(user) {
    let playlistName = prompt("Enter the name of your new playlist");
    if (!playlistName) {
        console.log("Play list name can not be empty");
        return;
    }
    let newPlaylist = {
        name: playlistName,
        song: [],
        owner: user.userEmail
    };
    playlistName.push(newPlaylist);
    console.log(`play list ${playlistName} created successfully`);
}


function addSongsToPlayList(user) {
    let playlistName = prompt("Enter the name of the playlist you want to add songs to");
    let playlist = playlists.find(pl => pl.name === playlistName && pl.owner === user.userEmail);

}


// view the playlists of a user

function viewPlaylists(user) {
    let userPlaylists = playlists.filter(pl => pl.owner === user.userEmail)
    if (userPlaylists.length === 0) {
        console.log("You don't have any playlists");
        return;
    }
    userPlaylists.forEach(pl => {
        console.log(`playlists: ${pl.name}`);
        pl.songs.forEach(song => {
            console.log(`${song.title} by ${song.artist}`)
        });
    });

}


// first find if the currently logged in user has any playlists
// if? then store them in a variable to perform the delete action
// once found? then show the user which playlists they want to delete
// then take which playlist id to be deleted and then delete
// then show the users the playlist id is deleted and the remaining playlist


function removeSongFromPlaylist(user) {
    let playlistName = prompt("Enter the name of the playlist you want to remove a song from:");
    let playlist = playlists.find(pl => pl.name === playlistName && pl.owner === user.userEmail);
    if (!playlist) {
        console.log("Playlist not found or you do not have access to this playlist.");
        return;
    }
    let songTitle = prompt("Enter the title of the song you want to remove:");
    let songIndex = playlist.songs.findIndex(song => song.title === songTitle);
    if (songIndex === -1) {
        console.log("Song not found in the playlist.");
        return;
    }
    playlist.songs.splice(songIndex, 1);
    console.log(`Song '${songTitle}' removed from playlist '${playlistName}'.`);
}