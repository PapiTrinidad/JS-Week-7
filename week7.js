//  1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages)
let zeroSubtractFromSeven = ages[ages.length-1] - ages[0];
console.log(ages)
console.log(zeroSubtractFromSeven);
ages.push(55);
let oneSubtractFromEight = ages[ages.length - 1] - ages[0];
console.log(oneSubtractFromEight)

let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
const average = sum / ages.length;
console.log(average);

//  2) Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];  // use .stringOf() to concatenate or string I can't rememeber.
for (let i = 0; i < names.length; i++) {
    let sumOfLetters = 0;
    sumOfLetters += names[i].length;
    const averageNumberOfLetter = sumOfLetters / names.length;
   
};

function concatString (string) {
    let stringConcat = "";
    for(let i = 0; i < 1; i++) {
        stringConcat += names.join(" ");
    }
    return stringConcat;
}
console.log(concatString(names));

//  3) How do you access the last element of any array?

let lastElement = [1, 2, 3, 4];
console.log(lastElement[lastElement.length - 1]);
console.log(lastElement[2]);// simplest way to access it

//  4) How do you access the first element of any array?

let y = [9, 8, 7, 6];
console.log(y[0]);


/*  5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length 
of each name to the nameLengths array.*/
// For example:

  let nameLength = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [];             // create a new array

for (let i = 0; i < nameLength.length; i++) {
     nameLengths.push(nameLength[i].length);
    // return nameLengths;
}
console.log(nameLength);



//  6) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumOfNameLengths = 0 
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}
console.log(sumOfNameLengths);

/*  7) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'). */
function wordWithTwoParams(word, n) {
    let answer = "";
    for(let i = 0; i < n; i++){
        answer += word    
    }
    return answer;
}
console.log(wordWithTwoParams('Hello', 3));

/*  8) Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first 
and the last name separated by a space.*/

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Kevin", "Trinidad"));


//  9) Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function trueOrFalseArray(arrayOfNumbers) {
        let sumOfArray = 0
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        sumOfArray += arrayOfNumbers[i]; 
        if (sumOfArray > 100) {
            return true;
        }
    }
}


function arrayAverage(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum/array.length;
}
let array1 = [2, 3, 4];
let array2 = [3, 4, 5];

if(arrayAverage(array1) > arrayAverage(array2)){
    console.log('Array 1 average was greater')
} else {
    console.log('Array 2 was greater')
}

console.log(trueOrFalseArray([40, 41, 42, 43]));



//  10) Write a function that takes an array of numbers and returns the average of all the elements in the array.          
function takeFromTheArray(averageArray) {
    let sumOfTakeArray = 0
    for(let i = 0; i < averageArray.length; i++) {
        sumOfTakeArray += averageArray[i];
    const takeArraySum = sumOfTakeArray / averageArray.length;
    return takeArraySum
    }
}
console.log(takeFromTheArray([5]));

/*  11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
greater than the average of the elements in the second array. */
function twoArrays(array1, array2) {
    // let sumOfFirstArray = 0;
    // let sumOfSecondArray = 0;
    // for(let i = 0; i < array1.length; i++) {
    //     sumOfFirstArray += array1[i];
    // const averageOfFirstArray = sumOfFirstArray / array1.length;
    // for(let i = 0; i < array2.length; i++) {
    //     sumOfSecondArray += array2[i];
    // const averageOfSecondArray = sumOfSecondArray / array2.length;
    // };
    let averageOfFirstArray = arrayAverage(array1);
    let averageOfSecondArray = arrayAverage(array2);

    if(averageOfFirstArray > averageOfSecondArray) {
        console.log(true)
    }
}

console.log(twoArrays([10, 20, 30], [1, 2, 3]));


/*  12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50);
    return true;
}

console.log(willBuyDrink(true, 12));



//  13) Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

/* I got an array and I need the update it. Take out the first element and insert a new one in the front and get the average
because of the change*/

let arrayAway = [1, 2, 3, 4]
arrayAway.shift();
arrayAway.unshift(5);
console.log(arrayAway);

function arrayAwayAverage(awayAverage) {
    let sumOfAway = 0;
    for(let i = 0; i < awayAverage.length; i++) {
        sumOfAway += awayAverage[i];
    const averageOfAway = sumOfAway / awayAverage.length;
    return averageOfAway
    } 
}
console.log(arrayAwayAverage(arrayAway));