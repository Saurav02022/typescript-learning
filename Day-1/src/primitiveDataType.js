//String
var str = "Saurav Kumar";
console.log(str);
//Number
var n = 24;
console.log(n);
//boolean
var flag = true;
console.log(flag);
//union operator
var age = 23;
age = "23";
age = "Twenty Three years";
//string literal
var Name = "Saurav Kumar";
Name = "Saurav Kumar";
/*
Name="saurav kumar"
it  will be throw You an error
*/
//string literal with union operator(|)
var gender = "male";
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
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
var arr3 = ["a", "b", "c", "d", "e", "f"];
var arr4 = ["a", "b", "c", "d", "e", "f"];
var arr5 = ["a", "b", "c", 2, 5, false];
var arr6 = ["a", "b", "c", "d", "e", "f"];
//arr6.pop() this line will throw an error
/*
1.readonly we use for only when we don't want to modify anything.mean we don't want to run any operations on the array like push pop and etc...
2. readonly we can't use with constructor functions (Array).
*/
//Object
var user = {
    id: 1,
    name: "Saurav",
    age: 24,
};
//Array of users
//first way to write this
var arrayOfUsers = [
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
var usersCollection = [
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
var iAmUser = {
    id: 1,
    name: "Saurav",
};
var IAmUser = {
    id: 1,
    name: "Saurav",
    age: 24,
};
//This thing won't be throw any error.
