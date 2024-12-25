

// write a program where users can write, edit and create multiple versions 
// of a Google document( a.k.a cloud document)
// users should be able to go back and revert to their old versions if needed


let userName = "PK";
const GoogleAccount = "pk123@gmail.com";
const GoogleAccountId = "sdfdg34345435";
let documentFilename = { fileName: "Research Paper on Human Psychology", version: 0 };


// allow the user to add contents to the file

let fileContentV0 = {
    content: ` Hello this is the research paper
where you can study the details of human behavior`, version: 0
};



// allow the user to update the content
// using immutable variables, keep track of the old content as well
let newfileContentV1 = {
    ...fileContentV0, content: `Hello this is the research paper
where you can study the details of human behavior. I am going to explain both
human behavior and cognitive bahavior in this..`, version: 1
};


console.log(newfileContentV1.content);


let newfileContentV2 = {
    ...newfileContentV1, content: `Hello this is the research paper
where you can study the details of human behavior. I am going to explain both
human behavior and cognitive bahavior in this.. First let us start with the
human behvaior.`, version: 2
};

console.log(newfileContentV2.content);


let newfileContentV3 = {
    ...newfileContentV2, content: `Hello this is the research paper
where you can study the details of human behavior. I am going to explain both
human behavior and cognitive bahavior in this.. First let us start with the
human behvaior. Then we can talk about cognitive behavior`, version: 3
};

console.log(newfileContentV3.content);

let versionHistory = [];

// Adding versions to the history
versionHistory.push(fileContentV0);
versionHistory.push(newfileContentV1);
versionHistory.push(newfileContentV2);
versionHistory.push(newfileContentV3);

console.log(versionHistory);



function showVersionHistory(history) {
    history.forEach((version) => {
        console.log(`Version ${version.version}: ${version.content}`);
    });
}

showVersionHistory(versionHistory);
