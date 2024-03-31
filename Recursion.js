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
        console.log(combo, "current value",arr[i],"loop index", i, "current start",start);
        // console.log(mainCombsArray);
    }
  }

  innerFunction([], 0);
  return mainCombsArray;
}

console.log(combinations([1, 2, 3], 2));
