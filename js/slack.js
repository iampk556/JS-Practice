// build a messaging system for slack


const appName = "Slack";


function createSlackAccount(companyName, url, teamSize) {
    console.log("Slack account is created for", companyName);

}

let companyName = String(prompt("What is your company name?"));
let url = String(prompt("Please enter a desired slack urls... abc-slack.com"));
let teamSize = Number(prompt("Enter your team size"));


console.log(createSlackAccount(companyName, url, teamSize));


function createChannel(channelId, channelName) {
    console.log("...")

}

let channelId = String(prompt("Enter channel id"));
let channelName = String(prompt("Enter the channel name"));

console.log(createChannel(`channel name is`, channelName));

