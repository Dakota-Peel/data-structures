var Queue = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.first = -1;
  someInstance.last = -1;

  _.extend(someInstance,queueMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.last++;
  this.storage[this.last]=value;
  this.count++;
};

queueMethods.dequeue = function(){
  this.first++;
  this.count--;
  return this.storage[this.first];
  delete this.storage[this.first];
};

queueMethods.size=function(){
  return this.count > 0 ? this.count : 0;
};

