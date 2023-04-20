/*
1.String
*/

let str: string = "Saurav Kumar";
console.log(str);

/*
2.Number
 */

let n: number = 24;
console.log(n);

/*
 boolean
 */

let flag: boolean = true;
console.log(flag);

/*
4.null
 */

let A: null = null;
A = null;
// A=2
// A="Banti" these will throw an error

/*
 5.undefined
 */

let B: undefined;
//  B="Banti" this will throw an error.

/* 
6.any:-->
  1. Bad Developer use this method.
  2. universal solution for everything.
*/

/*
7.union operator(|)
*/

let age: number | string = 23;
age = "23";
age = "Twenty Three years";

/*
 8.string literal
 */

let Name: "Saurav Kumar" = "Saurav Kumar";
Name = "Saurav Kumar";
/*
Name="saurav kumar"
it  will be throw You an error
*/

/*
 9.string literal with union operator(|)
 */

let gender: "male" | "female" = "male";
gender = "female";
gender = "male";

/*
gender="Female"
gender="Male"
We can't write like this,it will throw an error
*/
