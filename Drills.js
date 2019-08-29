// 4. Mystery program
// Analyze the following function (without running it in an IDE) 
// to determine what problem it is trying to solve. What is the 
// time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
// This code deletes any potential repeat values in the link
// O(n^2)

// 5. Reverse a list
// Write an algorithm to reverse a linked list. The time complexity 
// of your algorithm should be linear (O(n)). For this exercise, notice 
// we are not asking you just to print the linked list in reverse or 
// use another linked list to store the value in reverse order. Your 
// program should reverse the direction of a given singly linked list. 
// In other words, all pointers should point backward. BONUS: Solve 
// this problem using both recursive and iterative algorithms.

function reverseList(list){
  if(!list.head || !list.head.next){
    console.log('Invalid List');
  }
  let prevNode = null;
  let currNode = list.head;
  let nextNode;
    
  while(currNode){
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
    
  list.head = prevNode;
  return display(list);
  // Another solution;
  //   let currNode = list.head;
  //   let prevNode = list.head;
  //   let sze = size(list);
  //   for(let i=0; i<sze; i++){
  //     list.insertFirst(list.find(currNode.value).value);
  //     currNode = currNode.next;
  //     console.log(prevNode);
  //     list.remove(prevNode);    
  //     prevNode = currNode;
  //   }
    
  //Final Solution
//   if(list.head === null){
//     return null;
//   } else {
//     let currNode = list.head;
//     let previousNode = list.head;
//     list.insertLast(currNode.value);
//     currNode = currNode.next;
//     list.remove(previousNode.value);
//     let sze = size(list)-1;
//     for(let i=sze; i>1; i--){
//       previousNode = currNode;
//       list.insertAt(i, currNode.value);
//       list.remove(previousNode.value);
//       currNode = currNode.next;
//     }
}

// 6. 3rd from the end
// Write an algorithm to find the 3rd element from the end of a linked list. 
// Note You may be tempted to add a length property to your linked list class. 
// The length property is not a typical property of linked list, therefore 
// don't make any modification to the linked list class that is provided to you.

function thirdFromEnd(list){
  let currNode = list.head;
  let nextNode = currNode.next;
  let finalNode = nextNode.next;

  while (finalNode.next !== null){
    currNode = currNode.next;
    nextNode = currNode.next;
    finalNode = nextNode.next;
  }
  return currNode;
}

// 7. Middle of a list
// Write an algorithm to find the middle element of a linked list. Note You may be 
// tempted to add a length property to your linked list class. The length property 
// is not a typical property of linked list, therefore don't make any modification 
// to the linked list class that is provided to you. Also, finding the size of the 
// linked list using the size() function and dividing it by half will not find the 
// correct middle of the linked list. So, don't use either of these approaches.
function listMedian(list){
  if(!list.head){
    return null;
  } else {
    let currNode = list.head;
    let sze = Math.floor(size(list)/2);
    for(let i=0; i<sze; i++){
      currNode = currNode.next;
    }
    return currNode.value;
  }
}


// 8. Cycle in a list
// Write an algorithm to find whether a linked list has a cycle (i.e., whether a 
//     node in the list has its next value pointing to an earlier node in the 
//     list). For this exercise, create a linked list with the name CycleList. 
//     Be sure to insert nodes in the list so that it has a cycle. Then test 
//     your program with a cycleList function.
function uglyMain(){
  const SLL = new LinkedList();
  
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  let tempNode = SLL.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  tempNode.next = new _Node('Chris', SLL.find('Helo'));
  if(listCycle(SLL)){
    console.log('the list has a cycle');
  }else {
    console.log(display(SLL));
  }
}
function listCycle(list){
  let fast = list.head;
  let slow = list.head;
  
  while(slow.next !== null){
    slow = slow.next;
    if(fast.next !== null){
      fast = fast.next.next;
    } else {
      return false;
    }
    if(slow === null || fast === null){
      return false;
    }
    if(slow === fast){
      return true;
    }
  }
}
//   uglyMain();


// 9. Doubly linked list
// Implement a doubly linked list. The primary functions of the doubly linked 
// list would be insert (First, Last, Before, After, and At), remove, and find. 
// Write a function mainDLL, and within it create the doubly linked list DLL 
// and add the following items to it: Aquaria, Caprica, Gemenon, Picon, Sagittaron.

// Add Tauron to the list
// Remove Picon from the list



// 10. Reverse a DLL
// Given the doubly linked list above, write a program that reverses the doubly 
// linked list. How is this implementation different than reversing the singly 
// linked list?