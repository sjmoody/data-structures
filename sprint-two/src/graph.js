// Implement a graph class, in pseudoclassical style, with the following properties:


// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var v of this.vertices) {
    if(v === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // same as contains but delete if found
  for(var i in this.vertices) {
    if(this.vertices[i] === node) {
      // delete node and return
      this.vertices.splice(i, 1);
      this.removeEdge(node, this.edges[node]);
      return;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var edge of this.edges) {
    if(edge[fromNode] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = {};
  var revEdge = {};
  edge[fromNode] = toNode;
  revEdge[toNode] = fromNode;
  this.edges.push(edge);
  this.edges.push(revEdge);
};


Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i in this.edges) {
    if(this.edges[i][fromNode] === toNode) {
      this.edges.splice(i, 1);
      break;
    }
  }
  for(var i in this.edges) {
    if(this.edges[i][toNode] === fromNode) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var v of this.vertices) {
    cb(v);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * removeNode: O(x^n)
 * forEachNode: O(n) + cb
 * removeEdge: O(n^2)
 * addEdge: O(1)
 */




