// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = n => {
  return n * 10;
};

console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
console.log("times10 returns:", times10(9));

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = n => {
  //checks if n is in cache
  if (n in cache) {
    console.log("Fetching from cache:", n);
    return cache[n];
  } else {
    console.log("Calculating Result");
    let result = times10(n); //Solve problem
    cache[n] = result; // Save Problem in cache
    return result;
  }
};

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
console.log("Task 2 calculated value:", memoTimes10(9)); // calculated
console.log(cache); // {9:90}
console.log("Task 2 cached value:", memoTimes10(9)); // cached
