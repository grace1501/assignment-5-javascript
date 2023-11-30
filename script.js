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