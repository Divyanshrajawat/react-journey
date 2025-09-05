// Example: checking if a process is running

let isRunning = false; // variable to track the state

// Function to start the process
function startProcess() {
  if (!isRunning) {
    isRunning = true; // update state
    console.log("Process started...");
  } else {
    console.log("Process is already running.");
  }
}

// Function to stop the process
function stopProcess() {
  if (isRunning) {
    isRunning = false; // update state
    console.log("Process stopped.");
  } else {
    console.log("Process is not running.");
  }
}

// Function to check the current status
function checkStatus() {
  if (isRunning) {
    console.log("✅ The process is running.");
  } else {
    console.log("❌ The process is not running.");
  }
}

// Example usage
startProcess();   // starts the process
checkStatus();    // shows status
stopProcess();    // stops it
checkStatus();    // shows status again
