var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var last = -1;
  var first = -1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    last++;
    storage[last] = value;
    count++;
  };

  someInstance.dequeue = function() {
    first++;
    count--;
    return storage[first];
    delete storage[first];
  };

  someInstance.size = function() {
    return count > 0 ? count : 0;
  };

  return someInstance;
};
