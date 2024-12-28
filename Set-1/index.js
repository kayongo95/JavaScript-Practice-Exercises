// Area of a rectangle
let width = 5;
let height = 10;
let areaOfRectangle = width * height;
console.log(areaOfRectangle); // 50

// operator *=
let num = 5;
num *= 5;
console.log(num); // 25

// checking two variables have the same value and type
let a = 5;
let b = 5;
console.log(a === b); // true

// checking if 10 is greater than or equal to 5
let c = 10;
let d = 5;
console.log(c >= d); // true

// concatenate two strings
let firstWord = 'Hello'
let secondWord = 'World'
console.log(firstWord + ' ' + secondWord); // Hello World

// Extracting a word from a sentence using slice notation
let sentence = 'Coding is fun';
let word = sentence.slice(9);
console.log(word); // fun

// checking if a number is positive, negative or zero
let number = 10;
if (number > 0) {
    console.log('The number is positive');
} else if (number < 0) {
    console.log('The number is negative');
} else {
    console.log('The number is zero');
}

// using a ternary operator to check if a number is odd or even
let myNum = 20;
let result = myNum % 2 === 0 ? 'even' : 'odd';
console.log(result); // even