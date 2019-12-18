//What is the Time Complexity
var countChars = str => {
  var count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
};

countChars("dance"); // 5
countChars("walk"); // 4

//This is O(n) due to looping only once

var countChars = str => {
  return str.length;
};

//.length just a property lookup so its O(1) it keeps a count of how many items it has and increments and decrements accordingly

var myList = ["hell", "hola"];
myList.push("bonjour"); // O(1)Constant time since it just add into end off array
myList.unshift(); // O(n) Linear time since we remove first, then shift every element over to left
myList.shift();
