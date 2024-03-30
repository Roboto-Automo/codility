
function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }
  function isLetter(char) {
    return /[a-zA-Z]/.test(char);
  }
  
  function longestStringElement(array) {
      return array.reduce((longest, current) => 
      current.length > longest.length ? current : longest, "");
  }
  
  function solution(S) {
  let longestLength = -1
  let newArray =[]
  let array = S.split(" ")
  let letterCount = 0;
  let totalCount = 0;
  let alphanumeric = true;
  
  for (let i = 0; i < array.length;i++){
       letterCount = 0;
        totalCount = 0;
        alphanumeric = true;
  for(let j = 0; j < array[i].length;j++){
      totalCount++
  if(!isAlphanumeric(array[i][j])){
  alphanumeric = false;
  }
  if(isLetter(array[i][j])){
      letterCount++
  }
  }
  if (letterCount % 2 === 0 && totalCount % 2 === 1 && alphanumeric === true){
      newArray.push(array[i])
  }
  
  }
  
  if(newArray.length !== 0){
  longestLength = longestStringElement(newArray).length
  
  return longestLength
  }else {return longestLength}
  
  }

  //things to remember
  //when resetting variables in a loop, make sure to place them at the beginning of the loop
