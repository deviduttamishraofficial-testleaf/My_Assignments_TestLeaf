// Assignment Details:  Home Assignment - 1

// Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
// number is odd and `"Even"` if the number is even. 
 
// Assignment Requirements:  
// 1. Create a function named `isOddOrEven` that takes a number as a parameter   
// 2. Declare and initialize the variable   
// 3. Use a conditional statement to check if the number is divisible by 2  
// 4. Call the function and print the result 


// 1. Using if-else condition:

function isOddOrEvenUsingIfElse() // Function is created
{
    let value = 20; // Declared & initialized the varibale

        if(value%2==0)
        {
            console.log(`Number divisible by 2 ---> ${value} is even`);
        }

        else
        {
            console.log(`Number divisible by 2 ---> ${value} is odd`);
        }

}

isOddOrEvenUsingIfElse();

// 2. Using switch condition:

function isOddOrEvenUsingSwitch()
{
    let val= 20 ;

    switch(val%2)
    {
       case 0 : console.log("Even using Switch Condition");
       break;

       case 1 : console.log("Odd using Switch Condition");
       break;

       default: console.log("Not a number using switch condition");
       
    }
    
}

isOddOrEvenUsingSwitch();