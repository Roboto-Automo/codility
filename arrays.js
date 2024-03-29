//rotation of array
function solution(A, K) {
  let array = A;
  let popValue;

  if (array.length === 0) {
    return [];
  }

  for (let i = 0; i < K; i++) {
    popValue = array.pop(); //removes last element in array and returns it and stores in variable
    array.unshift(popValue); // adds the removed element to the beginning of the array
  }
  return array;
}

//Finding the unpaired element in an array
// SOLUTION 1

function solution(A) {
  let unpaired = 0;

  for (let i = 0; i < A.length; i++) {
    unpaired ^= A[i];
  }
  return unpaired;
}

//SOLUTION 2
function solution(A) {
  // Implement your solution here

  A.sort();

  // Iterate through the sorted array in steps of 2
  for (let i = 0; i < A.length; i += 2) {
    // Check if the current element and the next one are different
    if (A[i] !== A[i + 1]) {
      // If they are different, the current element is unpaired
      return A[i];
    }
  }
}

function Filter(array) {
  newArray = [];

  newArray = array.filter((element, index, array) => element === index);

  return newArray;
}

console.log(Filter([0, 2, 3, 3, 5, 1, 1, 8, 9, 9]));

//things to remember!!!

//array.pop() removes the last element in an array and returns it
//array.push() adds an element to the end of an array
//array.shift() removes the first element in an array and returns it
//array.unshift() adds an element to the beginning of an array
//array.slice() takes the arguments of the starting index and the ending index and returns a new array with the elements in between the two indexes - including the starting index and excluding the ending index
//array.splice() takes the arguments of the starting index, the number of elements to remove, and the elements to add and returns a new array with the elements removed and the new elements added eg array.splice(2, 0, "a", "b") will add "a" and "b" to the array at index 2


//you can iterate over an object using the for in loop
//you can check if an object has a property using the hasOwnProperty method

function solutionObject(A) {

let unpairedValue;
let array = A;
let object1 = {};

object1 = array.reduce((acc, curr)=>{
acc[curr] = (acc[curr] || 0) + 1;
  return acc;
},{})
 
for (let key in object1) {
  if (object1[key] % 2 !== 0) {
   unpairedValue = key;
  }
}

console.log(unpairedValue);
return unpairedValue;
}

solutionObject( [9, 3, 9, 3, 9, 7, 9])