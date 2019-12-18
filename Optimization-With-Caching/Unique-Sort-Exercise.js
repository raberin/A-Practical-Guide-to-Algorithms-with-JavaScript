//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

//Caching/Breadcrumbs
//TRADEOFF - Increases space complexity due to object and array

//MINE - Extra operations no bueno
const uniqSort = function(arr) {
  const breadcrumbs = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (breadcrumbs[arr[i]]) {
      continue;
    } else {
      breadcrumbs[arr[i]] = 1;
      result.push(arr[i]);
    }
  }

  return result.sort((a, b) => a - b);
};

//Bianca's - setting loop 1 index ahead, result arr containing 1st element
const uniqSort = function(arr) {
  const breadcrumbs = {};
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    //start loop at 1 as element 0 can never be a duplicate
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] = 1;
    }
  }

  return result.sort((a, b) => a - b);
};

uniqSort([4, 2, 2, 3, 2, 2, 2]); // => [2,3,4]
