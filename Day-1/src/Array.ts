/*
Array
*/

let arr1: Array<number> = [1, 2, 3, 4];
let arr2: number[] = [1, 2, 3, 4];

let arr3: Array<string> = ["a", "b", "c", "d", "e", "f"];
let arr4: string[] = ["a", "b", "c", "d", "e", "f"];

let arr5: Array<string | number | boolean> = ["a", "b", "c", 2, 5, false];

let arr6: readonly string[] = ["a", "b", "c", "d", "e", "f"];
//arr6.pop() this line will throw an error
/*
1.readonly we use for only when we don't want to modify anything.mean we don't want to run any operations on the array like push pop and etc...
2. readonly we can't use with constructor functions (Array).
*/