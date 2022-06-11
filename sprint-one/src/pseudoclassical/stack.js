var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.next = 0;


};

Stack.prototype.push = function(value) {
  let next = this.next;
  this.storage[next] = value;
  this.next++;

};
Stack.prototype.pop = function() {
  let next = this.next;
  if (next > 0) {
    var last = next - 1;
    var result = this.storage[last];
    delete this.storage[last];
    this.next--;
    return result;
  }

};
Stack.prototype.size = function() {
  return this.next;

};



