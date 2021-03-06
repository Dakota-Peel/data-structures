describe('treeAdvanced', function() {
  var tree;

  beforeEach(function() {
    tree = TreeAdv();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it ('should refer to the parent node or null when there is no node', function() {
    //tests
    tree.addChild(2);
    tree.addChild(4);
    tree.addChild(6);
    tree.children[0].addChild(5);
    tree.children[1].addChild(10);
    tree.children[2].addChild(15);
    expect(tree.children[1].children[0].parent.value).to.equal(4);
    expect(tree.parent).to.equal(null);
  });

  it('.removeFromParent() method should disassociate the tree with its parent (in both directions)', function() {
    tree.addChild(2);
    tree.addChild(4);
    tree.addChild(6);
    tree.children[0].addChild(5);
    tree.children[1].addChild(10);
    tree.children[2].addChild(15);
    expect(tree.children[1].removeFromParent()).to.equal(4);
    expect(tree.children[1].value).to.equal(6);
    // expect(tree.parent).to.equal(null);
  });

  it('.traverse() method calls a callback function on the executing node and all its children', function() {
    tree.addChild(2);
    tree.addChild(4);
    tree.addChild(6);
    tree.children[0].addChild(5);
    tree.children[1].addChild(10);
    tree.children[2].addChild(15);
    var test = [];
    tree.traverse(function(val) {test.push(val)});
    expect(test.toString()).to.equal([2, 5, 4, 10, 6, 15].toString());
  });

});