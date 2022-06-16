//A set class, in prototypal style, with the following properties:
// set only handles string values until advanced section


var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // An .add() method, takes any string and adds it to the set

};

setPrototype.contains = function(item) {
  //A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
};

setPrototype.remove = function(item) {
  // A .remove() method, takes any string and removes it from the set, if present
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
