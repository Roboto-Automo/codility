function StringReverse(str){

    let reversed = "";
for (let i = str.length-1; i >= 0; i--) {
    reversed += str[i]
}
return reversed;
}

console.log(StringReverse("Hello World!"));

function StringReverse2(str){

for (let i = str.length-1; i >= 0; i--) {
    reversed += str[i]

}
return reversed;

}


function ReverseString(inputString) {
    let stringArray = inputString.split("");
    
    for (let i = 0; i < stringArray.length / 2; i++) {
      let temp = stringArray[i];
      stringArray[i] = stringArray[stringArray.length - 1 - i];
      stringArray[stringArray.length - 1 - i] = temp;
    }
    return stringArray.join(""); // Convert the array back to a string
  }
  console.log(ReverseString("wanker"));



  function reverseStringQuick(str) {
    return str.split('').reverse().join('');
}

  // THINGS TO REMEMBER
  // strings are immutable!!! you cannot alter a string directly
  // quickest way to reverse a string is to create a new variable and iterate backwards through the string and concatenate the characters into the new variable
  // alternatively you can turn the string into an array then loop half the length of the array, and switch the current index with the character mirrored opposite
  //Quickest most optimal way to reverse is the split("").reverse().join("") method.
  