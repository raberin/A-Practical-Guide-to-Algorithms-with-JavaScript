/* Merge Sort
Step 1: Divide input arr into 'n' single element subarrays
Step 2: Repeatedly merge subarrays using mergeSort


Psuedo: Merge Routine (LAST STEP of mergeSort)
merge(L,R)
[3,27] and [9,10]
1. compare the first index of the left arr to the first index of the right arr
2. push the lower value to result arr
3. shift the arr with lower value
4. repeat until both arrays are empty
*/

const mergeSubArrays = (left, right) => {
  let result = [];
  leftIndex = 0;
  rightIndex = 0;
  while (result.length < left.length + right.length) {
    if (left[leftIndex] < right[rightIndex] || rightIndex === right.length) {
      result.push(left[leftIndex]); //Pushes most left num in left arr to result
      leftIndex++;
    } else {
      result.push(right[rightIndex]); //Pushes most left num in right arr to result
      rightIndex++;
    }
  }
  return result;
};

console.log(mergeSubArrays([1, 5, 9], [2, 6, 10])); // [ 5, 5, 10, 20, 20, 99, 100 ]

const mergeSort = list => {
  //Base case the arr must have length of 1
  if (list.length < 2) {
    return list;
  }

  //Split Array in half
  let halfWay = Math.floor(list.length / 2);
  let leftHalf = list.slice(0, halfWay);
  let rightHalf = list.slice(halfWay, list.length);

  let leftSorted = mergeSort(leftHalf);
  let rightSorted = mergeSort(rightHalf);

  return mergeSubArrays(leftSorted, rightSorted);
};

console.log(mergeSort([5, 10, 100, 99, 20, 5, 20])); // [ 5, 5, 10, 20, 20, 99, 100 ]
