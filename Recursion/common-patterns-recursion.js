//2 ways to write recursions Wrapper and Memo
function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${start} until ${end}`);

    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

/*
~~~ wrapperFnLoop ~~~
looping from 1 until 5
looping from 1 until 5
looping from 1 until 5
looping from 1 until 5
looping from 1 until 5
*/

function MemoFnLoop(i, end) {
  console.log(`looping from ${i} until ${end}`);
  if (i < end) {
    MemoFnLoop(i + 1, end);
  }
}

/*
~~~ MemoFnLoop ~~~
looping from 1 until 6
looping from 2 until 6
looping from 3 until 6
looping from 4 until 6
looping from 5 until 6
looping from 6 until 6
*/

console.log("~~~ wrapperFnLoop ~~~");
wrapperFnLoop(1, 5);
console.log("~~~ MemoFnLoop ~~~");
MemoFnLoop(1, 6);
