//**** Constant Time Operation O(1) ****//
const arr = [1, 2, 3];

arr.pop(); // => [1,2]  //O(1) time due to always deleting same spot
arr[0]; // O(1) always retrieves at the same spot doesnt have to loop

const obj = { a: 1 };
obj.a; // => 1 // O(1) constant time since doesnt need to search

//Math is constant O(1)

//**** Linear Time Operation O(n) ****//

arr.unshift() && arr.shift(); // => [2,3] //O(n) since it has to move each element over to the left

//**** Logarithmic Time Operation O(logn) ****//
//As the data set increases, time complexity increass at a fraction OFTEN better than O(n) depending on dataset size
