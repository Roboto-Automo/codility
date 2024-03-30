//codility frog jump problem

//quick solution Detected time complexity:O(1) this is constant time complexity as the same calculation is done each time regardless of the distance

function solution(X, Y, D) {
    // Implement your solution here

let distance = Y - X;
let count = 0;

count = Math.ceil(distance/D)

return count;

}


//slow solution Detected time complexity:O(Y-X) linear time compexity dependent on the distance
//the greater the number the longer the while loop will need to run

function solution(X, Y, D) {
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