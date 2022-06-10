var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {};
  var front = -1;
  var rear = -1;
  var queue = {storage: storage, front: front, rear: rear};
  _.extend(queue, queueMethods);

  // Functions: enqueue, dequeue, size
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
  // if front == -1 increment front
    if (this.front === -1) {
      this.front++;
    }
    // always increment rear and then place value at rear
    this.rear++;
    var pointer = this.rear;
    this.storage[pointer] = value;
  },

  dequeue: function() {
    // get the value from the front

    var pointer = this.front;
    let result = this.storage[pointer];
    // delete value from storage
    delete this.storage[pointer];
    // increment front

    // return value
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front++;
    }

    return result;
  },


  size: function() {
    if (this.rear === -1 || this.front === -1) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }
};


