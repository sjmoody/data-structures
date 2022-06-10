var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
//   Prototypal instantiation: using Object.create
// Do:
// Work within the src/protoypal/ folder.
// Use Object.create  with the object from step 2 to create instances of your class
// Don't:
// Use the keyword new
  var queue = Object.create(queueMethods);
  var storage = {};
  var front = -1;
  var rear = -1;
  queue.storage = storage;
  queue.front = front;
  queue.rear = rear;

  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  if (this.front === -1 ) {
    this.front++;
  }

  this.rear++;
  let pointer = this.rear;
  this.storage[pointer] = value;


};

queueMethods.dequeue = function() {
  var pointer = this.front;
  var result = this.storage[pointer];
  delete this.storage[pointer];

  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.front++;
  }
  return result;


};
queueMethods.size = function() {
  if (this.rear === -1 || this.front === -1) {
    return 0;
  } else {
    return this.rear - this.front + 1;
  }
};



