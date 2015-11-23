var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
  }
  this._storage[index].push([k, v]);
  this._count++;

  if (this._count >= this._limit * 0.75){
    this.resize(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  _.each(this._storage[index], function(tuple){
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  _.each(this._storage[index], function(tuple, loc, storage) {
    if (tuple[0] === k) {
      storage.splice(loc, 1);
      this._count--;
    }
  });

  if(this._count <= this._limit * 0.25){
    this.resize(this._limit / 2);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



HashTable.prototype.resize = function(newLimit){
  var tempStorage = this._storage;
  newLimit= Math.max(newLimit,8);
  if(this._limit === newLimit){return;}
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;

  tempStorage.each(function(bucket){
    if(!bucket){return;}

    for (var i = 0; i < bucket.length; i++){
      this.insert(tuple[0],tuple[1]);
    }
  }.bind(this));

};
