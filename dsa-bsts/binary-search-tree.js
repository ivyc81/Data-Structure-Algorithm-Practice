class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    let currNode = this.root;

    if (!currNode) {
      this.root = newNode;
    }

    while (currNode) {
      if (val > currNode.val) {
        if (!currNode.right) {
          currNode.right = newNode;
          currNode = null;
        } else {
          currNode = currNode.right;
        }
      } else {
        if (!currNode.left) {
          currNode.left = newNode;
          currNode = null;
        } else {
          currNode = currNode.left;
        }
      }
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root) {
    const newNode = new Node(val);
    if (!currNode) {
      this.root = newNode;
      return this;
    }

    if (val > currNode.val) {
      if (!currNode.right) {
        currNode.right = newNode;
      } else {
        this.insertRecursively(val, currNode.right);
      }
    } else {
      if (!currNode.left) {
        currNode.left = newNode;
      } else {
        this.insertRecursively(val, currNode.left);
      }
    }

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return;
    }

    let currNode = this.root;
    while (currNode) {
      if (currNode.val === val) {
        return currNode;
      }
      if (val > currNode.val) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (!currNode) {
      return;
    }

    if (currNode.val === val) {
      return currNode;
    }

    if (val > currNode.val) {
      return this.findRecursively(val, currNode.right);
    } else {
      return this.findRecursively(val, currNode.left);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currNode = this.root, arr = []) {
    if (!currNode) {
      return arr;
    }

    arr.push(currNode.val);
    this.dfsPreOrder(currNode.left, arr);
    this.dfsPreOrder(currNode.right, arr);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currNode = this.root, arr = []) {
    if (!currNode) {
      return arr;
    }

    this.dfsInOrder(currNode.left, arr);
    arr.push(currNode.val);
    this.dfsInOrder(currNode.right, arr);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currNode = this.root, arr = []) {
    if (!currNode) {
      return arr;
    }

    this.dfsPostOrder(currNode.left, arr);
    this.dfsPostOrder(currNode.right, arr);
    arr.push(currNode.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const arr = [];
    let queue = [this.root];

    while (queue.length) {
      let currNode = queue.shift();
      arr.push(currNode.val);

      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);
    }

    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, currNode = this.root) {
    if (!currNode) {
      return;
    }

    if (currNode.left && val === currNode.left.val) {
      for(let children in currNode.left.children){
        this.insert(children.val);
      }
      return currNode.left;
    } else if (currNode.right && val === currNode.right.val) {
      for(let children in currNode.right.children){
        this.insert(children.val);
      }
      return currNode.right;
    }
    console.log('tree', this)

    if (val > currNode.val) {
      return this.remove(val, currNode.right);
    } else {
      return this.remove(val, currNode.left);
    }
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    return;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(currNode = this.root) {
    if (!currNode) {
      return;
    }

    if (!currNode.right.right) {
      return currNode.val;
    }
    return this.findSecondHighest(currNode.right);
  }
}

module.exports = BinarySearchTree;
