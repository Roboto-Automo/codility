//simple pyramid pattern

for (let i = 0; i < 10; i++) {
  let line = "";
  let spaces = "";

  for (let k = 0; k < 10 - i - 1; k++) {
    spaces += " ";
  }
  for (let j = 0; j <= i; j++) {
    line += "*";
  }
  console.log(spaces + line + line + spaces);
}


//binary gap finder

function solution(N) {
    // Implement your solution here
let binRep = N.toString(2);

let gap = 0;
let maxGap = 0;
let start = false;

for (let i = 0; i < binRep.length; i++){
if (binRep[i] == 1 ){
    start = true
if (start === true && gap > maxGap){
    maxGap = gap;
}
gap = 0

}else if(start === true && binRep[i] == 0){
    gap++;
    if(binRep[i]===1){
        start === false
    }
}
}
return maxGap;
}

//counting the number of asterisks in a string 

function CountingAsterisksGap(input){

let count = 0
let maxCount = 0
let start = false

for (let i = 0; i < input.length; i++){
    if (input[i] === '*'){
        start = true
        count++
        if (start === true && count > maxCount){
            maxCount = count
        }
        
    }else if (input[i] !== '*'){
        start = false
        count = 0
    }
}

return console.log(maxCount);
}

CountingAsterisksGap("1*****1**1***t******T")