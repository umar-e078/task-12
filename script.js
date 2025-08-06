//let arr = ["islamabad", "rawalpindi", "lahore"];

//arr.forEach((val, idx) => {
  //  console.log(val.toUpperCase(), idx);
//});


//for a given array of numbers, print the square of each value using for each loop

//let num = [2, 3, 4, 5];
//num.forEach((num) =>{
 //   console.log(num * num);
///});


//we are given an array of marks of students. filter out the marks of students who scored 90+

//let marks = [98, 83, 89, 93, 42, 48]
//let toppers = marks.filter((val) => {
  //  return val > 90;
//})
//console.log(toppers);


//take a number n as an input from the user. Create an array of numbers from 1 to n.
//use the reduce method to calculate sum of all numbers in the array.
//use the reduce method to calculate product of all the numbers in the array.

//let n = prompt("Enter any number: ");
//let arr = [];
//for (let i = 1; i <= n; i++ ) {
  //  arr[i - 1] = i; 
//}

//console.log(arr);

//let sum = arr.reduce((res, curr) => {
  //  return res + curr;
//})
//console.log("sum = ", sum);

//let product = arr.reduce((res, curr) => {
  //  return res * curr;
//})
//console.log("product = ", product);



//create a h2 heading element with text - "Hello JavaScript". Append "from apna collage students" to this text using js
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from apna collage students.";
