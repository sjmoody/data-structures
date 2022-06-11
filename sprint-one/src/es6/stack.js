class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.next = 0;
  }

  push(value) {
    let next = this.next;
    this.storage[next] = value;
    this.next++;

  }

  pop() {
    let next = this.next;
    if (next > 0) {
      var last = next -1;
      var result = this.storage[last];
      delete this.storage[last];
      this.next--;
      return result;
    }
  }

  size() {
    return this.next;
  }

}