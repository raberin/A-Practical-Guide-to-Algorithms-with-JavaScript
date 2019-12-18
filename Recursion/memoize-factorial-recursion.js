const memoize = cb => {
  let cache = {};
  return (...args) => {
    let n = args[0]; //set variable for first argument
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating Result", n);
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

//factorial(5) = 5 * 4 * 3 * 2 * 1
const factorial = n => {
  //Base Case
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

/*
What factorial(5) is doing under the
return 5 * factorial(4) ​​​
      V         ^
return 4 * factorial(3) 
      V         ^
return 3 * factorial(2) ​​​​​
      V         ^
return 2 * factorial(1) 
      V
                ^
return 1 => Goes back up recursion from here
*/
let memoFactorial = memoize(factorial);
console.log(factorial(5)); // 120
console.log(memoFactorial(5)); //Calculated 120
console.log(memoFactorial(6)); //Calculted 720
console.log(memoFactorial(6)); //Fetching from cache 720
