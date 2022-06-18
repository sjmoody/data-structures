var BinarySearchTree = function(value) {
  // properties left and right
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};


var bstMethods = {};

bstMethods.insert = function(value) {
  // create new tree with value
  var newTree = new BinarySearchTree(value);

  // if parent left and right are null, then place based on where value compares to parent
  if(this.right === null && value > this.value){
    // right is null and value greater so set right as value
    this.right = newTree;
  } else if (this.left === null && value < this.value) {
    // left is null and value is less than data so place there
    this.left = newTree;
  } else if (!!this.left && value < this.value) { // value is less than this.data, but left is not empty, so run insert on left
    this.left.insert(value); //
  } else if (!!this.right && value > this.value) { // value is more than this.data, but right is not empty, so run insert on right
    this.right.insert(value);
  }
};


bstMethods.contains = function(value) {
  if (this.value === null) {
    return false
  }

  if(this.value === value) {
    return true;
  } else if (value < this.value) {
    if (this.left === null){
      return false;
    }
    return this.left.contains(value);
  } else {
    if (this.right === null){
      return false;
    }
    return this.right.contains(value);
  }
};


bstMethods.depthFirstLog = function(cb) {
// if this.left recurse on left
// if this.right recurse on right
  cb(this.value);

  // run recursion if the left is not null
  if(!!this.left){this.left.depthFirstLog(cb);}
  if(!!this.right){this.right.depthFirstLog(cb);}
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Insert: O(logn)
 * contains: O(logn)
 * depthFirstLog: O(n)
 */
