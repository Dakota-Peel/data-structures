var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count]=value;
    count++;
  };

  someInstance.pop = function() {
    count--;
    return storage[count];
    delete storage[count];
  };

  someInstance.size = function() {
    return count > 0 ? count : 0;
  };

  return someInstance;
};
