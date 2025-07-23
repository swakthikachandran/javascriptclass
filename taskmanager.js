
let tasks = [];

// Callback function that prints all tasks
const printTasks = () => {
  console.log("📋 Current Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
};


//  Function to add a single task and call a callback
function addTask(task, callback) {
  tasks.push(task);
  console.log(`Task Added: ${task}`);
  callback(); 
}

//  Arbitrary arguments - Add multiple tasks at once
function addMultipleTasks(...taskList) {
  taskList.forEach(task => {
    tasks.push(task);
    console.log(` Added: ${task}`);
  });
  console.log(" All tasks added.");
}


//  Function to display each task with delay (using setInterval & callback)
function displayTasksWithInterval(callback) {
  let index = 0;
  console.log(" Displaying tasks one by one every 1 second:");

  const intervalId = setInterval(() => {
    if (index < tasks.length) {
      console.log(` Task ${index + 1}: ${tasks[index]}`);
      index++;
    } else {
      clearInterval(intervalId);
      callback();  
    }
  }, 1000);
}

//  Recursively print tasks 1 to 5 (like countInterval)
let count = 0;
let repeatTask = () => {
  count++;
  console.log(` Recursion Task Count: ${count}`);
  if (count < 5) {
    repeatTask();
  }
};

// Variable Scope Example
let globalVar = "Global Task Manager";

function showScope() {
  let localVar = " Local to showScope";
  console.log("Inside Function Scope:");
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible
}
showScope();


addTask("Buy Groceries", printTasks);

addMultipleTasks("Do Laundry", "Read Notes", "Call Aakash");

displayTasksWithInterval(() => {
  console.log(" Done displaying all tasks!");
});

repeatTask(); 
