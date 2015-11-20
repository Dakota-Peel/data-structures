var BinarySearchTree = function (value) {
  this.value = value;
};

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(value);
    } else {
      return this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(value);
    } else {
      return this.left.insert(value);
    }
  } 
};

BinarySearchTree.prototype.contains = function (value) {
  var result = false;
  if (this.value === value) {
    result = true;
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  }
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  if (this.value) {
    cb(this.value);
  }
  if (this.left) {
    return this.left.depthFirstLog(cb);
  }
  if (this.right) {
    return this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
