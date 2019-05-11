/** Node: node for a stack. */
const LinkedList = require('./linked-list');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    //this._linkedList = new LinkedList;
    this._array = [];
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {

    // linkedList
    // this._linkedList.unshift(val);
    // this.first = this._linkedList.head;
    // this.last = this._linkedList.tail;
    // this.size = this._linkedList.length;

    // array
    this._array.push({val});
    this.first = this._array[this._array.length - 1];
    this.last = this._array[0];
    this.size = this._array.length;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0){
      throw Error('stack is empty');
    }

    // linkedList
    // const returnVal = this._linkedList.shift();
    // this.first = this._linkedList.head;
    // this.last = this._linkedList.tail;
    // this.size = this._linkedList.length;

    // array
    const returnVal = this._array.pop().val;
    this.first = this._array[this._array.length - 1];
    this.last = this._array[0];
    this.size = this._array.length;

    return returnVal;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if(this.size > 0){
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
