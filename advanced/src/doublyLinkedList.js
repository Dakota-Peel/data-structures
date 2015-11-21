alert('hi')
var DoubLL = function () {
  this.head = null;
  this.tail = null;
  this.value = null;
};

DoubLL.prototype.addHead = function (val) {

};

DoubLL.prototype.removeHead = function() {
  // body...
};

DoubLL.prototype.addTail = function (val) {
  if (this.head === null) {
    this.head = val;
  }
  this.tail=val;
};

DoubLL.prototype.removeTail = function () {

};

DoubLL.prototype.contains = function (val) {

};