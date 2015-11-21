
var DoubLL = function () {
  this.head = null;
  this.tail = null;
  
};

DoubLL.prototype.addHead = function (val) {

};

DoubLL.prototype.removeHead = function() {
  var temp = this.head.value;
  this.head = this.head.next;
  return temp;
};

DoubLL.prototype.addTail = function (val) {
  if (this.head === null) {
    this.head = Node(val);
    this.tail = this.head;
    this.tail.previous = null;
  }else{
    var temp = this.tail;
    this.tail.next = Node(val);
    this.tail.next.previous = temp;
    this.tail = this.tail.next;
  }
};

DoubLL.prototype.removeTail = function () {

};

DoubLL.prototype.contains = function (target) {
  var result = false;
  for(var key = this.head; key; key = key.next){
    if(target=== key.value){
      result = true;
    }
  }
return result;
};

var Node = function(value){
  var node = {}

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
}