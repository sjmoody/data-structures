//A set class, in prototypal style, with the following properties:
// set only handles string values until advanced section


var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // An .add() method, takes any string and adds it to the set
  if(!this.contains(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  //A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  // A .remove() method, takes any string and removes it from the set, if present
  if(this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(1)
 * remove: O(1)
 */
