//codility frog jump problem

//quick solution Detected time complexity:O(1) this is constant time complexity as the same calculation is done each time regardless of the distance

function solutionfrog1(X, Y, D) {
    // Implement your solution here

let distance = Y - X;
let count = 0;

count = Math.ceil(distance/D)

return count;

}


//slow solution Detected time complexity:O(Y-X) linear time compexity dependent on the distance
//the greater the number the longer the while loop will need to run

function solutionfrog2(X, Y, D) {
    // Implement your solution here

let distance = Y - X;
let count = 0
let distanceJumped = 0

while(distanceJumped < distance){
    count++
    distanceJumped += D;
}

return count;

}




function solution(A) {
    // Implement your solution here

let newArray = [];

newArray = A.sort((a, b) => a - b);

for(let i = 0; i < newArray.length; i++){
if(newArray[i] + 1 !== newArray[i+1])
return newArray[i] + 1;

}

}



// Detected time complexity:O(N) or O(N * log(N)) linear time complexity as the loop will run N times where N is the length of the array
function solution2(A) {
 
     const N = A.length;
    let totalSum = (N + 1) * (N + 2) / 2;
    let arraySum = A.reduce((acc, val) => acc + val, 0);
    return totalSum - arraySum;
}

console.log(solution2([0, 1, 3, 5, 6, 7])); 

//Tape splitting problem Detected time complexity:Detected time complexity: )O(N) linear time complexity as the loop will run N times where N is the length of the array

function solutionTape(A) {
    // Implement your solution here
  
    const N = A.length;
    
    // Calculate total sum
    let totalSum = A.reduce((acc, val) => acc + val, 0);
    
    let leftSum = A[0];
    let rightSum = totalSum - leftSum;
    let minDiff = Math.abs(leftSum - rightSum);
    
    for (let i = 1; i < N - 1; i++) {
        leftSum += A[i];
        rightSum -= A[i];
        let diff = Math.abs(leftSum - rightSum);
        minDiff = Math.min(minDiff, diff);
    }
    
    return minDiff;
}

//THINGS TO REMEMBER 
//math.min and math.max can be used to find the minimum and maximum values in an array
//math.ceil can be used to round up a number to the nearest whole number
//math.floor can be used to round down a number to the nearest whole number
//math.round can be used to round a number to the nearest whole number
//math.abs can be used to find difference between two values when subtracting the smaller value from the bigger 
console.log(4-9);// outputs -5
console.log(Math.abs(4-9));// outputs 5value and the answer is negative but the difference is positive  

//reduce can be used to sum all the values in an array

