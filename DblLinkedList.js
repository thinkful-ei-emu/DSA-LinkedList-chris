const _Node = require('./DblNode');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    if(this.head === null){
      this.tail = this.head = new _Node(item, null, this.head);
    } else{
      this.head.prev = this.head = new _Node(item, null, this.head);
    }
  }

  insertLast(item) {
    if(this.tail === null){
      this.head = this.tail = new _Node(item, this.tail, null);
    } else {
      this.tail.next = this.tail = new _Node(item, this.tail, null);
    }
  }

  find(item) {
    //Start at the head
    let currNode = this.head;
    //Check the list
    if (!this.head) {
      return null;
    }
    //Check for the item
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){
    if(!this.head){
      return null;
    }
    if(this.head.value === item) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
    if(previousNode.next === null){
      return;
    }
    currNode.next.prev = previousNode;
  }

  insertBefore(ogItm, newItm) {
    if(!this.head){
      return null;
    } else {
      let currNode = this.head;
      let previousNode = this.head;
      while((currNode !== null) && (currNode.value !== ogItm)){
        previousNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null){
        console.log('Item not found');
        return;
      }
      if (currNode === this.head) {
        return this.insertFirst(newItm);
      }
      previousNode.next = new _Node(newItm, previousNode, currNode);
      currNode.prev = previousNode.next;
    }
  }

  insertAfter(ogItm, newItm) {
    if(!this.head){
      return null;
    } else {
      let currNode = this.head;
      let nextNode = this.head;
      while((currNode !== null) && (currNode.value !== ogItm)){
        currNode = currNode.next;
        if(currNode === null){
          console.log('Item not found');
          return;
        }
        nextNode = currNode.next;
      }
      if(currNode === null){
        console.log('Item not found');
        return;
      }
      currNode.next = new _Node(newItm, currNode, nextNode);
      nextNode.prev = currNode.next;
    }
  }

  insertAt(pos, item) {
    if(!this.head){
      return null;
    } else {
      let currNode = this.head;
      let previousNode = this.head;
      for(let i=0; i<pos; i++){
        previousNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null){
        console.log('Position not valid');
        return;
      }
      previousNode.next = new _Node(item, previousNode, currNode);
      currNode.prev = previousNode.next;
    }
  }
}

function mainDLL() {
  const SLL = new LinkedList();
  
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Aquaria');
  SLL.insertLast('Caprica');
  SLL.insertLast('Gemenon');
  SLL.insertLast('Picon');
  SLL.insertLast('Sagittaron');
  SLL.remove('squirrel');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Tauron');
  SLL.insertAt(3, 'Kat');
  console.log(display(SLL));
  //   SLL.remove('Picon');
  reverseDblList(SLL);
  console.log(display(SLL));
}

function display(list) {
  let result = [];
  if(list.head === null){
    return null;
  }
  let currNode = list.head;
  
  while (currNode !== null){
    result.push(currNode);
    currNode = currNode.next;
  }
  return result;
}

function reverseDblList(list){
  let x = list.head;
  let y = list.tail;
  if(!list.head || !list.head.next){
    console.log('Invalid List');
  }
  let prevNode = null;
  let currNode = list.head;
  let nextNode;
    
  while(currNode){
    nextNode = currNode.next;
    currNode.next = prevNode;
    currNode.prev = nextNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  list.tail = x;
  list.head = y;
}
mainDLL();