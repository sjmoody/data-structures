class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = -1;
    this.rear = -1;

  }



  enqueue(value) {
    if (this.front === -1) {
      this.front++;
    }

    this.rear++;
    let pointer = this.rear;
    this.storage[pointer] = value;

  }

  dequeue() {
    var pointer = this.front;
    var result = this.storage[pointer];
    delete this.storage[pointer];

    if(this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front++;
    }
    return result;
  }

  size() {
    if (this.rear === -1 || this.front === -1) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

}
