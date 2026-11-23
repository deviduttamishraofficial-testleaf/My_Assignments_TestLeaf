// Assignment Details: Home Assignment - 1

// Write a JavaScript program to find the total sum of all numbers present in an array.

// Assignment Requirements:
// 1. Create an array with numeric values
// 2. Declare a variable to store the sum
// 3. Use a loop to iterate through the array
// 4. Add each element to the sum variable
// 5. Print the final sum

// Hints to Solve:
// Use a loop such as for loop to traverse the array and accumulate the values in a variable


function totalSumOfNumInArr() // Function to find total sum of Num in an array
{
    let arr = [10,20,30]; // Array is created with numeric values

    let sum = 0; // Declared a variable to store the sum

    for(let i =0;i<arr.length;i++) // Used a loop to interate the array
    {
        sum += arr[i]; // Added each element to the sum variable
    }

    console.log(`Sum of the numeric values in the array is ---> ${sum}`);
    
}

totalSumOfNumInArr();