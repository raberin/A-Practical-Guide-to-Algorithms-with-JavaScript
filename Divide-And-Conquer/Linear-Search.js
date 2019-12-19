//Linear Search - Search for a value in an array by checking each value in order

// TASK: Implement linear search.
// Time Complexity - O(n)
//Solution 1 - Returns the index of the first time it sees element
function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
}
//Solution 2 - Returns the index of the last time it sees element;
function linearSearch(list, item) {
  let index = -1;
  for (let i = 0; i < list.length; i++) {
    if (arr[i] === item) {
      index = i;
    }
  }
  return index;
}

linearSearch([2, 6, 7, 90, 103], 90);
