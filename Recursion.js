function combinations(arr, k) {
  let mainCombsArray = [];

  // the inner function initially takes in an empty array and a 0 starting point
  function innerFunction(combo, start) {
    //[], 0

    //this will only push the combo array to mainCombsArray once its length has reach the k value
    if (combo.length === k) {
      mainCombsArray.push(combo);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      innerFunction(combo.concat(arr[i]), i + 1);
      console.log(
        combo,
        "current value",
        arr[i],
        "loop index",
        i,
        "current start",
        start
      );
      // console.log(mainCombsArray);
    }
  }

  innerFunction([], 0);
  return mainCombsArray;
}

console.log(combinations([1, 2, 3], 2));

function getDiff(startNum, endNum) {
  // Base case: if the difference between endNum and startNum is 2,
  // return an array containing the number between them.
  if (endNum - startNum === 2) {
    return [startNum + 1];
  } else {
    // Recursive case: generate the range between startNum and endNum - 1,
    // then push the current endNum - 1 to the array.
    let list = getDiff(startNum, endNum - 1);
    list.push(endNum - 1);
    return list;
  }
}

console.log(getDiff(1, 9), "simple recursion");

//THINGS TO REMEMBER
//recursive functions need a base case and a recursive case
//recursive functions should be able to return a value