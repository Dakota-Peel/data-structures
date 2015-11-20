

// ------------------------
// Instantiate a new graph
var Graph = function() {
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {node:node};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  for (var key in this) {
    if (this[key].node === node){
      result = true;
    }
  }
  return result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].edge === toNode) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edge = toNode;
  this[toNode].edge = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this[fromNode].edge === toNode){
    delete this[fromNode].edge;
  }
  if (this[toNode].edge === fromNode){
    delete this[toNode].edge;
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function(item) {
    cb(item.node);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


