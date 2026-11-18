// Assignment Details:  Home Assignment - 5

// Create a JavaScript function that accepts a string, reverses it, 
// and checks if the reversed string is a 
// palindrome, then test your function with various strings and print the results. 
 
// Assignment Requirements:  
// Write a function to reverse the string. 
// 1. Convert the input into characters 
// 2. Loop them in reverse direction 
// 3. Concatenate the string 
// 4. Print the new string 

function reverseString(str1)
{
    for(let i=str1.length-1;i>=0;i--)
    {
        console.log(str1.charAt(i));
        
    }
}

reverseString("ived")

// Write a function to check the given string is a palindrome 
// [If the given string and reverse string are the same, it is a palindrome] 
// 1. Check if the reverse string and original string are the same 
//  2. Return true if same, else the false. 

function isPalindrome(str2)
{

    let str3 = str2.split("");
    let str4="";

    for(let i=str3.length-1;i>=0;i--)
    {
        str4+=str3[i];
    }

    if(str4===str2)
        console.log("Palindrome");
    else
        console.log("Not a Palindrome");
    
}

isPalindrome("mam");

 
// Hints to Solve:  
// 1. Split string into characters using `split("")`. 
// 2. Iterate backward through characters to build reversed string. 
// 3. Use strict equality to compare original and reversed strings for palindrome check.