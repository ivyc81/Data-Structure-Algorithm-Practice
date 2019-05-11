/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(this.head === null){
      this.head = newNode;
    }

    if(this.tail !== null){
      this.tail.next = newNode;
    }

    this.length ++;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(this.tail === null){
      this.tail = newNode;
    }

    if(this.head !== null){
      newNode.next = this.head;
    }

    this.length ++;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.head === null){
      return null;
    }

    const poppedVal = this.tail.val;

    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      this.length --;
      return poppedVal;
    }

    let current = this.head;
    while(current.next !== this.tail){
      current = current.next;
    }

    this.tail = current;
    current.next = null;
    this.length --;
    return poppedVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.head === null){
      return null;
    }

    const shiftedVal = this.head.val;

    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      this.length --;
      return shiftedVal;
    }

    this.head = this.head.next;
    this.length --;
    return shiftedVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length) {
      return undefined;
    }

    let currNode = this.head;

    for(let i = 0; i < idx; i++){
      currNode = currNode.next;
    }

    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length) {
      return undefined;
    }

    let currNode = this.head;

    for(let i = 0; i < idx; i++){
      currNode = currNode.next;
    }

    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length) {
      return undefined;
    }

    const newNode = new Node(val);
    this.length ++;

    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
      return undefined;
    }

    if(idx === 0){
      newNode.next = this.head;
      this.head = newNode;

      return undefined;
    }

    if(idx === this.length - 1){
      this.tail.next = newNode;
      this.tail = newNode;

      return undefined;
    }

    let currNode = this.head;

    for(let i = 0; i < idx - 1; i++){
      currNode = currNode.next;
    }

    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx >= this.length) {
      return undefined;
    }

    let currNode = this.head;
    this.length --;

    if(idx === 0){
      if(this.head === this.tail){
        let removedVal = currNode.val;
        this.head = null;
        this.tail = null;

        return removedVal;
      }
      let removedVal = currNode.val;
      this.head = currNode.next;

      return removedVal;
    }

    for(let i = 0; i < idx - 1; i++){
      currNode = currNode.next;
    }

    if(currNode.next === this.tail){
      let removedVal = this.tail.val;
      this.tail = currNode;
      currNode.next = null;

      return removedVal;
    }

    let removedVal = currNode.next.val;
    currNode.next = currNode.next.next;

    return removedVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0){
      return 0;
    }

    let sum = 0
    let currNode = this.head;
    for(let i = 0; i < this.length; i++){
      sum += currNode.val;
      currNode = currNode.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
