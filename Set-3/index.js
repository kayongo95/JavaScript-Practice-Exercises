// counting how many times a letter is repeated in a string
// input: "JavaScript is amazing!"
function numRepeat() {
    let sentence = "JavaScript is amazing!";
    let count = {};
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence.charAt(i);
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}
console.log(numRepeat());

// A function sumArray 
// Takes an array of two numbers
// Returns the sum of those two numbers
function sumArray(arr) {
    return arr[0] + arr[1];
}
console.log(sumArray([20, 30])); // 50

// A loop
// log all key-value pairs of an object
// input: { a: 1, b: 2, c: 3 }
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}

// check if number 5 exists in an array
// using includes() method
// input: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(5)); // true

// A function findMax()
// Returns the largest number from an array of numbers
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([10, 20, 30, 40])); // 40

// Combining two arrays [1, 2,] and [3, 4]
// using concat() method
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4]

// A function reverseString()
// Takes a string as an argument
// Returns the reverse of the string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello World!")); // !dlroW olleH

// A function checkNumber()
// It takes a number and an array
// checks if a number exists
// returns 'found' or 'not found'
function checkNumber(num, arr) {
    if (arr.includes(num)) {
        return 'found';
    } else {
        return 'not found';
    }
}
console.log(checkNumber(5, [1, 2, 3, 4, 5])); // found
console.log(checkNumber(10, [1, 2, 3, 4, 5])); // not found

// A function numOfVowels()
// Takes a string as an argument
// Returns the number of vowels in the string
function numOfVowels(str) {
    let count = 0;
    let vowels = 'aeiou';
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(numOfVowels('JavaScript is amazing!')); // 7
console.log(numOfVowels('Kayongo Nicholas')); // 6

// Checking if two arrays are equal(with the same elements in the same order)
// A function findMinMax() takes an array of numbers 
// Returns an object with the smallest(minimum) and largest(maximum) values
function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}
console.log(findMinMax([10, 20, 30, 40])); // { min: 10, max: 40 }


// A filter for all numbers greater than 10 in an array
// Returns the result
function filterNumbers(arr) {
    return arr.filter(num => num > 10);
}
console.log(filterNumbers([0, 5, 10, 15, 20, 25])); // [15, 20 ,25]

// A function palindrome()
// Takes a string as a parameter
// Checks if its a palindrome
// Takes an object and swaps its key-value pairs
function palindrome(str) {
   let arr = ['racer', 'madam', 'kayak', 'food', 'car'];
    return arr.includes(str.split('').reverse().join(''));
}
console.log(palindrome('food')); // false
console.log(palindrome('madam')); // true

// A function multiplyNumbers()
// Takes an array of numbers and multiplies them together
// Calculates the frequency of each character in a string 
// Returns the result as an object
function multiplyNumbers(arr) {
    return arr.reduce((a, b) => a * b);
}
console.log(multiplyNumbers('hello')); // { h: 1, e: 1, l: 2, o: 1 }

// A function removeDuplicates()
// Takes an array as an argument
// Removes duplicates from the array
// Returns the result
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// A function capitalizeFirstLetters()
// Takes a string as an argument
// Capitalizes the first letter of each word in the string
// Returns the result
function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetters('hello world!')); // Hello World!





// let myName = 'Kayongo Nicholas';
// console.log(myName);
// console.log(myName.split(''));
// console.log(myName.split('').reverse());
// console.log(myName.split('').reverse().join(''));
