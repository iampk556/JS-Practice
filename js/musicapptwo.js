// define some variables

const adminUserName = "admin123";
const adminPassword = "1234";
let premiumSongs = [];
let freeSongs = [];

let allSongs = [...premiumSongs, ...freeSongs];
// function to handle the admin login

function adminLogin() {
    let loggedInAdminUserName = String(prompt("Enter the admin user name"));
    let loggedinAdminPassword = String(prompt("Enter the admin password"));
    if (loggedInAdminUserName === adminUserName && loggedinAdminPassword === adminPassword) {
        console.log("Welcome to the music admin portal");
        return true;
    } else {
        console.log("Invalid credentials. Try again...");
        return false;
    }
}


// create a fuction to allow the admin to add songs to the portal

function addSongsToLibrary() {
    for (let i = 0; i < 3; i++) {
        let songTitle = String(prompt("Enter the song title..."));
        let songType = String(prompt("is the song free or premium? type premium/free "));
        if (songType === "premium") {
            premiumSongs.push(songTitle);
        } else if (songType === "free") {
            freeSongs.push(songTitle);
        } else {
            console.log("Invalid song format..");
        }

    }
}





// display all the songs

function ListOfpremiumsongs() {
    for (let k = 0; k < premiumsongs.length; k++)
        console.log("This is a premium song", premiumsongs[k]);
}


function ListOffreeSongs() {
    for (let j = 0; j < freeSongs.length; j++) {
        console.log("This is a free song", freeSongs[j]);
    }
}


// main function

if (adminLogin()) {
    let action = prompt("Would you like to add the songs? yes/no");
    if (action === "yes") {
        addSongsToLibrary();
    } else {
        console.log("Alright, you can add later...")
    }
}

// create a function to add users

let users = []; // add list of users to the array
let activeSubscriptions = [];
function createUserAccount() {
    let userName = String(prompt("Enter the user name.."));
    let password = String(prompt("Enter the password.."));
    let accountType = String(prompt("Selec the account type.. free or premium"));
    let makePayment = String(prompt("Have you paid the subscription payment? yes/no"));

    let user = { // for each user details, create an object and hold that information
        userName: userName, password: password, accountType: accountType === "premium" ? "premium" : "free", subscriptionStatus: makePayment === "yes" ? "active" : "expired"
    }

    // add the user to the users array

    users.push(user);
    console.log("User added successfully");

    // check the subscription status based on the payment made or not
    if (user.subscriptionStatus === "yes") {
        activeSubscriptions.push(user)
        console.log(user.userName, "has an active subscription");
    } else {
        console.log(user.userName, "Does not have active subscription");
    }
}


// create a feature to allow users to download the songs if they have
// active subscription and account is premium

let songsToDownload = [];
function downloadSong() {
    if (isAuthenticated && authenticatedUser && authenticatedUser.accountType === "premium" && authenticatedUser.subscriptionStatus === "active") {
        // now loop through all songs
        for (i = 0; i < premiumSongs[i].length; i++) {
            let songDownloadAction = String(prompt("Download this song? download/no"));
            if (songDownloadAction === "download") {
                songsToDownload[i].push(premiumSongs[i].songTitle);
                console.log(premiumSongs[i].songTitle, "song is donwloading...")
            }
            else {
                console.log(" You can not download this song");
            }
        }
    }
    else if {
        console.log("You must login to download this song");
    }
}






// users now login to their account

function userLogin() {
    let loggedInUserName = String(prompt("enter the user name"));
    let loggedInUserPassword = String(prompt("Enter the password"));


    // flag the user login as false by default
    let isAuthenticated = false;
    let authenticatedUser = null;
    // now check if these login details matches with any existing users

    for (let i = 0; i < users.length; i++) {
        if (loggedInUserName === users[i].userName && loggedInUserPassword === users[i].password) {
            console.log("Welcome to the account", users[i].userName);
            isAuthenticated = true;
            authenticatedUser = users[i];
            break;
        }
    }


    if (isAuthenticated) {
        // depends on the account status show the songs
        if (authenticatedUser.accountType === "premium") {
            ListOfpremiumsongs();
            console.log(" You have acess to all premium songs")
        } else {
            ListOffreeSongs();
            console.log(" You have access to only free songs");
        }
    }
}


/*

Favorite Songs Feature

Allow users to add songs to a “Favorites” list.
Only premium users should be able to add premium songs to their favorites.*/

function addToFavourite() {
    if (isAuthenticated && authenticatedUser.accountType === "premium") {
        // initialize a fav array for currently authenticated user
        authenticatedUser.favorites = authenticatedUser.favorites || [];
        // show all premium songs
        ListOfpremiumsongs(); // show all premium songs to the authenitcated user

        // loop through all the premuim songs, check if the selected song is
        // not already authenticated user fav list. If not then? then add it to the list
        for (i = 0; i < premiumSongs[i].length; i++); {
            let heartSymbolPress = String(prompt("Would you like to add this song", premiumSongs[i], "to your fav list? yes/no"));
            if (heartSymbolPress === "yes") {
                if (!authenticatedUser.favorites.includes(premiumSongs[i])) {
                    authenticatedUser.favorites.push(premiumSongs[i]);
                    console.log("Song", premiumSongs[i], "added to your fav list");
                } else {
                    console.log("The song is already in your fav list ", premiumSongs[i]);
                }
            }

        }
    }
    else {
        console.log("Only premium users can add the songs to fav list");
    }
}


// create a feature where the users can download the songs
// users must be premium users
// users subscription must be active








// recently played songs

let recentlyPlayed = [];

function addrecentlyPlayed() {
    if (isAuthenticated && authenticatedUser) {
        authenticatedUser = users[i]; // for each logged in user
        let playedSong = false;
        for (let i = 0; i < allSongs.length; i++) {
            let playOrNot = String(prompt("Would you like to play this song?" + allSongs[i] + " type yes/no "));
            if (playOrNot === "yes") {
                authenticatedUser.push(recentlyPlayed);
                playedSong = true;

            }
        }

    }
}


// allow users to download the songs

let downloadList = [];
function downloadSong() {
    authenticatedUser = false;
    if (!userLogin()) {
        console.log("Please login to download the song..");
        return;
    }
    else {
        console.log("Choose the songs you want to download...");
        authenticatedUser = true;
        for (i = 0; i < allSongs.length; i++) {
            let downloadAction = String(prompt("Do you want to download? yes/no"));
            if (downloadAction === "yes") {
                // check if the selected song is is not already the download list of the logged in user
                if (!authenticatedUser.downloadList.includes(allSongs[i])) {
                    authenticatedUser.downloadList.push(allSongs[i]);
                    console.log("The song has been downloaded", allSongs[i]);
                } else {
                    console.log("The song has already in your downloaded list", allSongs[i]);
                }
            }
            else if (downloadAction === "no") {
                console.log("No song is selected to download");
            }

        }

        if (downloadList > 0) {
            console.log("All downloaded songs", downloadList[]);
        }
        else {
            console.log("No songs were downloaded...");
        }
    }
}




// allow the admin to add music genres

let musicGenres = [];
function addMusicGenres() {
    isAdminAuthticated = false;
    if (adminLogin()) {
        console.log("You can add music genres")

        for (i = 0; i < 100; i++) {
            let genreInput = String(prompt("Enter the genre name or say exit to close"));
            if (genreInput === "exit") {
                console.log("closed");
                break;
            }
            if (genreInput.trim() !== "") {
                musicGenres.push(genreInput);
                console.log("Genre added", genreInput.trim());
            }
            else {
                console.log("Please enter a valid genre name");
            }

        }
    }
    else {
        console.log("You don't have the permission to add genres");
    }
}



// based on the user selction play the songs from that genre 
// Rock , jazz, Blues, Indie Rock, Punk Rock, Funk,
// default = Pop music




// play the song based on user selected genre

function musicSearchGenre() {
    authenticatedUser = false;
    // make sure the user is logged in before search
    if (!userLogin()) {
        console.log("Please login to search for music");
        return;
    }
    if (userLogin()) {
        authenticatedUser = true;
        let musicSearched = String(prompt("What type of music you want to listen").toLocaleLowerCase());

        // use the switch condition to find which genre user has selected
        switch (musicSearched) {
            case "Rock":
                console.log("search music in songs/rock/all");
                break;
            case "jazz":
                console.log("search music in songs/jazz/all");
                break;
            case "Punk Rock":
                console.log("Search music in songs/punkrock/all");
                break;
            case "indie rock":
                console.log("search music in songs/indierock/all");
                break;
            default:
                console.log("search music in songs/popmusic/all");
        }

    }
}

function playSong() {
    // do something
}

function addToUserPlayList() {
    // do something
}


// write logic for user to choose between songs/podcasts/audiobooks/

