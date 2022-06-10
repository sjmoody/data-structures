// For a stack, you can assume the item in position 0 can't move unless every other item has moved. Therefore you can set key for an added item as equal to the equivalent index in an array.
var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var next = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // because push is called on someInstance, I expect I can use th is, but constraint on using 'th is'
    // But I need to track the count. I'll start by tracking the last one in storage.
    someInstance[next] = value;
    next++;
    // if (next === 0) {
    //   someInstance[next] = value;
    //   next++;
    // } else {
    //   someInstance[next] = value;
    //   next++;
    // }


  };

  someInstance.pop = function() {
    // if stack is empty do nothing
    if (next > 0) {
      // if stack is not empty,

      next--;
      storage[next] = someInstance[next];
      delete someInstance[next];
      // decrement next
      return storage[next];
    }


    // then use new next as key to delete

  };

  someInstance.size = function() {
    return next;

  };

  return someInstance;
};
