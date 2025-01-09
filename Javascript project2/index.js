// ** String Manipulation Function

// Reverse String
function reverseString(str) {
    return str.split('').reverse().join('');
}
const reversed = "Today is a good day";
console.log(reverseString(reversed));

// Count Characters
function countCharacters(char) {
    return char.length;
}
const characters = "Hello Everyone I am beginning to love Software Development";
console.log(countCharacters(characters));

// Capitalize Words 
function capitalizeWords(cap) {
    return cap.toUpperCase();
}
const capital = "let see how it goes turning this to uppercase";
console.log(capitalizeWords(capital));


// ** Array Functions

//Find Maximum and Minimum 
function maxMin(arr) {
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);

    return {
        max: maxValue,
        min: minValue
    };
}
let minmaxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result =(maxMin(minmaxArray));

console.log("Maximum Value:", result.max);
console.log("Minimum Value:", result.min);

//Sum of Array
function sumArray(x, y) {
    return x + y;
}
const sumNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumNumber.reduce(sumArray));

//Filter Array
function filterArray(age) {
    return age >= 18;
}
const ages = [2,10, 15, 12, 20, 18, 17, 25, 25];
console.log(ages.filter(filterArray))

// ** Mathematical function

// Factorial
function factorialRecursive(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(27))

// Prime Number Check
function isPrime(number) {
  
    // Loop from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      } else {
        return true;
      }
    }
}
console.log(isPrime(7));

// Fibonacci Sequence
function fibonacciSequence(numTerms) {
    // Initialize the sequence with the first two terms
    const sequence = [0, 1];
  
    // Iterate to generate the remaining terms
    for (let i = 2; i < numTerms; i++) {
      const nextTerm = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextTerm);
    }
  
    return sequence;
}
console.log(fibonacciSequence(8))