//todo input time complexities next to each function
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
        this.nodeCount = 0;
    }
    insert(data) {
        let node = new Node(data);
        if(this.root === null){ //if empty
            this.root = node;
            this.nodeCount++;
        }else{
            //
            this._insertNode(this.root,node)

        }
    }
    // Helper function that recusively compares newNode with curr to place in the BST
    // O(logn) if balanced
    _insertNode(curr, newNode){
        if(newNode.data <= curr.data){ // if newNode <= curr then Go or Insert Left
            if(curr.left === null){
                curr.left = newNode;
                this.nodeCount++;
            }else{
                this._insertNode(curr.left,newNode);
            }
        }else{ // if newNode > curr then Go or Insert Right
            if(curr.right === null){
                curr.right = newNode;
                this.nodeCount++;
            }else{
                this._insertNode(curr.right,newNode);
            }
        }
    }
    remove(data){
        // case 1: traverse tree looking for the node, if curr = leaf just remove it
        // case 2: if curr has one child then parent of curr's child should now point to curr's child
        // case 3: if curr has two children
            // find minimum value from the right subtree
            // replace VALUE of node to be removed with found minimum
            // Now that subtree contains a duplicate so simply remove it using case 1 or 2
        if(this.root == null){
            return null;
        }else{
            this._removeNode(this.root,data,null);
        }

    }

    // Helper function that recursively traverses tree to remove node with passed in data
    _removeNode(curr,data,parent){
        // case 1: node to be deleted is a leaf - simply remove parents connection to it
        // case 2: node to be deleted has one child
        if(curr.data === data && (curr.left == null || curr.right == null)){
            // get the child of curr that parent will now point to
            console.log("in case 1 & 2");
            let child;
            if(curr.left !== null){
                child = curr.left;
            }else{
                child = curr.right;
            }
            // if root needs to be deleted then update root
            if(this.root === curr){ //
                this.root = child;
            }else{ // make the parent of curr point to its child
                if(parent.left === curr) {
                    parent.left = child;
                }else{
                    parent.right = child;
                }
            }
            this.nodeCount--;
        // case 3: node to be deleted has two children
        }else if(curr.data === data){ //if two children
            console.log("in case 3");
            // get the minimum value from the right subtree
            let min = this.findMinNode(curr.right);
            let minValue = min.data;
            curr.data = minValue; // replace value of node to be removed with minimum value of right subtree
            // remove duplicate value from right subtree - will be caught by case 1 or 2
            this._removeNode(curr.right,minValue,curr);
        }else{ //traverse tree looking for node to delete
            if(data <= curr.data){ // go left
                this._removeNode(curr.left,data,curr);
            }else{ // go right
                this._removeNode(curr.right,data,curr);
            }
        }
    }
    //  returnss the minimum value of a tree. takes in the root of the tree
    findMinNode(curr){
       if(curr == null){
           return null;
       }else if (curr.left === null){
            return curr;
       }else{
           this.findMinNode(curr.left);
       }
    }
    getRootNode(){
        return this.root;
    }
    inOrder(node) {
        if(node === null){
            return;
        }
        if(node.left){
            this.inOrder(node.left);
        }

        console.log("node = "+node.data);

        if(node.right){
            this.inOrder((node.right));
        }

    }
    preOrder(node){
        if(node === null){
            return;
        }
        console.log("node = "+node.data);
        if(node.left){
            this.preOrder(node.left);
        }
        if(node.right){
            this.preOrder(node.right);
        }

    }
    postOrder(node){
        if(node === null){
            return;
        }
        if(node.left){
            this.postOrder(node.left);
        }
        if(node.right){
            this.postOrder(node.right);
        }
        console.log("node = "+node.data);
    }
    // For DFS you can use either preOrder,inOrder,postOrder
    DFSearch(){
        this.preOrder(this.root);
    }
    //return true if data is in tree else false - go level by level
 /*   BFSearch(data){
        let curr = this.root;
        // for each level, print the level
        for(let i = 0; i< this.getHeight(this.root);i++){
            return this.BFSSearchHelper(curr,i+1,data);
        }
    }
    BFSSearchHelper(curr,level,data){
        if(curr == null){
            return;
        }else if(level == 1 && curr.data == data ){
            return true;
        }else{

        }
    }
    */
    BiDirectionalSearch(){

    }
    //the number of edges on the longest path from the root to leaf
    getHeight(curr){
        if(curr == null){
            return 0;
        }else{
            let leftHeight = getHeight(curr.left);
            let rightHeight = getHeight(curr.right);

            if(leftHeight > rightHeight){
                return leftHeight+1;
            }else{
                return rightHeight+1;
            }
        }
    }
    getSize(){
        return this.nodeCount;
    }
    //Given the root to a binary tree, create a list of all the nodes at each level
    BTreeLevelToList(root){
        let result = [];
        let currLevel = [];
        let parents;
        if(root != null){
            currLevel.push(root);
        }
        while(currLevel.length != 0){
            result.push(currLevel); // add previous level
            parents = currLevel;
            currLevel = []; // empty curr level
            for(let i = 0; i<parents.length;i++){
                if(parents[i].left != null){
                    currLevel.push(parents[i].left);
                }
                if(parents[i].right != null){
                    currLevel.push(parents[i].right);
                }
            }
        }
        return result;
    }

}
console.log("BST");
let bst = new BST();
bst.insert(4);
//bst.inOrder(bst.getRootNode());
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(5);
console.log("inOrder");
bst.inOrder(bst.getRootNode());
console.log("preOrder");
bst.preOrder(bst.getRootNode());
console.log("postOrder");
bst.postOrder(bst.getRootNode());
bst.remove(5);
console.log("BST2");
let bst2 = new BST();
bst2.insert(4);
bst2.insert(3);
bst2.insert(5);
console.log("preOrder");
bst2.preOrder(bst2.getRootNode());
bst2.remove(5);
console.log("preOrder");
bst2.preOrder(bst2.getRootNode());
bst2.remove(3);
console.log("preOrder");
bst2.preOrder(bst2.getRootNode());
bst2.remove(4);
console.log("preOrder");
bst2.preOrder(bst2.getRootNode());
console.log("BST3");
let bst3 = new BST();
bst3.insert(3);
bst3.remove(3);
console.log("preOrder");
bst3.preOrder(bst3.getRootNode());
bst3.insert(3);
bst3.insert(5);
bst3.insert(6);
bst3.insert(4);
console.log("preOrder");
bst3.preOrder(bst3.getRootNode());
bst3.remove(5);
console.log("preOrder");
bst3.preOrder(bst3.getRootNode());
console.log("BST4");
let bst4 = new BST();
bst4.insert(20);
bst4.insert(8);
bst4.insert(22);
bst4.insert(4);
bst4.insert(12);
bst4.insert(10);
bst4.insert(14);
console.log("BTreeLevelToList");
console.log(bst4.BTreeLevelToList(bst4.getRootNode()));















