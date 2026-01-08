// Function to calculate tax

function calculateTax(amount){
    let taxValue = amount * 0.1
    return taxValue
}

// Function to convert words to uppercase

function convertToUpperCase(text){
    return text.toUpperCase();
}

//function to find maximum between two numbers

function findMaximum(num1, num2){
    let maximum;
    if(num1 > num2){
        maximum = num1;
    } else if(num1 < num2){
        maximum = num2;
    }
    else if(num1 = num2){
        maximum = num1;
    }
    return maximum;
}

// function to check if word is a palindrome

function isPalindrome(word){
    for(let i = 0; i < word.length / 2; i++){
        if (word[i] !== word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}

// function to calculate discounted price

function calculateDiscountedPrice(originalPrice, discountPercentage){
    let amountDiscounted = originalPrice * (discountPercentage / 100)
    let finalAmount = originalPrice - amountDiscounted
    return finalAmount
}

console.log(calculateDiscountedPrice(100, 20));


    
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };