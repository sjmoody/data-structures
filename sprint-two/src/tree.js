/** A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.
 * */

// Write in functional with shared methods style
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods); // style to extend
  // your code here
  // children is an array containing a number of subtrees
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

//  .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {

};

// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  // recursively search through tree to find target
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
