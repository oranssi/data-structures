class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null; // head is the first node in the list
    this.size = 0; // size of the list
  }

  add(data) {

    const newNode = new Node(data); // create a new node

    if (!this.head) { // if the list is empty
      this.head = newNode; // set the new node as the head
    }
    else {
      let current = this.head; // start at the head
      while (current.next) { // while there is a next node
        current = current.next; // move to the next node
      }
      current.next = newNode; // set the new node as the next node
    }

    this.size++; // increment the size of the list
  }

  insertAt(data, index) {

    if(index < 0 || index > this.size) {
      return false;
    } // if the index is out of range return false

    const newNode = new Node(data); // create a new node
    let current = this.head; // start at the head
    let previous; // previous node

    if(index === 0) { // if the index is 0
      newNode.next = current; // set the new node's next to the current node
      this.head = newNode; // set the new node as the head
    } else {
      for (let i = 0; i < index; i++) { // loop through the list
        previous = current; // set the previous node to the current node
        current = current.next; // move to the next node in the list
      }

      newNode.next = current; // set the new node's next to the current node
      previous.next = newNode; // set the previous node's next to the new node
    }

    this.size++; // increment the size of the list
  }

  removeAt(index) {

    if (index < 0 || index >= this.size) {
      return false; // if the index is out of range return false
    }

    let current = this.head; // start at the head
    let previous; // previous node

    if (index === 0) { // if the index is 0 
      this.head = current.next; // set the head to the next node
    } else {
      for (let i = 0; i < index; i++) { // loop through the list
        previous = current; // set the previous node to the current node
        current = current.next; // move to the next node in the list
      } 
      previous.next = current.next; // set the previous node's next to the current node's next
    }

    this.size --; // decrement the size of the list
    return current.data; // return the removed node's data
  }

  printList() {
    let current = this.head; // start at the head
    let listString = ''; // create a result string
    while (current) { // while there is a current node
      listString += current.data + ' -> '; // add the current node's data to the result string
      current = current.next; // move to the next node
    }
    listString += 'null'; // add null to the end of the result string
    console.log(listString); // print the result string
  }
}

const numberList = new LinkedList(); // create a new linked list
numberList.add(1); // add 1 to the list
numberList.add(2); // add 2 to the list
numberList.add(3); // add 3 to the list
numberList.add(4); // add 4 to the list
numberList.insertAt(5, 2); // add 5 to the list at index 2
numberList.removeAt(3); // remove the node at index 3
numberList.printList(); // print the list
