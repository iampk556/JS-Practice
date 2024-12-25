// Arrays Practice

var artistsList = [];
var artistsAge = [];
var addMore = "yes";

// Loop to collect artist names
while (addMore.toLowerCase() === "yes") {
    var artistName = prompt("What is the name of the artist?");
    var artistAge = prompt(`What is the age of the artist ${artistName}`);
    if (!artistName) {
        console.log("Artist name is required");
        continue; // Skip this iteration if no name is entere
    }

    if (!artistAge) {
        console.log("Artist age is required");
        continue;
    }

    artistsList.push(artistName); // Add artist to the array
    artistsAge.push(artistAge);

    addMore = prompt("Would you like to add more? yes/no"); // Ask if user wants to add more
}

// Display all artist names
artistsList.forEach((artist, index) => {
    console.log(`Artist ${index + 1}: ${artist} : ${artistAge}`);
});
