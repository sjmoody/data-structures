var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToTail = function(value) {
    var newNode = new Node(value);  // create new node, which contains val and next
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  };

  list.removeHead = function() {
    if(this.head === null) {
      return this.head;
    }
    var oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
<<<<<<< HEAD
    // take care if target === tail value
    if(this.tail.value === target){
=======
    if (this.tail.value === target) {
>>>>>>> be6f55e8c7eb53844fa520906529388f83b5921f
      return true;
    }
    // create new pointer
    var cur = this.head;

<<<<<<< HEAD
    // iterate through from head to pre-tail node
    while(cur.next !== null) {
      if(cur.value === target) {
=======
    // iterate from head to tail
    while (cur.next !== null) {
      if (cur.value === target) {
>>>>>>> be6f55e8c7eb53844fa520906529388f83b5921f
        return true;
      }
      cur = cur.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */