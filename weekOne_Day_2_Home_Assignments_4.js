// Assignment Details:  Home Assignment - 4

// Given a string s consisting of words and spaces, return the length of the last 
// word in the string. 

// Example 1: 
// Input: s = "Hello World" 
// Output: 5 
// Explanation: The last word is "World" with length 5. 

let s ="Hello World";
lastWord = s.split(" ");
console.log(lastWord[1].length);

// Example 2:  
// Input: s = "   fly me   to   the moon  " 
// Output: 4 
// Explanation: The last word is "moon" with length 4. 

let s1= "   fly me   to   the moon  "
lastWord1=s1.split(" ");
for(let i=0;i<lastWord1.length;i++)
{
    if(lastWord1[i]=="moon")
        console.log(lastWord1[i].length);
        
}

// Example 3:  
// Write a function to check if two strings are anagrams. 
//  Input: isAnagram('listen', 'silent') 
//  Output: true 
//  Input: isAnagram('hello', 'world')  
//  Output: false 
//  Explanation: An anagram is when you mix up the letters of a word to make a new one,
//  using all the letters. 

function isAnagram(str1,str2)
{ 
    let firstWord = str1.toLowerCase().split("").sort().join("");
    let secondWord = str2.toLowerCase().split("").sort().join("");
    
    if(firstWord==secondWord)
        console.log("Strings are anagram");
    else
        console.log("Strings are not anagram");
}

isAnagram("listen","silent");