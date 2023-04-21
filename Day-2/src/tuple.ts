/*
tuple: when you know that how many elements exactly you have in an array
*/

// Array with exact 2 elements
let a: [string, string] = ["Hi", "Bye"];

// 2 D array
let arr: Array<[number, number]> = [
  [1, 1],
  [2, 2],
];

let arr2: Array<[number, number]> = [
  [1, 1], //okay
  [2, 2], //okay
  //   [2, 2, 3], error
];
