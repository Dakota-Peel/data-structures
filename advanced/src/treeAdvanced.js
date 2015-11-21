var TreeAdv = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(TreeAdv(value));
  this.children[this.children.length - 1].parent = this;
};

treeMethods.contains = function(target) {
  var result = false;
  var helper = function(node){
    if (node.value === target) {
      result = true;
    } else {
      _.each(node.children, function(item){
        helper(item);
      });
    }
  }
  helper(this);
  return result;
};

treeMethods.removeFromParent = function () {
  // this.parent.children = null;
  var index = this.parent.children.indexOf(this);
  var temp = this.parent.children[index];
  this.parent.children.splice(index, 1);
  return temp.value;
};

treeMethods.traverse = function(cb){
  if(this.value){
    cb(this.value);
  }
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
