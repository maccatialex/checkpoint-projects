// * Decision Making (if-else and switch)

//  Leap Year checker
function leapYear(year) {
    
    if ( year % 4 === 0 && year % 100 !== 0) {
        return `${year} is a leap year`
    } else if ( year % 400 === 0) {
        reurn  `${year} is a leap year`
    } else {
        return "input isn't a year"
    }
    
}

// Ticket Pricing 
let ageInput = prompt("Enter Your Age");
let age = Number(ageInput);

switch (true) {
    case (age <= 12):
        alert("Ticket price: $10");
        break;
    case (age >= 13 && age <= 17):
        alert("Ticket price: $15");
        break;
    case (age >= 18):
        alert("Ticket price: $200");
        break;
    default: 
        alert('Enter a valid age');
}


// * Recursion

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n -1);
    }
}


// Power Function
function power(base, exponent) {
    // Base case: any number raised to the power of 0 is 1
    if (exponent === 0) {
      return 1;
    }
    
    // If the exponent is negative, handle the negative case
    if (exponent < 0) {
      return 1 / power(base, -exponent);
    }
    
    // Recursive case: multiply the base by the result of base raised to the exponent-1
    return base * power(base, exponent - 1);
}