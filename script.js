// ALAB 308.5.1: Creating Reusable Functions

// Part 1: Thinking Functionally

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

