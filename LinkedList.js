const _Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
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
      previousNode.next = new _Node(newItm, currNode);
    }
  }

  insertAfter(ogItm, newItm) {
    if(!this.head){
      return null;
    } else {
      let currNode = this.head;
      while((currNode !== null) && (currNode.value !== ogItm)){
        currNode = currNode.next;
      }
      if(currNode === null){
        console.log('Item not found');
        return;
      }
      currNode.next = new _Node(newItm, currNode.next);
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
      previousNode.next = new _Node(item, currNode);
    }
  }
}

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(3, 'Kat');
  // SLL.remove('Tauhida')
  // console.log(SLL);
  // console.log(SLL.head.value);
  // console.log(SLL.find('Athena'));
  // console.log(SLL.find('Helo'));
  // console.log(SLL.find('Kat'))

  console.log(display(SLL));
  //   console.log(size(SLL));
  //   console.log(isEmpty(SLL));
  //   console.log(findPrevious(SLL,'Hotdog'));
  //   console.log(findLast(SLL));
  console.log(listMedian(SLL));
//   console.log(display(SLL));
}

function display(list) {
  let result = [];
  if(list.head === null){
    return null;
  }
  let currNode = list.head;

  while (currNode !== null){
    result.push(currNode.value);
    currNode = currNode.next;
  }
  return result;
}

function size(list){
  let result = 0;
  if(list.head === null){
    return 0;
  }
  let currNode = list.head;

  while (currNode !== null){
    result++;
    currNode = currNode.next;
  }
  return result;
}

function isEmpty(list){
  if(list.head === null){
    return true;
  }
  return false;
}

function findPrevious(list, item){
  if(!list.head){
    return null;
  } else {
    let currNode = list.head;
    let previousNode = list.head;
    while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    if(currNode === list.head){
      console.log('No previous items');
    }
    return previousNode;
  }
}

function findLast(list) {
  if(!list.head){
    return null;
  } else {
    let currNode = list.head;
    while(currNode.next !== null){
      currNode = currNode.next;
    }
    return currNode;
  }
}

// main();



