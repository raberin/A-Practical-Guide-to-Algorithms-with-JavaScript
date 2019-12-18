// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, "");
}

const joinElementsItr = (arr, joinString) => {
  let results = "";
  for (let i = 0; i < arr.length - 1; i++) {
    //Iterate and add all strings + joinString in arr EXCEPT LAST 1
    console.log(i);
    results += arr[i] + joinString;
  }
  return results + arr[arr.length - 1]; //return results + last string in arr
};

console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));
console.log(joinElementsItr(["s", "cr", "t cod", " :) :)"], "e"));
