// protip: Use a closure to return a function that you can call later.
const times10 = n => n * 10;

const memoizedClosureTimes10 = () => {
  let cache = {};
  return n => {
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
};

const memoClosureTimes10 = memoizedClosureTimes10(); //Saves the return statement of memoizedClosureTimes10 NOT the cache obj
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
try {
  console.log("Task 3 calculated value:", memoClosureTimes10(9)); // calculated
  console.log("Task 3 cached value:", memoClosureTimes10(9)); // cached
} catch (e) {
  console.error("Task 3:", e);
}
