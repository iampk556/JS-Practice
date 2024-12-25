
// create a todo app
// ask the user to create a todo
// mark as complete
// show the status of all tasks


let appName = "My Todo app";
let tasksCount = 0;
const maxTasks = 5;


let taskDescription1, taskDescription2, taskDescription3, taskDescription4, taskDescription5;
let isTaskComplete1, isTaskComplete2, isTaskComplete3, isTaskComplete4, isTaskComplete5;

// add new task and increase the count

for (tasksCount = 1; tasksCount <= maxTasks; tasksCount++) {
    let description = prompt("Whats the task description for: " + tasksCount + " ");

    if (tasksCount === 1) {
        taskDescription1 = description;
        isTaskComplete1 = false;
    } else if (tasksCount === 2) {
        taskDescription2 = description;
        isTaskComplete2 = false;
    } else if (tasksCount === 3) {
        taskDescription3 = description;
        isTaskComplete3 = false;
    }

    console.log("Task  " + tasksCount + " Added");
}

// update the tasks status

for (tasksCount = 1; tasksCount <= maxTasks; tasksCount++) {
    let status = prompt("What is the status of " + tasksCount + " ");
    if (tasksCount === 1 && status === "yes") {
        isTaskComplete1 = true
    } else if (tasksCount === 1 && status === "no") {
        isTaskComplete1 = false;
    }
    if (status === "yes") console.log("Task " + tasksCount + " is  completed");
    if (status === "no") console.log("Task " + tasksCount + " is  Not completed");

}

