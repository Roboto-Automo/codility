//leetcode 27. Remove Element

//this is a handy algorithm to remove elements in place from an array as the loop runs

var removeElement = function(nums, val) {

    let k = 0 // keeps track of the number of elements not equal to val, doesn't increment if element is equal to val

       for (let i = nums.length-1; i >=0; i--) {
            if (nums[i] === val) {
                nums.splice(i,1,"insertion") //removes the element at index i
            }else {
                k++
            }
        }
       
     console.log(k);
    return nums;
};

console.log(removeElement([3,2,2,3,7,5],3)) 

//THINGS TO REMEMBER

//count backwards when removing elements in place from an array

