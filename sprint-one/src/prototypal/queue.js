var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.first = -1;
  someInstance.last = -1;

  return someInstance;
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