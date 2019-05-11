/** Node: node for a Deque. */
// const LinkedList = require('./linked-list');
const DoubleLinkedList = require('./double-linked-list');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Deque: chained-together nodes where you can
 *  remove from the front/back or add to the front/back. */

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    // this._linkedList = new LinkedList;
    this._doubleLinkedList = new DoubleLinkedList;
    // this._array = [];
  }

  /** appendright(val): add new value to end of the deque. Returns undefined. */

  appendleft(val) {

    // doubleLinkedList
    this._doubleLinkedList.unshift(val);
    this.first = this._doubleLinkedList.head;
    this.last = this._doubleLinkedList.tail;
    this.size = this._doubleLinkedList.length;
  }


  /** appendright(val): add new value to end of the deque. Returns undefined. */

  appendright(val) {

    // doubleLinkedList
    this._doubleLinkedList.push(val);
    this.first = this._doubleLinkedList.head;
    this.last = this._doubleLinkedList.tail;
    this.size = this._doubleLinkedList.length;
  }

  /** popleft(): remove the node from the start of the deque
   * and return its value. Should throw an error if the deque is empty. */

  popleft() {
    if (this.size === 0) {
      throw Error('queue is empty');
    }

    // doubleLinkedList
    const returnVal = this._doubleLinkedList.shift();
    this.first = this._doubleLinkedList.head;
    this.last = this._doubleLinkedList.tail;
    this.size = this._doubleLinkedList.length;

    return returnVal;
  }

  /** popleft(): remove the node from the start of the deque
   * and return its value. Should throw an error if the deque is empty. */

  popright() {
    if (this.size === 0) {
      throw Error('queue is empty');
    }

    // doubleLinkedList
    const returnVal = this._doubleLinkedList.pop();
    this.first = this._doubleLinkedList.head;
    this.last = this._doubleLinkedList.tail;
    this.size = this._doubleLinkedList.length;

    return returnVal;
  }

  /** peekleft(): return the value of the first node in the deque. */

  peekleft() {
    if (this.size > 0) {
      return this.first.val;
    }
  }

  /** peekright(): return the value of the last node in the deque. */

  peekright() {
    if (this.size > 0) {
      return this.last.val;
    }
  }

  /** isEmpty(): return true if the deque is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Deque;
