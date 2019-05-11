/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root){
      return 0;
    }

    function findMin(currNode, count = 0){
      count += 1;
      if(!currNode.left && !currNode.right){
        return count;
      }

      return Math.min(findMin(currNode.left, count), findMin(currNode.right, count));
    }

    return findMin(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root){
      return 0;
    }

    function findMax(currNode, count = 0){
      count += 1;
      if(!currNode.left && !currNode.right){
        return count;
      }

      return Math.max(findMax(currNode.left, count), findMax(currNode.right, count));
    }

    return findMax(this.root)

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root){
      return 0;
    }

    function findMax(currNode, sum = 0){
      sum += currNode.val;
      if(!currNode.left && !currNode.right){
        return sum;
      }

      return Math.max(findMax(currNode.left, sum), findMax(currNode.right, sum));
    }

    return findMax(this.root)
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root){
      return null;
    }

    function findMin(currNode, limit, min = Infinity){
      min = currNode.val > limit ? Math.min(min, currNode.val): min;
      if(!currNode.left && !currNode.right){
        return min;
      }

      return Math.min(findMin(currNode.left, limit, min), findMin(currNode.right, limit, min));
    }

    const min = findMin(this.root, lowerBound);
    return  min === Infinity ? null : min;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
