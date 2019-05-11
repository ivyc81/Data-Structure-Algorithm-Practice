/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0;
    }

    function sum(currNode, currSum = 0){
      currSum += currNode.val;

      if(currNode.children.length === 0){
        return currSum;
      }

      for(let children of currNode.children){
        currSum = sum(children, currSum);
      }

      return currSum;
    }

    return sum(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0;
    }

    function evens(currNode, count = 0){
      count = currNode.val % 2 === 0? count + 1 : count;

      if(currNode.children.length === 0){
        return count;
      }

      for(let children of currNode.children){
        count = evens(children, count);
      }

      return count;
    }

    return evens(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0;
    }

    function greater(currNode, min, count = 0){
      count = currNode.val > min ? count + 1 : count;

      if(currNode.children.length === 0){
        return count;
      }

      for(let children of currNode.children){
        count = greater(children, min, count);
      }

      return count;
    }

    return greater(this.root, lowerBound);
  }
}

module.exports = { Tree, TreeNode };
