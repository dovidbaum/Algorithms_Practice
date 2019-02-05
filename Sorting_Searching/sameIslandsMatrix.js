/* Problem: find the largest number of the same islands in a 2D matrix. Islands are a group of connected 1's.
same iff one island is equal to another. */
/*
ex1:
input:
let input = [];
input.push([1,1,0,0,0]);
input.push([1,1,0,0,0]);
input.push([0,0,0,1,1]);
input.push([0,0,0,1,1]);
output: 2 because there are two islands with the same size
ex2:
input:
let input = [];
input.push([1,1,0,1,1]);
input.push([1,0,0,0,0]);
input.push([0,0,0,1]);
input.push([1,1,0,1,1]);
output: 2 because there are two islands size 2 and another 2 with size 3
ex3:
input:
let input = [];
input.push([1,1,0,1,1]);
input.push([0,0,0,0,0]);
input.push([0,0,0,1,1]);
input.push([1,1,0,1,1]);
output: 2 because there are three islands of size 2
*/
let input = [];
input.push([1,1,0,1,1]);
input.push([0,0,0,0,0]);
input.push([0,0,0,1,1]);
input.push([1,1,0,1,1]);
console.log(findSameIslands(input));
//first thing I know is that I'm going to have to traverse the matrix
function findSameIslands(matrix){
    let islandSize;
    let hash = {};
    let largestDistinct = 0;
    for(let i = 0; i< matrix.length;i++){ //iterate through each column
        for(let k = 0; k< matrix[i].length;k++){ // iterate through each row
            islandSize = getIslandSize(matrix,i,k);
            if(islandSize > 0) {
                if (hash[islandSize] == null) { // if the first time coming across an island of this size then add to hash
                    hash[islandSize] = 1;
                } else {
                    hash[islandSize]++;
                }
            }
        }
    }
    // now that I have all the sizes, just return the largest amount - this correspoinds to largest distinct islands
    for(let key in hash){
        if(hash[key] > largestDistinct) {
            largestDistinct = hash[key];
        }
    }
    return largestDistinct;
}
// BFS inspired to find size of island
function getIslandSize(matrix,row,col){
    //ensure not out of bounds and is the number we're looking for, 1
    if(row < 0 || col < 0 || row >= matrix.length ||
        col >= matrix[row].length || matrix[row][col] !== 1 ){
        return 0;
    }
    // Now we know we are looking at a 1 and therfeore have a size of at least 1
    let size = 1;
    matrix[row][col] = null; // mark as visited (assuming can't be given negative numbers)
    /* look at each one of the nodes neighbors checking if we should add for size
     Because this is done recursively, I'll hit each neighbor and if a neighbor is out of bounds it will return right
     away and never add it */
    for(let r = row-1; r<= row+1;r++){
        for(let c = col-1; c<= col+1;c++){
            size += getIslandSize(matrix,r,c);
        }
    }
    return size;
}
