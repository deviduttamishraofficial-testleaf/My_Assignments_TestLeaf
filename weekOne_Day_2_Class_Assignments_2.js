// Classroom Activity 2:

// Write JS code to reverse the string (Testleaf)

// Using For-Loop : 

let str = "TestLeaf"; // Value is initialized

function reverseString() // Added a function
{
    for(let i = str.length-1;i>=0;i--) // Used For-Loop to retrieve from reverse
    {
        console.log(str.charAt(i)); // Printed the value of the reversed index
        
    }
}

reverseString(); // Called the function