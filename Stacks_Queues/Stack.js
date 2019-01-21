/* This is my implementation of a Stack. used for DFS
    functions: pop(),push(item),peek(),isEmpty()*/
class Stack{
    constructor(){
        this.items = [];
        this.currLowest = Number.MAX_SAFE_INTEGER;
    }
    push(item){ // push item to top of Stack
        this.items.push(item);
        if(item < this.currLowest){
            this.currLowest = item;
        }
    }
    pop(){ // remove item to top of Stack
        this.items.pop();
    }
    peek(){ // get but don't delete top of Stack
        return this.items[this.items.length-1];
    }
    isEmpty(){
       return this.items.length === 0;
    }
    min(){ // returns min element in O(1)
        return this.currLowest;
    }
}


let stack = new Stack();
stack.push(4);
stack.push(22);
stack.push(13);
console.log(stack.peek());
console.log("lowest: " + stack.min());
stack.push(3);
console.log("lowest: " + stack.min());
stack.pop();
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.isEmpty());
stack.pop();
console.log(stack.isEmpty());

/* Implementation of a Queue using two Stacks */
class QueueOfStacks{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    add(item){ //add item to the front of the list
    }
    remove(){ //remove from the back of the list
    }
    peek(){ //returns the element at the front. Does not delete it
    }
    isEmpty(){
    }
}
