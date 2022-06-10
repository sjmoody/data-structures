var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
//   Prototypal instantiation: using Object.create
// Do:
// Work within the src/protoypal/ folder.
// Use Object.create  with the object from step 2 to create instances of your class
// Don't:
// Use the keyword new
  var stack = Object.create(stackMethods);
  var storage = {};
  var next = 0;
  stack.storage = storage;
  stack.next = next;

  return stack;

};

stackMethods = {};

stackMethods.size = function() {
  return this.next;
};
stackMethods.push = function(value) {
  let next = this.next;
  this.storage[next] = value;
  this.next++;

};
stackMethods.pop = function() {
  let next = this.next;
  if (next > 0) {
    var last = next - 1;
    var result = this.storage[last];
    delete this.storage[last];
    this.next--;
    return result;
  }

};


