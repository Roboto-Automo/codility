//rotation of array
function solution(A, K) {
  

    let array = A;
    let popValue;

if (array.length === 0){
    return [];
}

for(let i = 0; i < K;i++){
popValue= array.pop() //removes last element in array and returns it and stores in variable
array.unshift(popValue)// adds the removed element to the beginning of the array
}
return array;

}