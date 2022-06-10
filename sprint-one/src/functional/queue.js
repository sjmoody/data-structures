var Queue = function() {
  // First strategy to try:
  // Pointers for front and rear, initially set to -1
  // Use positive integers for position
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = -1;
  var rear = -1;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    //if queue is empty, add first item
    if (front === -1) {
      front = 0;
    }
    // in every case, increment rear and place value at position rear
    rear++;
    someInstance[rear] = value;
  };

  someInstance.dequeue = function() {
    // store front value
    let result = someInstance[front];
    delete someInstance[front];
    // if pointers match same position then reset to -1
    if (front === rear) {
      front = -1;
      rear = -1;
    } else {
      front++;
    }
    // return value at front, delete item from object, and move front pointer


    return result;


  };

  someInstance.size = function() {
    if (rear === -1 || front === -1) {
      return 0;
    } else {
      return rear - front + 1;
    }

  };

  return someInstance;
};
