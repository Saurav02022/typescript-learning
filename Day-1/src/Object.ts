/*
 Object
 */

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
