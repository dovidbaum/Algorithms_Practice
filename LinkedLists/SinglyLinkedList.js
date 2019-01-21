class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    add(item){ //insert node at the beginning of the list
        let node = new Node(item);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    insertAt(item,location){
        if(location > this.size()){
            return null;
        }
        let i = 0;
        let curr = this.head;
        let prev = null;
        while(i < location){
            prev = curr;
            curr = curr.next;
            i++;
        }
        if(prev === null){ //insert at head
            this.add(item);
        }else {
            let node = new Node(item);
            prev.next = node;
            node.next = curr;
            this.length++;
        }
    }
    // if item exists removes that item from the linkedList and return it, else returns null
    removeFrom(location){
        if(location > this.size()-1){
            return null;
        }
        let i = 0;
        let curr = this.head;
        let prev = null;
        while(i < location){
            prev = curr;
            curr = curr.next;
            i++;
        }
        if(prev == null){
            this.head = curr.next;
        }else{
            prev.next = curr.next;
        }
        this.length--;
        return curr.item;
    }
    // if item exists removes that item from the linkedList and return it, else returns null
    removeItem(item){
        let curr = this.head;
        let prev;
        while(curr.next !== null && curr.item !== item){
            prev = curr;
            curr = curr.next;
        }
        if(prev == null){
            this.head = curr.next;
            this.length--;
        }else if(curr.item === item){ //remove item
            prev.next = curr.next;
            this.length--;
            return curr.item;
        }else{
            return null;
        }
    }
    isEmpty(){
        return this.length === 0;
    }
    size(){
        return this.length;
    }
    printList(){
        let curr = this.head;
        let i = 0;
        console.log("LinkedList size: " + this.length);
        while(curr != null){
            console.log("item#: "+ i + " item: " + curr.item);
            curr = curr.next;
            i++;
        }
    }
}
/*
// testing if LinkedList was built correctly
let linkedList = new SinglyLinkedList();
linkedList.add(7);
linkedList.add(22);
linkedList.add(36);
linkedList.add(54);
linkedList.printList();
linkedList.removeFrom(2);
linkedList.printList();
linkedList.removeFrom(0);
linkedList.printList();
linkedList.removeItem(7);
linkedList.removeItem(36);
linkedList.printList();
console.log(linkedList.isEmpty());
linkedList.insertAt(1,17);
linkedList.printList();
linkedList.insertAt(17,0);
linkedList.printList();
linkedList.insertAt(18,1);
linkedList.insertAt(19,2);
linkedList.removeItem(19);
linkedList.removeItem(17);
linkedList.printList();
*/

// testing removeDuplicates
let linkedList = new SinglyLinkedList();
linkedList.add(7);
linkedList.add(22);
linkedList.add(36);
linkedList.add(54);
linkedList.add(22);
linkedList.add(7);
linkedList.add(59);
linkedList.printList();
removeDuplicates(linkedList);
linkedList.printList();

// remove duplicates from an unsorted linked list
function removeDuplicates(linkedList){
    let set = new Set();
    let curr = linkedList.head;
    while(curr != null){
        if(set.has(curr.item)){
            linkedList.removeItem(curr.item);
        }else {
            set.add(curr.item);
        }
        curr = curr.next;
    }
}

// returns the Kth to last element in a linked list
//todo
function getKthToLast(k){
//it's going to be alot like insertAt
}











