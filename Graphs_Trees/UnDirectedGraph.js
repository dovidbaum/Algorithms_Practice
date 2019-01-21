/*  Adjaceny list: for each vertex i, store an array of all the vertices adjacent to it

*/

class UnDirectedGraph{
    constructor(V=0){
        this.vertices = new Array(V);
        for(let i = 0; i<this.vertices.length;i++){
            this.vertices[i] = [];
        }

    }

    addEdge(n1,n2){
        // if either edge does not exist return null
        if(n1 > this.vertices.length-1 || n2 > this.vertices.length-1){
            return null;
        }else{ // insert in both because UnDirected

            this.vertices[n1].push(n2);
            this.vertices[n2].push(n1);
        }
    }
    //O(Deg(n1) + O(Deg(n2))
    removeEdge(n1,n2){
        // if one does not exist then their obviously can't be an edge between them
        if(n1 > this.vertices.length-1 || n2 > this.vertices.length-1) {
            return;
        }else{
            // remove from n1 list
            let curr = this.vertices[n1];
            let indexOf = curr.indexOf(n2);
            curr.splice(indexOf,1);
            // remove from n2 list
            curr = this.vertices[n2];
            indexOf = curr.indexOf(n1);
            curr.splice(indexOf,1);
        }

    }
    // I will just add
    addVertex(){
        this.vertices.push([]);
    }
    DFS(){

    }
    printGraph(){
        for(let i = 0; i< this.vertices.length;i++){
            console.log(i + " -> "+ this.vertices[i]);
        }
    }
}

//TESTING
let graph = new UnDirectedGraph(3);
graph.addEdge(0,2);
graph.addEdge(0,1);
console.log("g1")
graph.printGraph();
graph.removeEdge(0,1);

console.log("g2")

graph.printGraph();