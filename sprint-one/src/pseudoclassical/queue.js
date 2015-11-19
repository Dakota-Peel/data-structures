var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.first = -1;
  this.last = -1;
};

Queue.prototype.enqueue = function(value) {
  this.last++;
  this.storage[this.last] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  this.first++;
  this.count--;
  return this.storage[this.first];
  delete this.storage[this.first];
};

Queue.prototype.size = function() {
  return this.count > 0 ? this.count : 0;
}