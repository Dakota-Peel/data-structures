var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value));  // fix me
};

treeMethods.contains = function(target) {
  var result = false;
  var helper = function(parent){
    if (parent.value === target) {
      result = true;
    } else {
      _.each(parent.children, function(item){
        helper(item);
      });
    }
  }
  helper(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
