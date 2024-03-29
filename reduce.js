const numbers = [1, 2, 3, 4, 5];

// Example 1: Summing all elements
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example 2: Finding the maximum value
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log(max); // Output: 5 (the maximum value in the array)

// Example 3: Flattening an array of arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


const array = ['apple', 'banana', 'apple', 'orange', 'banana'];

const occurrenceCount = array.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
}, {});

console.log(occurrenceCount,"occurrenceCount");