// console.log("Jim");
// console.info("Hagger");
// console.warn("Leighton Buzzard");
// console.error("Sagatarius");

// let myCar = "BMW";
// let model = "M5";
// console.log("my favourite car is" + myCar +", my favourite model is"+model);

// console.log("This is the first level");
// console.group("First group");
// console.log("In the first group");
// console.group("Second group");
// console.log("In the second group");
// console.group("In the third group");
// console.error("shhh its a secret");
// console.groupEnd();
// console.warn("Still in the second group");
// console.groupEnd();
// console.log("Back to the first group");
// console.groupEnd();
// console.debug("Back to the outer level");

// let a = Array();
// let b = Array(10);
// let c = Array("Jim", "Bob", "Harry");
// let d = Array["Jim", "Bob", "Harry"];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let puppies = 0;
// let notEnoughPups = true;

// while (notEnoughPups) {
//   console.log("Another pup");
//   puppies++;

//   if (puppies > 238) {
//     notEnoughPups = false;
//   }
// }
// console.log("Oh so many puppies!");


// // Destructuring 
// let myArray = [1,2,3,4,5];
// let [a,b,c,d,e] = myArray;
// console.log(a);
// console.log(c,d);

// const myArray2 = [1,2,3,4,5,6,7,8,9];
// const [a,b,...rest];
// console.log(rest); // 3,4,5,6,7,8,9


// const person = {
//   first: 'Chris',
//   last: 'Perrins',
//   country: 'UK',
//   city: 'Manchester',
// };
// let {first, last} = person;
// console.log( `My name is ${first} ${last}`);
// //output: My name is Chris Perrins

//Back ticks are essential!
const myArr = [1,2,3,4,5];
console.log(myArr[0]);

let a = "Vinesh";

console.log(`This is my array the first value is ${myArr[0]} and the second value is ${myArr[4]} and my name is ${a}`);
//variables within a function cannot be called outside of the function
function someFunction() {
  let hello = "Billy Bob Joe";
}
someFunction();
console.log(hello);
// variables outside the function are global and can be accessed form anywhere
let check = false;

function changeCheck() {
  check = true;
}
changeCheck();
console.log(check); // True

function test() {
  flag = true;
  alert(flag);
  test1();
  alert(flag);
}
function test1() {
  flag = false;
  return;
}
//First we invoke test();^^^^
// We declare a variable called flag and set the value to true - it doesn't contain the keyword let/const therefore we assume it is a global variable
// Alert the value of flag --> true
// Invoke and drop into test1();
// Update the value of flag to false - again it has global scope
// Return to previous position in test();
// Alert the value of flag --> false.


