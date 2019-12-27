const binarySearch = (nums, item) => {
  let minIndex = 0;
  let maxIndex = nums.length - 1;
  let guess;
  let counter = 0;

  while (minIndex <= maxIndex) {
    // Go to center and compare if the guessed number is greater or less than
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    guess = nums[currentIndex];
    counter++;
    if (guess === item) {
      console.log(
        `It took binarySearch ${counter} iterations while linearSearch took ${currentIndex} iterations`
      );
      return currentIndex;
    } else {
      if (guess < item) {
        //Any numbers left of currentIndex is not the number set minIndex to current
        minIndex = currentIndex;
      } else {
        //Any numbers right of currentIndex is not the number set maxIndex to current
        maxIndex = currentIndex;
      }
    }
  }
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
// It took binarySearch 2 iterations while linearSearch took 6 iterations
