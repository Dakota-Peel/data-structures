describe('doubleLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList =  new DoubLL();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property("head");
    expect(doubleLinkedList).to.have.property("tail");
  });

  it('should have methods named "addTail", "removeHead", "contains", "addHead", and "removeTail"', function() {
    expect(doubleLinkedList.addTail).to.be.a("function");
    expect(doubleLinkedList.removeHead).to.be.a("function");
    expect(doubleLinkedList.contains).to.be.a("function");
    expect(doubleLinkedList.addHead).to.be.a("function");
    expect(doubleLinkedList.removeTail).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doubleLinkedList.addTail(4);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.addTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    doubleLinkedList.addTail(4);
    doubleLinkedList.addTail(5);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doubleLinkedList.addTail(4);
    expect(doubleLinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    doubleLinkedList.addTail(4);
    doubleLinkedList.addTail(5);
    expect(doubleLinkedList.contains(4)).to.equal(true);
    expect(doubleLinkedList.contains(5)).to.equal(true);
    expect(doubleLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    doubleLinkedList.addTail(4);  
    doubleLinkedList.addTail(5);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.contains(4)).to.equal(false);
  });

  it('should contain previous nodes', function(){
    doubleLinkedList.addTail(3);
    doubleLinkedList.addTail(4);
    doubleLinkedList.addTail(5);
    expect(doubleLinkedList.head.previous).to.equal(null);
    expect(doubleLinkedList.tail.previous.value).to.equal(4);
  });

  it('should make the head\'s previous equal to null', function(){
    doubleLinkedList.addTail(3);
    doubleLinkedList.addTail(4);
    doubleLinkedList.addTail(5);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(4);
    expect(doubleLinkedList.head.previous).to.equal(null);
  });

  it('should remove tail', function(){
    doubleLinkedList.addTail(3);
    doubleLinkedList.addTail(4);
    doubleLinkedList.addTail(5);
    expect(doubleLinkedList.removeTail()).to.equal(5);
    expect(doubleLinkedList.tail.value).to.equal(4);
  });
  // add more tests here to test the functionality of doubleLinkedList
});
