const numbers = [1, 2, 3, 4, 5];

// Example 1: Summing all elements
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example 2: Finding the maximum value
const max = numbers.reduce((accumulator, currentValue) =>
  Math.max(accumulator, currentValue)
);
console.log(max); // Output: 5 (the maximum value in the array)

// Example 3: Flattening an array of arrays
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

const array = ["apple", "banana", "apple", "orange", "banana"];

const occurrenceCount = array.reduce((acc, current) => {
  acc[current] = (acc[current] || 0) + 1;
  return acc;
}, {});

console.log(occurrenceCount, "occurrenceCount"); // Output: { apple: 2, banana: 2, orange: 1 }

let arrW = ["piss", "piss", "piss", "shit", "willy", "willy"];
let arr2 = {};
let balls = [];

arr2 = arrW.reduce((acc, current) => {
  acc[current] = (acc[current] || 0) + 1;
  return acc;
}, {});

for (key in arr2) {
  if (arr2[key] > 1) {
    balls.push(`${key} ${arr2[key]}`);
  }
}
//need to use bracket syntax to identify key values here where the value of key is changeable/dynamic
console.log(balls);

let obj = { specialkey: "value1", balls: "value2" };

console.log(obj["special-key"]); // Outputs: value1
console.log(obj.balls);
