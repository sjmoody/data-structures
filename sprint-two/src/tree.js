/** A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.
 * */

// Write in functional with shared methods style
var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  // children is an array containing a number of subtrees
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

//  .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  var newNode = new Tree(value);
  this.children.push(newNode);
};

// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  // recursively search through tree to find target
  if(this.value === target) {
    return true;
  }
  for(ch of this.children) {
    if(ch.contains(target)) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * A: addChild is O(1), and contains is O(n)
 */
