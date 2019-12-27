/*
Pseudocode
1. Compares adjacent nums whichever is less either leave it or switch it
*/

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

//Naive Solution
const bubbleSort = list => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length; j++) {
      if (list[j] < list[j - 1]) {
        swap(list, array[j], array[j - 1]);
      }
    }
  }
  return list;
};

//Optimized Solution - Will short circuit out after it's sorted
function bubbleSort(nums) {
  //do - while (do loop will keep running depending on while condition)
  do {
    var swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        //Saving nums[i] in temp variable since it will be altered
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped); //while swapped === true, run again

  return nums;
}
