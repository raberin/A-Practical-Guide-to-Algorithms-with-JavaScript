const loopNTimes = n => {
  console.log("n ===", n); //n === 3 => n === 2 => n === 1

  if (n <= 1) {
    return "complete";
  }
  return loopNTimes(n - 1);
};

loopNTimes(3); // loopNTimes(2), loopNTimes(1) === 'complete'
