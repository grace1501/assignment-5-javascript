// ALAB 308.5.1: Creating Reusable Functions

// Part 1: Thinking Functionally
console.log('Part 1: Thinking Functionally')

function arrSum (numArr) {
    let totalSum = 0;
    for (let i = 0; i < numArr.length; i++) {
        totalSum += numArr[i];
    }
    return totalSum;
}

console.log(arrSum([1,2,3,4]))

function arrAverage(numArr) {
    let totalSum = 0;
    for (let i = 0; i < numArr.length; i++) {
        totalSum += numArr[i];
    }
    return totalSum/(numArr.length);
}

console.log(arrAverage([1,2,3,2]))

function findLongest(strArr) {
    let longestStr = strArr[0];
    for (let i = 1; i<strArr.length; i++) {
        if (strArr[i].length > longestStr.length) {
            longestStr = strArr[i];
        }
    }
    return longestStr;
}

console.log(findLongest(['Hello', 'World', 'chocolate']))

function stringsLongerThan(strArr, num) {
    let resultArr = [];
    for (let i=0 ; i < strArr.length; i++) {
        if (strArr[i].length > num) {
            resultArr.push(strArr[i]);
        }
    }
    return resultArr;
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

// Part 2: Thinking Methodically
console.log('Part 2: Thinking Methodically')

const testArr = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


// USING BUILT-IN ARRAY METHOD
console.log('Sort the array by age: ')
testArr.sort((a,b) => a.age - b.age);
console.log(testArr);

console.log('Filter the array to remove entries with an age greater than 50.')
let filteredArr = testArr.filter((a) => a.age <= 50);
console.log(filteredArr);

// Map the array to change the “occupation” key to “job” and increment every age by 1.


// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.


// 