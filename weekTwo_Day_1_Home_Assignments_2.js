// Assignment Steps:  Home Assignment - 2

// 1. Declare a global variable browser and assign it the value "Chrome".  
// o Example: let browser = "Chrome";  
// 2. Create a function named checkBrowserVersion that accepts a callback function as an 
// argument:  
// o Use setTimeout to simulate a delay (like waiting for data from a server).  
// o After the delay (2 seconds), invoke the callback function and pass the browser value to it.  
// 3. Write a callback function that logs the browser version to the console when invoked.  
// 4. Call checkBrowserVersion and pass the callback function to it. o The callback should print the 
// browser version after the 2-second delay.  
  
// Expected Outcome:  
//    After running the code, you should see the following message printed after 2 seconds:  
// Browser version using callback: Chrome  
// Learners should understand:  
// o  A callback is a function passed into another function to be executed later. o 
//  How asynchronous operations like setTimeout can be handled using callbacks.  

let browser = "chrome"; // Declared global variable

function checkBrowserVersion (cbf) // Function that accepts callback as argument
{
    console.log("waiting for data from a server..."); // Printing the delay message
    setTimeout(cbf,2000); // Simulated a delay
}

function browserVersion(version) // Callback function
{
    version=browser;
    console.log(`Browser version using callback: ${version}`);
}

checkBrowserVersion(browserVersion);



