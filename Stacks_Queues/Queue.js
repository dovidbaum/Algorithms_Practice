class Queue{
    constructor(){
        this.items = [];
    }
    add(item){ //add item to the front of the list
       this.items.unshift(item);
    }
    remove(){ //remove from the back of the list
        this.items.pop();
    }
    peek(){ //returns the element at the back. Does not delete it
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    print(){
        console.log(this.items);
    }
}
//TESTING
let q = new Queue();
q.add(72);
console.log(q.peek());
q.add(55);
q.add(-1);
console.log(q.peek());
q.remove();
console.log(q.peek());
q.remove();
q.add(55);
console.log(q.peek());
q.remove();
console.log(q.isEmpty());
q.remove();
console.log(q.isEmpty());
