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
function solution(A) {
 
     const N = A.length;
    let totalSum = (N + 1) * (N + 2) / 2;
    let arraySum = A.reduce((acc, val) => acc + val, 0);
    return totalSum - arraySum;
}

console.log(solution2([0, 1, 3, 5, 6, 7])); 