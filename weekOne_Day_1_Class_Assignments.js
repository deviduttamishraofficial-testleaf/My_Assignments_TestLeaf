// Assignment Details: Class Assignments-1

// Declare a global variable and shadow it inside a function using both `var` and `let` 
// to see how they behave differently when printed.

// Assignment Requirements:

// 1. Declare a const name as browserVersion (global)
// 2. Assign value as Chrome
// 3. Create a function by name getBrowserVersion
// 4. Create if condition inside function to check if browser is chrome, then
// 5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
// 6. Call that function from the javascript


const browserVersion="chrome"; // Declare const name & assigned the value

function getBrowserVersion() // Function by name getBrowserVersion is created
{
    var browserVersion = "firefox";

    if(browserVersion=="chrome") // if condition is created inside the function to check if chrome
    {
        let browserVersion="safari"; // Declared a local variable
    }

    console.log(browserVersion); // Printed the variable inside function & outside block
    
}

getBrowserVersion(); // Called the function
