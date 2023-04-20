//String

let str: string = "Saurav Kumar";
console.log(str);

//Number

let n: number = 24;
console.log(n);

//boolean

let flag: boolean = true;
console.log(flag);

//union operator

let age: number | string = 23;
age = "23";
age = "Twenty Three years";

//string literal

let Name: "Saurav Kumar" = "Saurav Kumar";
Name = "Saurav Kumar";
/*
Name="saurav kumar"
it  will be throw You an error
*/

//string literal with union operator(|)

let gender: "male" | "female" = "male";
gender = "female";
gender = "male";

/*
gender="Female"
gender="Male"
We can't write like this,it will throw an error
*/

/* any:-->
  1. Bad Developer use this method.
  2. universal solution for everything.
*/

//Array

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

//Object

let user: {
  id: number;
  name: string;
  age: number;
} = {
  id: 1,
  name: "Saurav",
  age: 24,
};

//Array of users

//first way to write this

let arrayOfUsers: Array<{ id: number; name: string; age: number }> = [
  {
    id: 1,
    name: "Saurav",
    age: 24,
  },
  {
    id: 2,
    name: "Garima",
    age: 21,
  },
  {
    id: 3,
    name: "Gaurav",
    age: 15,
  },
];

let usersCollection: { id: number; name: string; age: number }[] = [
  {
    id: 1,
    name: "Saurav",
    age: 24,
  },
  {
    id: 2,
    name: "Garima",
    age: 21,
  },
  {
    id: 3,
    name: "Gaurav",
    age: 15,
  },
];

//second way to get write this

/*
type User = { id: number; name: string; age: number };

let arrayOfUsers: Array<User> = [
  {
    id: 1,
    name: "Saurav",
    age: 24,
  },
  {
    id: 2,
    name: "Garima",
    age: 21,
  },
  {
    id: 3,
    name: "Gaurav",
    age: 15,
  },
];

let usersCollection: User[] = [
  {
    id: 1,
    name: "Saurav",
    age: 24,
  },
  {
    id: 2,
    name: "Garima",
    age: 21,
  },
  {
    id: 3,
    name: "Gaurav",
    age: 15,
  },
];
*/

// ? for optional

type user = {
  id: number;
  name: string;
  age?: number;
};

const iAmUser: user = {
  id: 1,
  name: "Saurav",
};
const IAmUser: user = {
  id: 1,
  name: "Saurav",
  age: 24,
};
//This thing won't be throw any error.
