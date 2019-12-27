// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.
const makeChange = (coins, amount) => {
  let sorted = coins.sort((a, b) => b - a); //Sorted greatest to smallest
  let coinTotal = 0;
  let i = 0;

  while (amount > 0) {
    if (sorted[i] <= amount) {
      amount -= sorted[i];
      coinTotal++;
      i++;
    } else {
      i++;
    }
  }
  return coinTotal;
};

console.log(makeChange([5, 10, 25], 40)); // 3
console.log(makeChange([5, 10, 25], 35)); // 2
console.log(makeChange([5, 10, 25], 25)); // 1

// coin values: 5, 10, 25

// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10)
