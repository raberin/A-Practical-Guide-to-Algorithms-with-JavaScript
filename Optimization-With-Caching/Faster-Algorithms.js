//A O(n^2) function that determines if every elemnt in arr is unique
const isUnique = arr => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~~ OUTER LOOP ~~~~~ i === ${i}`);
    for (let j = 0; j < arr.length; j++) {
      console.log(`~~~~~ INNER LOOP ~~~~~ j === ${j}`);
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  return result;
};

console.log(isUnique([1, 2, 3, 3, 4]));
//console.log(isUnique([1,2,3]))

//Breadcrumbs/Caching method - O(n)
//A method that keeps track of things already seen (Stores seen values in obj)
const isUnique = arr => {
  const breadcrumbs = {};
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~~ LOOP ~~~~~ i === ${i}`);
    if (breadcrumbs[arr[i]]) {
      //if current element is in obj, return false
      result = false;
    } else {
      //Otherwise save in obj
      breadcrumbs[arr[i]] = true;
    }
  }
  return result;
};
