// A function greet()
// takes name as argument
// returns a string "Hello name"
function greet(name){
    return `Hello, ${name}!`
}
console.log(greet('Kayongo Nicholas')) // Hello, Kayongo Nicholas!

// A function add()
// takes two arguments
// returns the sum of two numbers
function add(a, b){
    return a + b
}
console.log(add(1, 2)) // 3

// A function isEven()
// checks if the number is even
// returns true if even
function isEven(num){
    return num % 2 === 0
}
console.log(isEven(40)) // true

// A for loop
// prints numbers from 1 to 10
for(let i = 1; i <= 10; i++){
    console.log(i)
}

// A while loop 
// prints first 5 multiples of 3
let j = 1
while(j <= 5){
    console.log(j * 3)
    j++
}

// A for loop
// factorial of a number n
let n = 5
let factorial = 1
for(let i = 1; i <= n; i++){
    factorial *= i
}
console.log(factorial) // 120