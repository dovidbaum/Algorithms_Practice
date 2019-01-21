// used for iterative DFS in Directed Graph
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
// used for BFS
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


class DirectedGraph{
    constructor(V=0){
        this.vertices = new Array(V);
        for(let i = 0; i<this.vertices.length;i++){
            this.vertices[i] = [];
        }

    }

    addEdge(src,dst){
        // if either edge does not exist return null
        if(src > this.vertices.length-1 || dst > this.vertices.length-1){
            return null;
        }else{
            this.vertices[src].push(dst);
        }
    }
    //O(Deg(src) - go to src, iterate through children to remove
    removeEdge(src,dst){
        // if one does not exist then their obviously can't be an edge between them
        if(src > this.vertices.length-1 || dst > this.vertices.length-1) {
            return;
        }else{
            // remove from src list
            let curr = this.vertices[src];
            let indexOf = curr.indexOf(dst);
            curr.splice(indexOf,1);

        }

    }
    // I will just add
    addVertex(){
        this.vertices.push([]);
    }
    //O(V+E)
    dfsRecursive(){
        let visited = new Set();
        for(let i = 0; i<this.vertices.length;i++){
            if(!visited.has(i)){ // if this node has not yet been visited
              //  console.log(i);
                visited.add(i);
                this.dfsRecursiveHelper(i,visited);
            }
        }
        console.log(visited);
    }
    dfsRecursiveHelper(curr,visited){
        let v;
        for(let i = 0; i< this.vertices[curr].length;i++){
            v = this.vertices[curr][i];
            if(!visited.has(v)){
                //console.log(v);
                visited.add(v);
                this.dfsRecursiveHelper(v,visited)
            }
        }
    }
    //O(V+E)
    dfsIterative(curr){
        let visited = new Set();
        let v;
        let stack = new Stack();
        stack.push(curr);

        while(!stack.isEmpty()) {
            v = stack.peek();
            stack.pop();
            if (!visited.has(v)) { // if not yet visited
                visited.add(v);

                // get all adjacent vertices of v and push onto stack
                let neighbors = this.vertices[v];
                for (let i = 0; i < neighbors.length; i++) {
                    if (!visited.has(neighbors[i])) { // if not yet visited
                        stack.push(neighbors[i]);
                    }
                }
            }
        }
        console.log(visited);
    }
    // will only be true iff DFS has a back edge
    isCycle(){

    }
    BFS(root){
        let q = new Queue();
        let visited = new Set();
        q.add(root);
        let neighbors;
        let n;
        let curr;

        while(!q.isEmpty()){
            curr = q.peek();
            q.remove();
            visited.add(curr);
            neighbors = this.vertices[curr];
            for(let i = 0; i< neighbors.length; i++){
                n = neighbors[i];
                if(!visited.has(n)){
                    q.add(n);
                    visited.add(n);
                }
            }
        }
        console.log(visited);
    }
    printGraph(){
        for(let i = 0; i< this.vertices.length;i++){
            console.log(i + " -> "+ this.vertices[i]);
        }
    }
}
console.log("G1")
let graph = new DirectedGraph(4);
graph.addEdge(0,1);
graph.addEdge(0,3);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.addEdge(3,2);
graph.addEdge(3,3);
graph.printGraph();
console.log("DFS Iterative");
graph.dfsIterative(0);
console.log("DFS Recursive");
graph.dfsRecursive();
console.log("removing edges")
graph.removeEdge(0,1);
graph.removeEdge(0,0);
graph.removeEdge(3,3);
graph.printGraph();
console.log("G2")
let graph2 = new DirectedGraph(3);
graph2.addEdge(0,1);
graph2.addEdge(0,2);
graph2.addEdge(1,2);
graph2.addEdge(2,2);
graph2.addEdge(2,0);
graph2.printGraph();
console.log("DFS Iterative");
graph2.dfsIterative(0);
console.log("DFS Recursive");
graph2.dfsRecursive();
console.log("G3")
let graph3 = new DirectedGraph(5);
graph3.addEdge(0,1);
graph3.addEdge(0,2);
graph3.addEdge(0,3);
graph3.addEdge(2,4);
graph3.addEdge(1,0);
graph3.addEdge(2,0);
graph3.addEdge(3,0);
graph3.addEdge(4,2);
graph3.printGraph();
console.log("DFS Iterative");
graph3.dfsIterative(0);
console.log("DFS Recursive");
graph3.dfsRecursive();
console.log("G4")
let graph4 = new DirectedGraph(5);
graph4.addEdge(0,3);
graph4.addEdge(0,2);
graph4.addEdge(1,0);
graph4.addEdge(2,1);
graph4.addEdge(3,4);
graph4.addEdge(4,0);
graph4.printGraph();
console.log("DFS Iterative");
graph4.dfsIterative(0);
console.log("DFS Recursive");
graph4.dfsRecursive();
console.log("G5")
let graph5 = new DirectedGraph(6);
graph5.addEdge(0,1);
graph5.addEdge(0,4);
graph5.addEdge(0,5);
graph5.addEdge(1,3);
graph5.addEdge(1,4);
graph5.addEdge(2,1);
graph5.addEdge(3,2);
graph5.addEdge(3,4);
graph5.printGraph();
console.log("BFS");
graph5.BFS(0);
