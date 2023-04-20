//String
let str = "Saurav Kumar";
console.log(str);
//Number
let n = 24;
console.log(n);
//boolean
let flag = true;
console.log(flag);
//union operator
let age = 23;
age = "23";
age = "Twenty Three years";
//string literal
let Name = "Saurav Kumar";
Name = "Saurav Kumar";
/*
Name="saurav kumar"
it  will be throw You an error
*/
//string literal with union operator(|)
let gender = "male";
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
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = ["a", "b", "c", "d", "e", "f"];
let arr4 = ["a", "b", "c", "d", "e", "f"];
let arr5 = ["a", "b", "c", 2, 5, false];
let arr6 = ["a", "b", "c", "d", "e", "f"];
//arr6.pop() this line will throw an error
/*
1.readonly we use for only when we don't want to modify anything.mean we don't want to run any operations on the array like push pop and etc...
2. readonly we can't use with constructor functions (Array).
*/
//Object
let user = {
    id: 1,
    name: "Saurav",
    age: 24,
};
//Array of users
//first way to write this
let arrayOfUsers = [
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
let usersCollection = [
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
const iAmUser = {
    id: 1,
    name: "Saurav",
};
const IAmUser = {
    id: 1,
    name: "Saurav",
    age: 24,
};
//This thing won't be throw any error.
