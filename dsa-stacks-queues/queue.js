/** Node: node for a queue. */
const LinkedList = require('./linked-list');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    // this._linkedList = new LinkedList;
    this._array = [];
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

    // linkedList
    // this._linkedList.push(val);
    // this.first = this._linkedList.head;
    // this.last = this._linkedList.tail;
    // this.size = this._linkedList.length;

    // array
    this._array.push({val});
    this.first = this._array[0];
    this.last = this._array[this._array.length - 1];
    this.size = this._array.length;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw Error('queue is empty');
    }

    // linkedList
    // const returnVal = this._linkedList.shift();
    // this.first = this._linkedList.head;
    // this.last = this._linkedList.tail;
    // this.size = this._linkedList.length;

    // array
    const returnVal = this._array.shift().val;
    this.first = this._array[0];
    this.last = this._array[this._array.length - 1];
    this.size = this._array.length;

    return returnVal;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.size > 0){
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
