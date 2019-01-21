/* A min-heap is a complete(all levels filled except maybe last which is filled from left to right)
Binary Tree in which each parent is smaller than it's child.
    Represented as an array (starting at 1)  where
    left child: i * 2
    right child: i * 2 + 1
    parent: floor(i / 2)
 */
class heap{
    constructor(){
        this.nodes = [null];
        this.open = 1;
    }


    // insert at first open spot, if out of order swap with parent until in correct spot - O(logn)
    insert(data){
        this.nodes[this.open] = data;
        let parent = Math.floor(this.open / 2);
        while(parent > 0) {
            if (this.nodes[this.open] < this.nodes[parent]) {
                this.swap(this.open,parent);
            }else{
                break;
            }
            parent = Math.floor(parent/2);
        }
        this.open++;
    }
    peek(){
        return this.nodes[1];
    }
    removeKth(k){

    }
    //
    remove(data){

    }
    //O(Logn) as this operation needs to maintain the heap property (by calling heapify()) after removing root.
    // take out the root, swap value of root with the value added. then bubble new root to the correct spot (swapping with children)
    removeMin(){
        this.nodes[1] = this.nodes[this.open-1];
        this.nodes[this.open-1] = null;
        this.open--;
        this.heapifyDown();
        return this.nodes[1];

    }
    //todo - need to fix
    heapifyDown(){
        let curr = 1;
        //while still has children - only check if left child because if no left child then won't be a right child
        while(this.nodes[curr*2] !== null){
            //get smaller child
            let smallerChild;
            if(this.nodes[curr*2+1] !== null && this.nodes[(curr*2)+1] < this.nodes[curr*2]){ // if right child is smaller
                smallerChild = Math.floor((curr*2)+1);
            }else{
                smallerChild = Math.floor(curr*2);
            }
            // If curr is smaller than both of its children then everythings in order
            if(this.nodes[Math.floor(curr)] <= this.nodes[Math.floor(smallerChild)]){
                return;
            }else{
                this.swap(curr,smallerChild);
                curr = smallerChild;
            }
        }
        return;
    }
    swap(i,j){
        let temp = this.nodes[i];
        this.nodes[i] = this.nodes[j];
        this.nodes[j] = temp;
    }
    print(){
        console.log(this.nodes);
    }


}
let h = new heap();
h.insert(10);
h.insert(15);
h.insert(20);
h.insert(17);
h.insert(25);
h.print();
h.removeMin();
h.print();
