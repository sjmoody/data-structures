var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.front = -1;
  this.rear = -1;
};

Queue.prototype.enqueue = function(value) {
  if (this.front === -1) {
    this.front++;
  }

  this.rear++;
  let pointer = this.rear;
  this.storage[pointer] = value;

};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  if (this.rear === -1 || this.front === -1) {
    return 0;
  } else {
    return this.rear - this.front + 1;
  }
};


