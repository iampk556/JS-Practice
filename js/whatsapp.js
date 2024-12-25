
let myContacts = ["999999999", "8888888888", "7777777777"];
let whatsappUsers = ["6666666666", "5555555555"];

let msgLimit = 4;

let msgHistory = [];

function sendMessage() {
    let res = String(prompt("What would you like to do? Send/View"));
    if (res === "") {
        console.log("Please choose an action");
    } else if (res === "view") {
        console.log("Here is your contacts you can send message to:", myContacts);
    } else if (res === "send") {
        let receiverNumber = String(prompt("Enter the phone number you want to send mesg to:"));
        if (!myContacts.includes(receiverNumber)) {
            console.log("Sorry, you can not send mesg to this number");
        } else {
            while (msgLimit > 1) {
                let msg = String(prompt("What is the message you want to send?"));
                msgHistory.push(msg);
                msgLimit--;
                console.log("Message sent as:", msg);
                console.log("Messages left", msgLimit);
            }
            console.log("All the messages sent are:", msgHistory);

        }
    }

}


function increasemsgLimit() {
    sendMessage();
    while (msgLimit == 0) {
        let resLimit = String(promot("Do you want to increase the msg limit?"));
        if (resLimit === "yes") {
            msgLimit = msgLimit + 2;
        }
    }
}

increasemsgLimit();
console.log("Available msg limit is:", msgLimit);



function msgFiltering() {
    sendMessage();

    if (msgHistory.includes("fck")) {
        alert("WARNING: Don't send offensive words...")
    }

}

msgFiltering();