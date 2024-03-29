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

function solution(A) {
  let unpaired = 0;
  for (let i = 0; i < A.length; i++) {
    unpaired ^= A[i];
  }
  return unpaired;
}

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
