//function

/**
 *
 * @param arr array of number
 * @param index number
 * @returns number
 */
const getAtIndex = (arr: Array<number>, index: number): number => {
  return arr[index];
};

let array: number[] = [1, 2, 3, 4, 5];
console.log(getAtIndex(array, 0));
console.log(getAtIndex(array, 2));

// Void

/*
If You do not return a value behalf of return you are doing console logging then you can use void.

const getAtIndex = (arr: Array<number>, index: number): void => {
 console.log(arr[index]);
};

*/
