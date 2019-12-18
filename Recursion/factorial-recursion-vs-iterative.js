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
console.log(memoFactorial(5));
console.log(memoFactorial(6));
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

const factorialItr = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; //Multiply result with i until i <= n
  }
  return result;
};

/*
result = 1 * 2 (2) ​​​​​
        V
result = 2 * 3 (6) 
        V
result = 6 * 4 (24) ​​​​​
        V
result = 24 * 5 (120) 
*/

console.log(factorialItr(5)); //120
